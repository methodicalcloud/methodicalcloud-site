import Link from 'next/link'
import { ArrowLeft, Calendar, Tag } from 'lucide-react'
import { getAllPostSlugs, getPostData } from '@/lib/blog'
import type { Metadata } from 'next'
import SocialShare from '@/components/social-share'

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const slug = (await params).slug
  const post = await getPostData(slug)
  return {
    title: `${post.title} | Methodical Cloud Blog`,
    description: post.excerpt,
  }
}

export async function generateStaticParams() {
  const paths = getAllPostSlugs()
  return paths
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string }
}) {
  const slug = (await params).slug
  const post = await getPostData(slug)

  return (
    <div>
      {/* Blog Post Header */}
      <section className="py-16 bg-navy-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-gray-300 hover:text-blue-400 mb-6 transition-colors"
            >
              <ArrowLeft className="mr-2 w-4 h-4" /> Back to all posts
            </Link>
            <h1 className="mb-6">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-gray-300">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <span>
                  By {post.author}, {post.authorRole}
                </span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/topics/${tag}`}
                  className="text-sm bg-blue-900/30 text-blue-400 px-2 py-1 rounded-md hover:bg-blue-800/30 transition-colors inline-flex items-center"
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Post Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div
              className="prose-custom"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="mt-12 pt-8 border-t border-navy-700">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <Link
                  href="/blog"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
                >
                  <ArrowLeft className="mr-2 w-4 h-4" /> Back to all posts
                </Link>

                <SocialShare title={post.title} url={`/blog/${post.slug}`} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
