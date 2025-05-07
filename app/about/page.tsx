import Link from "next/link"
import SocialIcons from "@/components/social-icons"
import ProfileImage from "@/components/profile-image"
import ImageWithFallback from "@/components/image-with-fallback"

export const metadata = {
  title: "About | Methodical Cloud",
  description: "Learn about Methodical Cloud and its founder, Larry Smith Jr.",
}

export default function AboutPage() {
  return (
    <div>
      {/* About Header */}
      <section className="py-16 bg-navy-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">About Methodical Cloud</h1>
            <p className="text-xl text-gray-300">
              A content-first initiative focused on automation, clarity, and systems that don't suck
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-300 mb-4">
                Methodical Cloud was created to deliver automation wisdom, deep technical clarity, and architectural
                insight through diagrams, short-form content, and podcast storytelling—building systems and mindsets
                that scale.
              </p>
              <p className="text-gray-300 mb-4">
                We believe in demystifying automation, promoting clarity in systems thinking, and offering thought
                leadership on infrastructure, engineering culture, and DevOps.
              </p>
              <p className="text-gray-300">
                Our approach is technical yet personable, eccentric yet grounded—where pragmatic engineering meets
                creative storytelling.
              </p>
            </div>
            <div className="flex justify-center">
              <ImageWithFallback
                src="/images/methodical-cloud-logo.png"
                alt="Methodical Cloud Logo"
                width={400}
                height={400}
                className="rounded-lg"
                priority
                isLogo={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Evolution Section */}
      <section className="py-16 bg-navy-900">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-6 text-center">The Evolution</h2>
          <div className="max-w-3xl mx-auto">
            <div className="relative pl-8 pb-8 border-l border-blue-500">
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 top-0"></div>
              <h3 className="text-xl font-bold mb-2">Everything Should Be Virtual</h3>
              <p className="text-gray-300 mb-4">
                Methodical Cloud's journey began with{" "}
                <a
                  href="https://everythingshouldbevirtual.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300"
                >
                  Everything Should Be Virtual
                </a>
                , a technical blog focused on infrastructure, virtualization, and the emerging cloud landscape. This was
                where the foundation for clear technical content and automation insights was established.
              </p>
            </div>

            <div className="relative pl-8 pb-8 border-l border-blue-500">
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 top-0"></div>
              <h3 className="text-xl font-bold mb-2">Methodical Cloud</h3>
              <p className="text-gray-300 mb-4">
                Today, that journey continues with Methodical Cloud—a content-driven platform dedicated to automation
                strategies, scalable system design, and visual workflows. While the name has changed, the core mission
                remains: bringing clarity to complex systems through thoughtful, intentional design.
              </p>
            </div>

            <div className="relative pl-8">
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 top-0"></div>
              <h3 className="text-xl font-bold mb-2">Diagram the Damn Thing</h3>
              <p className="text-gray-300 mb-4">
                The newest evolution is our podcast,{" "}
                <Link href="/podcast" className="text-blue-400 hover:text-blue-300">
                  Diagram the Damn Thing
                </Link>
                , which brings our visual-first approach to automation and systems thinking to an audio format. Each
                episode is anchored by a diagram and focuses on breaking down complex concepts into clear, actionable
                insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About the Founder */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 flex justify-center">
              {/* Use direct URL to the image */}
              <ProfileImage
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8E92B092-92BD-4346-882C-5BF5BE60ED78-cYKmIEVNJqCUvSND80iOnQGPz3Iu54.jpeg"
                fallbackSrc="/images/placeholder-profile.png"
                alt="Larry Smith Jr."
                width={300}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6">About the Founder</h2>
              <p className="text-gray-300 mb-4">
                Larry Smith Jr. is a seasoned infrastructure engineer, automation enthusiast, and systems thinker with
                over 20 years of experience in the technology industry.
              </p>
              <p className="text-gray-300 mb-4">
                Throughout his career, Larry has focused on building scalable, maintainable systems and sharing his
                knowledge through open-source contributions, technical writing, and community engagement.
              </p>
              <p className="text-gray-300 mb-6">
                Methodical Cloud represents Larry's vision for technical content that combines depth with clarity,
                helping others navigate the complex world of modern infrastructure and automation.
              </p>
              <div className="flex items-center space-x-4">
                <SocialIcons size="lg" showEmail={true} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Focus */}
      <section className="py-16 bg-navy-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Current Focus</h2>
            <p className="text-xl text-gray-300 mb-8">
              Methodical Cloud is a content-first initiative focused exclusively on building a knowledge hub through our
              blog, podcast, and visual resources. We're taking a methodical approach to content creation, focusing on
              quality educational material and community building.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-3">Content Creation</h3>
                <p className="text-gray-300">
                  Developing high-quality blog posts, podcast episodes, and diagrams that provide clear insights into
                  automation and systems thinking.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-3">Community Building</h3>
                <p className="text-gray-300">
                  Fostering a community of like-minded professionals interested in automation, clarity, and effective
                  system design through educational content.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-3">Knowledge Sharing</h3>
                <p className="text-gray-300">
                  Sharing practical insights and lessons learned through educational content about infrastructure,
                  automation, and DevOps.
                </p>
              </div>
            </div>
            <div className="mt-8 p-6 bg-navy-800 rounded-lg border border-navy-700 text-left">
              <h3 className="text-xl font-bold mb-3">Important Note</h3>
              <p className="text-gray-300">
                Methodical Cloud is strictly a content platform for sharing knowledge and does not offer consulting
                services or compete with any professional services organizations. This is a personal educational
                initiative focused on content creation only.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
