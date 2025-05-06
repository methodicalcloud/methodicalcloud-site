import fs from "fs"
import path from "path"
import { notFound } from "next/navigation"
import Link from "next/link"
import { parseMarkdownFile } from "@/lib/markdown"
import BlogContent from "@/components/blog-content"

interface BlogPostParams {
  params: {
    slug: string
  }
}

export default function BlogPost({ params }: BlogPostParams) {
  const { slug } = params
  const blogDir = path.join(process.cwd(), "content/blog")

  try {
    if (!fs.existsSync(blogDir)) {
      console.error(`Blog directory not found: ${blogDir}`)
      notFound()
    }

    const files = fs.readdirSync(blogDir)

    // Find the file that matches the slug
    let postFile = null
    for (const file of files) {
      if (!file.endsWith(".md")) continue

      const filePath = path.join(blogDir, file)
      const { frontmatter } = parseMarkdownFile(filePath)

      if (frontmatter.slug === slug || file.replace(".md", "") === slug) {
        postFile = file
        break
      }
    }

    if (!postFile) {
      console.error(`Blog post not found for slug: ${slug}`)
      notFound()
    }

    const filePath = path.join(blogDir, postFile)
    const { frontmatter, content } = parseMarkdownFile(filePath)

    return (
      <div className="container mx-auto py-12 px-4 max-w-3xl">
        <Link href="/blog" className="text-primary hover:underline mb-6 inline-block">
          ← Back to Blog
        </Link>

        <article>
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{frontmatter.title}</h1>

            <div className="text-gray-500">
              {new Date(frontmatter.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}

              {frontmatter.tags && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {Array.isArray(frontmatter.tags)
                    ? frontmatter.tags.map((tag) => (
                        <span key={tag} className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">
                          {tag}
                        </span>
                      ))
                    : typeof frontmatter.tags === "string" &&
                      frontmatter.tags.split(",").map((tag) => (
                        <span key={tag.trim()} className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">
                          {tag.trim()}
                        </span>
                      ))}
                </div>
              )}
            </div>
          </header>

          <BlogContent content={content} />
        </article>
      </div>
    )
  } catch (error) {
    console.error("Error reading blog post:", error)
    notFound()
  }
}
