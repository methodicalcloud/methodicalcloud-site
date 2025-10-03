import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const dynamic = "force-static";

function formatDate(iso: string | null) {
  if (!iso) return "";
  try { return new Date(iso).toISOString().slice(0,10); } catch { return iso ?? ""; }
}

export default function BlogIndex() {
  const posts = getAllPosts();
  return (
    <main className="mx-auto max-w-4xl px-4 pb-16">
      <section className="py-12 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">The Methodical Blog</h1>
        <p className="mt-4 text-muted-foreground">Insights on automation, system design, infrastructure, and DevOps practices</p>
      </section>
      <div className="space-y-6">
        {posts.map((p) => (
          <article key={p.slug} className="rounded-2xl border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="text-sm text-muted-foreground">{formatDate(p.date)}</div>
              <h2 className="mt-2 text-2xl font-semibold">
                <Link href={`/blog/${p.slug}`} className="hover:underline">{p.title}</Link>
              </h2>
              {p.excerpt && <p className="mt-3 text-muted-foreground">{p.excerpt}</p>}
              {p.tags && p.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => <span key={t} className="rounded-full border px-2.5 py-0.5 text-xs text-muted-foreground">{t}</span>)}
                </div>
              )}
              <div className="mt-6 flex items-center justify-between">
                <div className="text-sm text-muted-foreground">By Larry Smith Jr., Founder, Methodical Cloud</div>
                <Link href={`/blog/${p.slug}`} className="text-primary hover:underline">Read more →</Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
