import Link from "next/link"
import { ArrowRight, ArrowLeft, Calendar } from "lucide-react"
import { getPostsByTag } from "@/lib/blog"
import type { Metadata } from "next"

export async function generateMetadata({ params }: { params: { tag: string } }): Promise<Metadata> {
  return {
    title: `${params.tag.charAt(0).toUpperCase() + params.tag.slice(1)} | Methodical Cloud Topics`,
    description: `Articles about ${params.tag} on Methodical Cloud`,
  }
}

export default function TopicPage({ params }: { params: { tag: string } }) {
  const tag = params.tag
  const posts = getPostsByTag(tag)
  const formattedTag = tag.charAt(0).toUpperCase() + tag.slice(1).replace(/-/g, " ")

  return (
    <div>
      {/* Topic Header */}
      <section className="py-16 bg-navy-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-gray-300 hover:text-blue-400 mb-6 transition-colors"
            >
              <ArrowLeft className="mr-2 w-4 h-4" /> Back to all posts
            </Link>
            <h1 className="mb-6">Topic: {formattedTag}</h1>
            <p className="text-xl text-gray-300">Articles and insights related to {formattedTag.toLowerCase()}</p>
          </div>
        </div>
      </section>

      {/* Topic Posts */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-8">
            {posts.length > 0 ? (
              posts.map((post) => (
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
                      {post.tags.map((postTag) => (
                        <Link
                          key={postTag}
                          href={`/topics/${postTag}`}
                          className={`text-xs ${
                            postTag === tag ? "bg-blue-700/50 text-blue-300" : "bg-blue-900/30 text-blue-400"
                          } px-2 py-1 rounded-md hover:bg-blue-800/30 transition-colors`}
                        >
                          {postTag}
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
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-300 text-lg">No posts found for this topic.</p>
                <Link href="/blog" className="text-blue-400 hover:text-blue-300 mt-4 inline-block">
                  View all blog posts
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
