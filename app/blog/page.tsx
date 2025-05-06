import fs from "fs"
import path from "path"
import Link from "next/link"
import { parseMarkdownFile } from "@/lib/markdown"

export default function BlogPage() {
  // Get all blog posts from the content/blog directory
  const blogDir = path.join(process.cwd(), "content/blog")
  let posts = []

  try {
    if (fs.existsSync(blogDir)) {
      const files = fs.readdirSync(blogDir)

      posts = files
        .filter((file) => file.endsWith(".md"))
        .map((file) => {
          const filePath = path.join(blogDir, file)
          const { frontmatter } = parseMarkdownFile(filePath)
          return {
            slug: frontmatter.slug || file.replace(".md", ""),
            frontmatter,
          }
        })
        .sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime())
    }
  } catch (error) {
    console.error("Error reading blog posts:", error)
  }

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
              </div>

              {(post.frontmatter.excerpt || post.frontmatter.description) && (
                <p className="mt-3 text-gray-600 dark:text-gray-300">
                  {post.frontmatter.excerpt || post.frontmatter.description}
                </p>
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
