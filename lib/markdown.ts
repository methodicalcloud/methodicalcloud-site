import fs from "fs"
import matter from "gray-matter"

export function parseMarkdownFile(filePath: string) {
  const fileContent = fs.readFileSync(filePath, "utf8")
  const { data: frontmatter, content } = matter(fileContent)

  return {
    frontmatter,
    content,
  }
}
