import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const root = process.cwd();
const postsDir = path.join(root, 'content', 'blog');
const outDir = path.join(root, 'app', '_data');
const outFile = path.join(outDir, 'posts.json');

const entries = fs.existsSync(postsDir)
  ? fs.readdirSync(postsDir, { withFileTypes: true })
  : [];

const mdFiles = entries
  .filter(d => d.isFile() && d.name.endsWith('.md'))
  .map(d => path.join(postsDir, d.name));

const posts = [];
for (const file of mdFiles) {
  const raw = fs.readFileSync(file, 'utf8');
  const { data, content } = matter(raw);
  const processed = await remark().use(html).process(content);
  const htmlContent = String(processed);

  const slug = path.basename(file).replace(/\.md$/, '');
  const title = data?.title ?? slug;
  const date = data?.date ?? null;
  const tags = Array.isArray(data?.tags) ? data.tags : [];
  const excerpt = data?.excerpt ?? content.trim().slice(0, 180) + (content.length > 180 ? '…' : '');

  posts.push({ slug, title, date, tags, excerpt, html: htmlContent });
}

// newest first when dates exist
posts.sort((a, b) => (a.date && b.date ? (a.date < b.date ? 1 : -1) : 0));

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, JSON.stringify(posts, null, 2), 'utf8');
console.log(`Wrote ${posts.length} posts → ${path.relative(root, outFile)}`);
