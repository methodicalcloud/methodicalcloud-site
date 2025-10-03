import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const root = process.cwd();
const postsDir = path.join(root, 'content', 'blog');
const outDir = path.join(root, 'app', '_data');
const outFile = path.join(outDir, 'posts.json');

// recursively list all .md files
function* walk(dir) {
  if (!fs.existsSync(dir)) return;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else if (e.isFile() && /\.md$/.test(e.name)) yield p;
  }
}

const files = [...walk(postsDir)];
const posts = [];

for (const file of files) {
  const raw = fs.readFileSync(file, 'utf8');
  const { data, content } = matter(raw);
  const processed = await remark().use(html).process(content);
  const htmlContent = String(processed);
  const slug = path.basename(file).replace(/\.md$/, '');
  posts.push({
    slug,
    title: data?.title ?? slug,
    date: data?.date ?? null,
    tags: Array.isArray(data?.tags) ? data.tags : [],
    excerpt: data?.excerpt ?? content.trim().slice(0, 180) + (content.length > 180 ? '…' : ''),
    html: htmlContent
  });
}

posts.sort((a, b) => (a.date && b.date ? (a.date < b.date ? 1 : -1) : 0));
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, JSON.stringify(posts, null, 2), 'utf8');
console.log(`Wrote ${posts.length} posts → ${path.relative(root, outFile)}`);
