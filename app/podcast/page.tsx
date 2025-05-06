import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Podcast | Methodical Cloud",
  description: "Short-form technical podcast on automation, system design, and infrastructure",
}

export default function PodcastPage() {
  return (
    <div>
      {/* Podcast Header */}
      <section className="py-16 bg-navy-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">The Methodical Podcast</h1>
            <p className="text-xl text-gray-300">
              Short-form technical insights on automation, system design, and infrastructure
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="#" className="btn-secondary">
                Apple Podcasts
              </a>
              <a href="#" className="btn-secondary">
                Spotify
              </a>
              <a href="#" className="btn-secondary">
                Google Podcasts
              </a>
              <a href="/rss.xml" className="btn-secondary">
                RSS Feed
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-16">
        <div className="container-custom">
          <div className="card p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Coming Soon!</h2>
            <p className="text-xl text-gray-300 mb-8">
              The Methodical Podcast is currently in production. Check back soon for our first episodes!
            </p>
            <p className="text-gray-300 mb-8">
              Each episode will be 15 minutes or less, focused on a specific technical concept, often accompanied by a
              diagram to enhance understanding.
            </p>
            <Link href="/blog/diagram-the-damn-thing" className="btn-primary">
              Learn More About Our Podcast
            </Link>
          </div>
        </div>
      </section>

      {/* About the Podcast */}
      <section className="py-16 bg-navy-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About the Podcast</h2>
              <p className="text-gray-300 mb-4">
                The Methodical Podcast delivers concise, insightful episodes on automation, system design, and
                infrastructure. Each episode is 15 minutes or less and focuses on a specific technical concept, often
                accompanied by a diagram to enhance understanding.
              </p>
              <p className="text-gray-300 mb-4">
                Hosted by Larry Smith Jr., the podcast combines technical depth with practical advice, helping listeners
                build better systems and improve their automation practices.
              </p>
              <Link href="/about" className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center">
                Learn more about the host <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=400&width=400&query=podcast%20microphone"
                alt="Podcast Illustration"
                width={400}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
