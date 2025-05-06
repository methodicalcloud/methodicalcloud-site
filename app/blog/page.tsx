import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"
import { getSortedPostsData } from "@/lib/blog"

export const metadata = {
  title: "Blog | Methodical Cloud",
  description: "Insights on automation, system design, infrastructure, and DevOps practices",
}

export default function BlogPage() {
  const blogPosts = getSortedPostsData()

  return (
    <div>
      {/* Blog Header */}
      <section className="py-16 bg-navy-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">The Methodical Blog</h1>
            <p className="text-xl text-gray-300">
              Insights on automation, system design, infrastructure, and DevOps practices
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="card overflow-hidden">
                <div className="p-8">
                  <div className="text-sm text-blue-400 mb-2">{post.date}</div>
                  <h2 className="text-2xl font-bold mb-3">
                    <Link href={`/blog/${post.slug}`} className="text-white hover:text-blue-400 transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-300 mb-4">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Link
                        key={tag}
                        href={`/topics/${tag}`}
                        className="text-xs bg-blue-900/30 text-blue-400 px-2 py-1 rounded-md hover:bg-blue-800/30 transition-colors"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                  <div className="flex items-center text-sm text-gray-400 mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>
                      By {post.author}, {post.authorRole}
                    </span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center"
                  >
                    Read more <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
