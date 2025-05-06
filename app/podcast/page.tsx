import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock, MapIcon as Diagram, Play } from "lucide-react"

export const metadata = {
  title: "Diagram the Damn Thing | Methodical Cloud Podcast",
  description:
    "Automation, clarity, and systems that don't suck. A short-format, insight-packed podcast focused on breaking down complex automation concepts.",
}

export default function PodcastPage() {
  // Example initial topics from the podcast details
  const initialTopics = [
    {
      title: "Why Your Automation Diagrams Suck (And How to Fix Them)",
      description: "Breaking down common mistakes in automation diagrams and providing practical solutions.",
      duration: "12 min",
      status: "coming soon",
    },
    {
      title: "The Cost of Skipping Design in Automation",
      description: "Exploring the hidden costs and technical debt that accumulate when design is overlooked.",
      duration: "15 min",
      status: "coming soon",
    },
    {
      title: "Context Switching: The Silent Killer of Dev Teams",
      description: "How context switching impacts productivity and what you can do about it.",
      duration: "10 min",
      status: "coming soon",
    },
    {
      title: "Airlock Everything: Lessons from Vaulted Systems",
      description: "Security principles from high-security systems applied to everyday automation.",
      duration: "13 min",
      status: "coming soon",
    },
    {
      title: "What If Diagrams Were the Meeting?",
      description: "Reimagining technical meetings with diagrams at the center of communication.",
      duration: "11 min",
      status: "coming soon",
    },
  ]

  return (
    <div>
      {/* Podcast Header */}
      <section className="py-16 bg-navy-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Diagram the Damn Thing</h1>
            <p className="text-xl text-gray-300">Automation, clarity, and systems that don't suck.</p>
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

      {/* About the Podcast */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About the Podcast</h2>
              <p className="text-gray-300 mb-4">
                <em>Diagram the Damn Thing</em> is a short-format, insight-packed podcast from Methodical Cloud. Each
                episode focuses on breaking down complex automation concepts, systems thinking, or technical leadership
                challenges—with visuals in mind.
              </p>
              <p className="text-gray-300 mb-4">
                This podcast is rooted in the belief that great automation starts with clarity, and that clarity often
                begins with a diagram.
              </p>
              <p className="text-gray-300 mb-4">
                Hosted by Larry Smith Jr., each episode is 10–15 minutes long, making it perfect for your commute or
                coffee break.
              </p>
              <div className="flex items-center mt-6">
                <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center mr-4">
                  <Diagram className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-bold">Visual Anchor</h3>
                  <p className="text-gray-300">Every episode is driven by a diagram</p>
                </div>
              </div>
              <div className="flex items-center mt-4">
                <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center mr-4">
                  <Clock className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-bold">Short Format</h3>
                  <p className="text-gray-300">10–15 minutes per episode</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/methodical-cloud-logo.png"
                alt="Diagram the Damn Thing Podcast"
                width={400}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Episode Structure */}
      <section className="py-16 bg-navy-900">
        <div className="container-custom">
          <h2 className="section-title text-center">Episode Structure</h2>
          <p className="section-subtitle text-center">
            Each episode follows a consistent format designed to maximize clarity and insight
          </p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-12">
            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-blue-400">1</span>
              </div>
              <h3 className="font-bold mb-2">Intro</h3>
              <p className="text-gray-300 text-sm">Name, tagline, quick theme setup</p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-blue-400">2</span>
              </div>
              <h3 className="font-bold mb-2">Core Concept</h3>
              <p className="text-gray-300 text-sm">Diagram explained, use case broken down</p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-blue-400">3</span>
              </div>
              <h3 className="font-bold mb-2">Clarity Section</h3>
              <p className="text-gray-300 text-sm">What matters, what to watch out for</p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-blue-400">4</span>
              </div>
              <h3 className="font-bold mb-2">Closing Thought</h3>
              <p className="text-gray-300 text-sm">Takeaway or principle of the day</p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-blue-400">5</span>
              </div>
              <h3 className="font-bold mb-2">Optional CTA</h3>
              <p className="text-gray-300 text-sm">View diagram, submit questions, explore blog</p>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="section-title text-center">Upcoming Episodes</h2>
          <p className="section-subtitle text-center">
            The first episodes of Diagram the Damn Thing are currently in production
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {initialTopics.map((topic, index) => (
              <div key={index} className="card p-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <Play className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">{topic.title}</h3>
                    <p className="text-gray-300 mb-3">{topic.description}</p>
                    <div className="flex items-center text-sm">
                      <span className="text-blue-400 mr-4">{topic.duration}</span>
                      <span className="bg-blue-900/30 text-blue-300 px-2 py-1 rounded text-xs uppercase">
                        {topic.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flow Crimes */}
      <section className="py-16 bg-navy-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 flex justify-center">
              <Image
                src="/placeholder.svg?key=n4xul"
                alt="Flow Crimes Diagram Archive"
                width={400}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6">Flow Crimes Visual Archive</h2>
              <p className="text-gray-300 mb-4">
                Every episode of Diagram the Damn Thing is accompanied by a visual diagram that will be stored in our
                "Flow Crimes" visual archive.
              </p>
              <p className="text-gray-300 mb-4">
                These diagrams serve as both learning tools and reference materials, helping you understand complex
                concepts at a glance.
              </p>
              <p className="text-gray-300 mb-6">
                The archive will grow with each episode, creating a valuable resource for automation enthusiasts, system
                designers, and technical leaders.
              </p>
              <Link href="/diagrams" className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center">
                Explore available diagrams <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="py-16">
        <div className="container-custom">
          <div className="bg-navy-800 rounded-xl border border-navy-700 p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Subscribe to be notified when the first episodes of Diagram the Damn Thing are released.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#" className="btn-primary">
                Subscribe via Email
              </a>
              <a href="/rss.xml" className="btn-secondary">
                Subscribe via RSS
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
