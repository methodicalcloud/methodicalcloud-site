import { notFound } from "next/navigation"
import Link from "next/link"
import { getBlogPostBySlug, getBlogPosts } from "@/lib/blog"
import BlogContent from "@/components/blog-content"

export const dynamic = "force-dynamic" // Force dynamic rendering for development

interface BlogPostParams {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPost({ params }: BlogPostParams) {
  const { slug } = params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    console.error(`Blog post not found: ${slug}`)
    notFound()
  }

  return (
    <div className="container mx-auto py-12 px-4 max-w-3xl">
      <Link href="/blog" className="text-primary hover:underline mb-6 inline-block">
        ← Back to Blog
      </Link>

      <article>
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.frontmatter.title}</h1>

          <div className="text-gray-500">
            {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}

            {post.frontmatter.tags && (
              <div className="mt-3 flex flex-wrap gap-2">
                {post.frontmatter.tags.map((tag) => (
                  <span key={tag} className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </header>

        <BlogContent content={post.content} />
      </article>
    </div>
  )
}
