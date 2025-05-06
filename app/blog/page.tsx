import Link from "next/link"
import { getBlogPosts } from "@/lib/blog"

export const dynamic = "force-dynamic" // Force dynamic rendering for development

export default function BlogPage() {
  const posts = getBlogPosts()

  // Debug output
  console.log(`Found ${posts.length} blog posts`)

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>

      {posts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">No blog posts found.</p>
        </div>
      ) : (
        <div className="grid gap-8">
          {posts.map((post) => (
            <article key={post.slug} className="border-b pb-8">
              <Link href={`/blog/${post.slug}`} className="no-underline">
                <h2 className="text-2xl font-semibold hover:text-primary transition-colors">
                  {post.frontmatter.title}
                </h2>
              </Link>

              <div className="text-sm text-gray-500 mt-2">
                {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}

                {post.frontmatter.tags && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {post.frontmatter.tags.map((tag) => (
                      <span key={tag} className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {post.frontmatter.excerpt && (
                <p className="mt-3 text-gray-600 dark:text-gray-300">{post.frontmatter.excerpt}</p>
              )}

              <Link href={`/blog/${post.slug}`} className="text-primary hover:underline mt-4 inline-block">
                Read more →
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}
