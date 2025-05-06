import fs from "fs"
import path from "path"
import Link from "next/link"
import { parseMarkdownFile } from "@/lib/markdown"

interface BlogPost {
  slug: string
  frontmatter: {
    title: string
    date: string
    excerpt?: string
    description?: string
    tags?: string[]
  }
}

function getBlogPosts(): BlogPost[] {
  const blogDir = path.join(process.cwd(), "content/blog")
  const files = fs.readdirSync(blogDir)

  const posts = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const filePath = path.join(blogDir, file)
      const { frontmatter } = parseMarkdownFile(filePath)
      const slug = frontmatter.slug || file.replace(".md", "")

      return {
        slug,
        frontmatter: {
          title: frontmatter.title,
          date: frontmatter.date,
          excerpt: frontmatter.excerpt || frontmatter.description,
          description: frontmatter.description,
          tags: frontmatter.tags,
        },
      }
    })
    .sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime())

  return posts
}

export default function BlogPage() {
  const posts = getBlogPosts()

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>

      <div className="grid gap-8">
        {posts.map((post) => (
          <article key={post.slug} className="border-b pb-8">
            <Link href={`/blog/${post.slug}`} className="no-underline">
              <h2 className="text-2xl font-semibold hover:text-primary transition-colors">{post.frontmatter.title}</h2>
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
    </div>
  )
}
