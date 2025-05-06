import Image from "next/image"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

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
              <Image
                src="/images/methodical-cloud-logo.png"
                alt="Methodical Cloud Logo"
                width={400}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About the Founder */}
      <section className="py-16 bg-navy-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 flex justify-center">
              <Image
                src="/images/larry-smith-headshot.jpeg"
                alt="Larry Smith Jr."
                width={300}
                height={300}
                className="rounded-lg"
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
              <div className="flex space-x-4">
                <a
                  href="https://github.com/mrlesmithjr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <Github className="h-6 w-6" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a
                  href="https://twitter.com/mrlesmithjr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <Twitter className="h-6 w-6" />
                  <span className="sr-only">Twitter</span>
                </a>
                <a
                  href="https://linkedin.com/in/mrlesmithjr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a
                  href="mailto:info@methodicalcloud.com"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <Mail className="h-6 w-6" />
                  <span className="sr-only">Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
