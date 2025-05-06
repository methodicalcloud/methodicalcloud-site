import Link from "next/link"

export default function NotFound() {
  return (
    <div className="container mx-auto py-12 px-4 text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-8">The blog post you're looking for doesn't exist.</p>
      <Link href="/blog" className="text-primary hover:underline">
        Back to Blog
      </Link>
    </div>
  )
}
