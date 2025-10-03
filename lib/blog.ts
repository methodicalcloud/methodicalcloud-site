import posts from '@/app/_data/posts.json' assert { type: 'json' };

export type PostMeta = { slug: string; title: string; date: string | null; excerpt?: string; tags?: string[]; };
export type Post = PostMeta & { html: string };

const ALL = posts as Post[];

export function getAllPosts(): PostMeta[] { return ALL.map(({ html, ...meta }) => meta); }
export function getAllPostSlugs() { return ALL.map(p => ({ slug: p.slug })); }
export function getPostMeta(slug: string) { const p = ALL.find(p => p.slug === slug); if (!p) return undefined; const { html, ...meta } = p; return meta; }
export function getPostBySlug(slug: string) { return ALL.find(p => p.slug === slug); }

// Back-compat helpers if your pages import them:
export function getSortedPostsData(limit?: number) { const list = getAllPosts(); return typeof limit === 'number' ? list.slice(0, limit) : list; }
export function getPostsByTag(tag: string) {
  const needle = tag.toLowerCase();
  return getAllPosts().filter(p => (p.tags ?? []).some(t => String(t).toLowerCase() === needle));
}
