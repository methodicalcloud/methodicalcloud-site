import Link from "next/link";
import { getAllPostSlugs, getPostBySlug } from "@/lib/blog";

export const dynamic = "force-static";

export async function generateStaticParams() {
  return getAllPostSlugs();
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-2xl font-semibold">Not found</h1>
        <p className="mt-2 text-muted-foreground">
          We couldn’t find that post. <Link href="/blog" className="underline">Back to blog</Link>.
        </p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <p className="text-sm text-muted-foreground">{post.date ?? ""}</p>
      <h1 className="mt-2 text-4xl font-extrabold tracking-tight">{post.title}</h1>

      {post.tags && post.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((t) => (
            <Link
              key={t}
              href={`/topics/${t}`}
              className="rounded-full border px-2.5 py-0.5 text-xs text-muted-foreground hover:bg-accent"
            >
              {t}
            </Link>
          ))}
        </div>
      )}

      <div className="mt-8 prose prose-invert max-w-none">
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>

      <div className="mt-12">
        <Link href="/blog" className="text-primary hover:underline">
          ← Back to blog
        </Link>
      </div>
    </main>
  );
}
