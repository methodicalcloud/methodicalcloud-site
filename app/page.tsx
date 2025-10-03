import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Cpu, Lightbulb, BarChart3, FileText } from 'lucide-react'
import { getSortedPostsData } from '@/lib/blog'

export default function Home() {
  const latestPosts = getSortedPostsData().slice(0, 3)

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-navy-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="mb-6">
                <span className="text-gradient">
                  Intelligent software solutions
                </span>{' '}
                for data-driven decision making.
              </h1>
              <p className="text-xl mb-8 text-gray-300">
                We build AI-powered products that transform complex data into
                actionable insights—from personal finance to productivity and
                security. Backed by real-world expertise in automation, systems
                thinking, and pragmatic engineering.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="#products" className="btn-primary">
                  Explore Our Products
                </Link>
                <Link href="/blog" className="btn-secondary">
                  Read Our Blog
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/logos/methodical-cloud-logo.png"
                alt="Methodical Cloud Logo"
                width={400}
                height={400}
                className="rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20">
        <div className="container-custom">
          <h2 className="section-title text-center">Our Products</h2>
          <p className="section-subtitle text-center">
            Intelligent software solutions that empower data-driven decision
            making
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="card p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-block px-3 py-1 bg-blue-900/30 rounded-full text-sm font-semibold text-blue-400 mb-4">
                    Flagship Product
                  </div>
                  <h3 className="text-3xl font-bold mb-4">FinInsights</h3>
                  <p className="text-gray-300 mb-6">
                    AI-powered personal finance intelligence platform that
                    transforms your YNAB data into actionable insights. Get
                    smart budget optimization, anomaly detection, and predictive
                    analytics to make better financial decisions.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://fininsights.io"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      Learn More <ArrowRight className="ml-2 w-4 h-4 inline" />
                    </a>
                    <a
                      href="https://fininsights.io/register"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                    >
                      Get Started Free
                    </a>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-navy-800 p-4 rounded-lg">
                      <div className="text-3xl mb-2">🤖</div>
                      <div className="text-sm text-gray-300">
                        AI-Powered Insights
                      </div>
                    </div>
                    <div className="bg-navy-800 p-4 rounded-lg">
                      <div className="text-3xl mb-2">📊</div>
                      <div className="text-sm text-gray-300">
                        Budget Optimization
                      </div>
                    </div>
                    <div className="bg-navy-800 p-4 rounded-lg">
                      <div className="text-3xl mb-2">⚠️</div>
                      <div className="text-sm text-gray-300">
                        Anomaly Detection
                      </div>
                    </div>
                    <div className="bg-navy-800 p-4 rounded-lg">
                      <div className="text-3xl mb-2">📈</div>
                      <div className="text-sm text-gray-300">
                        Predictive Analytics
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Themes Section */}
      <section className="py-20 bg-navy-900">
        <div className="container-custom">
          <h2 className="section-title text-center">Core Themes</h2>
          <p className="section-subtitle text-center">
            Principles that guide our approach to automation, systems thinking,
            and technical content
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8">
              <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center mb-6">
                <Lightbulb className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Clarity</h3>
              <p className="text-gray-300">
                No buzzwords or fluff—our content simplifies the complex. We
                believe in clear communication and straightforward explanations.
              </p>
            </div>

            <div className="card p-8">
              <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center mb-6">
                <Cpu className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Pragmatism</h3>
              <p className="text-gray-300">
                Real-world practices over theory. It's not about perfection;
                it's about making things better and delivering practical
                solutions.
              </p>
            </div>

            <div className="card p-8">
              <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Data-Driven</h3>
              <p className="text-gray-300">
                Build with insights, not guesses. Our products and content focus
                on turning complex data into clear, actionable intelligence that
                drives better decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="section-title text-center">Our Content</h2>
          <p className="section-subtitle text-center">
            Technical insights on automation, system design, and building better
            products
          </p>

          <div className="max-w-2xl mx-auto">
            <div className="card p-8">
              <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center mb-6">
                <FileText className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Blog Posts</h3>
              <p className="text-gray-300 mb-4">
                In-depth articles on automation, system design, infrastructure,
                and DevOps. Clear, practical insights from 20+ years of
                engineering experience—no buzzwords, just what actually works.
              </p>
              <Link
                href="/blog"
                className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center"
              >
                Read the Blog <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-20 bg-navy-900">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Latest Blog Posts</h2>
            <Link
              href="/blog"
              className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center"
            >
              View all posts <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <div key={post.slug} className="card">
                <div className="p-6">
                  <div className="text-sm text-blue-400 mb-2">{post.date}</div>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-300 mb-4">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center"
                  >
                    Read more <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="bg-navy-800 rounded-xl border border-navy-700 p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="mb-4">Interested in Our Content?</h2>
                <p className="text-lg mb-6 text-gray-300">
                  Reach out with feedback on our blog posts or product ideas.
                  We'd love to hear what topics you'd like to see covered next.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center btn-primary"
                >
                  Share Your Feedback <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
              <div className="flex justify-center">
                <div className="overflow-auto">
                  <Image
                    src="/images/illustrations/the-methodical-transformation-loop.png"
                    alt="The Methodical Transformation Loop showing how Methodical Cloud turns confusion into clarity"
                    width={800}
                    height={600}
                    className="rounded-lg"
                  />
                </div>
                <p className="text-sm text-gray-400 mt-2 text-center">
                  The Methodical Transformation Loop: How we go from confusion
                  to clarity through writing, building, and conversation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
