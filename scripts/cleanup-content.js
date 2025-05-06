const fs = require("fs")
const path = require("path")

// Define paths
const contentDir = path.join(process.cwd(), "content")
const postsDir = path.join(contentDir, "posts")
const blogDir = path.join(contentDir, "blog")

// Ensure blog directory exists
if (!fs.existsSync(blogDir)) {
  fs.mkdirSync(blogDir, { recursive: true })
  console.log("Created blog directory")
}

// Check if posts directory exists
if (fs.existsSync(postsDir)) {
  // Move any files from posts to blog if they don't already exist in blog
  const postFiles = fs.readdirSync(postsDir)

  postFiles.forEach((file) => {
    if (!file.endsWith(".md")) return

    const sourcePath = path.join(postsDir, file)
    const destPath = path.join(blogDir, file)

    // Check if file already exists in blog directory
    if (!fs.existsSync(destPath)) {
      // Copy file to blog directory
      fs.copyFileSync(sourcePath, destPath)
      console.log(`Copied ${file} from posts to blog directory`)
    } else {
      console.log(`File ${file} already exists in blog directory, skipping`)
    }
  })

  console.log("All files processed")
} else {
  console.log("Posts directory does not exist, nothing to move")
}

console.log("Content cleanup complete")
