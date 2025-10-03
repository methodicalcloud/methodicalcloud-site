import Link from 'next/link'
import SocialIcons from '@/components/social-icons'
import ProfileImage from '@/components/profile-image'
import ImageWithFallback from '@/components/image-with-fallback'

export const metadata = {
  title: 'About | Methodical Cloud',
  description: 'Learn about Methodical Cloud and its founder, Larry Smith Jr.',
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
              A content-first initiative focused on automation, clarity, and
              systems that don't suck
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
                Methodical Cloud builds intelligent software products that
                empower individuals and businesses to make better data-driven
                decisions in personal finance, productivity, and security.
              </p>
              <p className="text-gray-300 mb-4">
                We combine deep technical expertise in automation,
                infrastructure, and systems design with a pragmatic, no-nonsense
                approach to solving real problems. Our products are built on 20+
                years of engineering experience—where clarity beats buzzwords
                and useful beats perfect.
              </p>
              <p className="text-gray-300">
                Our approach is technical yet personable, eccentric yet
                grounded—where pragmatic engineering meets thoughtful design.
              </p>
              <p className="text-gray-300 mt-4 italic">
                We translate complex data into clarity—and we do it without
                boring anyone to death.
              </p>
            </div>
            <div className="flex justify-center">
              <ImageWithFallback
                src="/images/logos/methodical-cloud-logo.png"
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
          <p className="text-center text-gray-400 mb-8">
            A visual journey through our evolution
          </p>
          <div className="max-w-3xl mx-auto">
            <div className="relative pl-8 pb-8 border-l border-blue-500">
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 top-0"></div>
              <h3 className="text-xl font-bold mb-2">
                Everything Should Be Virtual
              </h3>
              <p className="text-gray-300 mb-4">
                Methodical Cloud's journey began with{' '}
                <a
                  href="https://everythingshouldbevirtual.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300"
                >
                  Everything Should Be Virtual
                </a>
                , a technical blog focused on infrastructure, virtualization,
                and the emerging cloud landscape. This was where the foundation
                for clear technical content and automation insights was
                established.
              </p>
            </div>

            <div className="relative pl-8">
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 top-0"></div>
              <h3 className="text-xl font-bold mb-2">Methodical Cloud</h3>
              <p className="text-gray-300 mb-4">
                Today, that journey continues with Methodical Cloud—building
                intelligent software products alongside sharing technical
                knowledge. We've evolved from content-first to product-first,
                focusing on AI-powered solutions like FinInsights while sharing
                insights through our blog. The core mission remains: bringing
                clarity to complex systems through thoughtful, intentional
                design.
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
                src="/images/headshots/larry-smith-headshot.jpeg"
                fallbackSrc="/images/placeholders/placeholder-profile.png"
                alt="Larry Smith Jr."
                width={300}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6">About the Founder</h2>
              <p className="text-gray-300 mb-4">
                Larry Smith Jr. is a seasoned infrastructure engineer,
                automation enthusiast, and systems thinker with over 20 years of
                experience in the technology industry.
              </p>
              <p className="text-gray-300 mb-4">
                Throughout his career, Larry has focused on building scalable,
                maintainable systems and sharing his knowledge through
                open-source contributions, technical writing, and community
                engagement.
              </p>
              <p className="text-gray-300 mb-4">
                Larry's work has been featured in open-source communities and
                engineering teams across industries. His down-to-earth,
                opinionated style resonates with those who appreciate honest
                takes and real-world guidance over buzzwords and fluff.
              </p>
              <p className="text-gray-300 mb-6">
                Methodical Cloud represents Larry's vision for technical content
                that combines depth with clarity, helping others navigate the
                complex world of modern infrastructure and automation.
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
              We're building intelligent software products that empower
              data-driven decision making. Along the way, we share what we learn
              through blog posts that break down complex automation,
              infrastructure, and systems design topics—because building in
              public builds better products.
            </p>
            <div className="mb-8 p-6 bg-navy-800 rounded-lg border border-navy-700 text-left">
              <h3 className="text-xl font-bold mb-3">Product Portfolio</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-blue-400 mb-2">
                    FinInsights
                  </h4>
                  <p className="text-gray-300 mb-2">
                    Our flagship product - an AI-powered personal finance
                    intelligence platform that transforms YNAB data into
                    actionable insights with smart budget optimization and
                    predictive analytics.
                  </p>
                  <a
                    href="https://fininsights.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 text-sm"
                  >
                    Learn more at fininsights.io →
                  </a>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-3">Product Development</h3>
                <p className="text-gray-300">
                  Building AI-powered software products that solve real problems
                  in personal finance, productivity, and security—starting with
                  FinInsights, our flagship personal finance intelligence
                  platform.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-3">Technical Content</h3>
                <p className="text-gray-300">
                  Sharing insights on automation, infrastructure, and systems
                  design through blog posts that provide clarity without the
                  buzzwords—practical lessons from building real products.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-3">Community Engagement</h3>
                <p className="text-gray-300">
                  Fostering a community of engineers and builders who value
                  pragmatic solutions over hype, and clarity over complexity—one
                  honest conversation at a time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
