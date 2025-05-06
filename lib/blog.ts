import fs from "fs"
import path from "path"
import { parseMarkdownFile } from "./markdown"

export interface BlogPost {
  slug: string
  frontmatter: {
    title: string
    date: string
    excerpt?: string
    description?: string
    summary?: string
    tags?: string[] | string
  }
  content: string
}

export function getBlogPosts(): BlogPost[] {
  // Use process.cwd() to get the correct path in both dev and production
  const blogDir = path.join(process.cwd(), "content/blog")

  // Check if directory exists
  if (!fs.existsSync(blogDir)) {
    console.warn(`Blog directory not found: ${blogDir}`)
    return []
  }

  try {
    const files = fs.readdirSync(blogDir)

    const posts = files
      .filter((file) => file.endsWith(".md"))
      .map((file) => {
        const filePath = path.join(blogDir, file)
        try {
          const { frontmatter, content } = parseMarkdownFile(filePath)

          // Normalize tags if they exist
          let tags = frontmatter.tags
          if (typeof tags === "string") {
            tags = tags.split(",").map((tag) => tag.trim())
          }

          return {
            slug: frontmatter.slug || file.replace(".md", ""),
            frontmatter: {
              ...frontmatter,
              tags,
              // Ensure we have an excerpt (use description or summary as fallback)
              excerpt: frontmatter.excerpt || frontmatter.description || frontmatter.summary || "",
            },
            content,
          }
        } catch (err) {
          console.error(`Error parsing markdown file ${file}:`, err)
          return null
        }
      })
      .filter(Boolean) // Remove any null entries
      .sort((a, b) => {
        // Sort by date (newest first)
        return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
      })

    return posts
  } catch (err) {
    console.error("Error reading blog directory:", err)
    return []
  }
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  const posts = getBlogPosts()
  return posts.find((post) => post.slug === slug) || null
}
