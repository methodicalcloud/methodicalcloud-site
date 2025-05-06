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
  console.log("Getting blog posts...")

  try {
    // Use process.cwd() to get the correct path in both dev and production
    const blogDir = path.join(process.cwd(), "content/blog")
    console.log(`Looking for blog posts in: ${blogDir}`)

    // Check if directory exists
    if (!fs.existsSync(blogDir)) {
      console.error(`Blog directory not found: ${blogDir}`)
      return []
    }

    const files = fs.readdirSync(blogDir)
    console.log(`Found ${files.length} files in blog directory:`, files)

    const posts = files
      .filter((file) => file.endsWith(".md"))
      .map((file) => {
        const filePath = path.join(blogDir, file)
        console.log(`Processing file: ${filePath}`)

        try {
          const { frontmatter, content } = parseMarkdownFile(filePath)
          console.log(`Successfully parsed frontmatter for ${file}:`, frontmatter)

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

    console.log(`Successfully processed ${posts.length} blog posts`)
    return posts
  } catch (err) {
    console.error("Error reading blog directory:", err)
    return []
  }
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  console.log(`Looking for blog post with slug: ${slug}`)
  const posts = getBlogPosts()
  return posts.find((post) => post.slug === slug) || null
}
