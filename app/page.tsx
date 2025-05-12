import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Cpu,
  Lightbulb,
  BarChart3,
  Workflow,
  Podcast,
  FileText,
} from 'lucide-react'
import DiagramPreview from '@/components/diagram-preview'
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
                <span className="text-gradient">Automation, clarity,</span> and
                systems that don't suck.
              </h1>
              <p className="text-xl mb-8 text-gray-300">
                Delivering automation wisdom, deep technical clarity, and
                architectural insight through diagrams, short-form content, and
                podcast storytelling—building systems and mindsets that scale.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/blog" className="btn-primary">
                  Read the Blog
                </Link>
                <Link href="/podcast" className="btn-secondary">
                  Listen to the Podcast
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

      {/* Core Themes Section */}
      <section className="py-20">
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
              <h3 className="text-xl font-bold mb-3">Visual Thinking</h3>
              <p className="text-gray-300">
                Diagrams are foundational—every system, process, or idea is
                better with a flow. We visualize complexity to make it
                understandable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Diagrams Section */}
      <section className="py-20 bg-navy-900">
        <div className="container-custom">
          <h2 className="section-title text-center">Featured Diagrams</h2>
          <p className="section-subtitle text-center">
            Visual representations of complex systems and processes to enhance
            understanding
          </p>

          <div className="diagram-grid">
            <DiagramPreview
              title="CI/CD Pipeline Flow"
              description="A comprehensive visualization of a modern CI/CD pipeline with automated testing and deployment stages."
              imageSrc="/images/placeholders/placeholder.svg"
              href="/blog/hidden-cost-of-poor-automation"
            />
            <DiagramPreview
              title="Kubernetes Architecture"
              description="Breaking down the components of a Kubernetes cluster and how they interact."
              imageSrc="/images/placeholders/placeholder.svg"
              href="/blog/diagram-the-damn-thing"
            />
            <DiagramPreview
              title="Event-Driven Systems"
              description="Mapping out event flows in distributed systems and their implications for scalability."
              imageSrc="/images/placeholders/placeholder.svg"
              href="/blog/everything-should-be-virtual"
            />
          </div>

          <div className="text-center mt-12">
            <Link href="/diagrams" className="btn-secondary">
              View All Diagrams
            </Link>
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="section-title text-center">Content Types</h2>
          <p className="section-subtitle text-center">
            Multiple formats to explore automation, system design, and technical
            insights
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8">
              <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center mb-6">
                <FileText className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Blog Posts</h3>
              <p className="text-gray-300 mb-4">
                Written in Markdown with a focus on automation, system design,
                infrastructure, and DevOps anti-patterns. Available in
                short-form clarity or long-form deep dives.
              </p>
              <Link
                href="/blog"
                className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center"
              >
                Read the Blog <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="card p-8">
              <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center mb-6">
                <Podcast className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Podcast Episodes</h3>
              <p className="text-gray-300 mb-4">
                15 minutes or less, anchored around a diagram or architectural
                idea. Conversational and insightful, hosted by Larry Smith Jr.
              </p>
              <Link
                href="/podcast"
                className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center"
              >
                Listen to Episodes <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="card p-8">
              <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center mb-6">
                <Workflow className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Diagrams</h3>
              <p className="text-gray-300 mb-4">
                Flowcharts, automation visuals, and layered architecture with
                clear labels, visual hierarchy, and minimalist design to
                illustrate complex concepts.
              </p>
              <Link
                href="/diagrams"
                className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center"
              >
                Explore Diagrams <ArrowRight className="ml-2 w-4 h-4" />
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
                  Reach out with feedback on our blog posts, diagrams, or
                  podcast episodes. We'd love to hear what topics you'd like to
                  see covered next.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center btn-primary"
                >
                  Share Your Feedback <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/images/placeholders/placeholder.svg"
                  alt="Content Illustration"
                  width={400}
                  height={300}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
