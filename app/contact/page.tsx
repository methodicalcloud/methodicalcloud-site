import ContactForm from "@/components/contact-form"

export const metadata = {
  title: "Contact | Methodical Cloud",
  description: "Get in touch with Methodical Cloud for content feedback, podcast suggestions, or collaboration ideas",
}

export default function ContactPage() {
  return (
    <div>
      {/* Contact Header */}
      <section className="py-16 bg-navy-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <span className="text-4xl">🔧</span>
            </div>
            <h1 className="mb-4">Connect With Methodical Cloud</h1>
            <p className="text-xl text-gray-300">
              Have feedback on content, podcast topic suggestions, or just want to say hello? I'd love to hear from you
              about the blog posts, diagrams, or podcast episodes.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Options</h2>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="text-3xl mr-4">📬</div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <p className="text-gray-300 mb-2">Content feedback or podcast suggestions?</p>
                    <a href="mailto:contact@methodicalcloud.com" className="text-blue-400 hover:text-blue-300">
                      contact@methodicalcloud.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-3xl mr-4">🛠️</div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">GitHub</h3>
                    <p className="text-gray-300 mb-2">Check out open-source diagrams and code examples.</p>
                    <a
                      href="https://github.com/mrlesmithjr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300"
                    >
                      github.com/mrlesmithjr
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-3xl mr-4">🧠</div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Twitter / X</h3>
                    <p className="text-gray-300 mb-2">
                      Follow our official account for content updates and diagram drops.
                    </p>
                    <a
                      href="https://x.com/methodicalcloud"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300"
                    >
                      x.com/methodicalcloud
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-3xl mr-4">🧭</div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">LinkedIn</h3>
                    <p className="text-gray-300 mb-2">Connect professionally.</p>
                    <a
                      href="https://linkedin.com/in/mrlesmithjr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300"
                    >
                      linkedin.com/in/mrlesmithjr
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-navy-800 rounded-lg border border-navy-700">
                <h3 className="text-xl font-bold mb-4">When to Reach Out</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>You have feedback on blog posts or diagrams</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>You have a topic suggestion for the podcast</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>You'd like to collaborate on content creation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>You found something interesting in the diagrams or blog posts</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className="bg-navy-800 rounded-lg border border-navy-700 p-8">
                <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                <p className="text-gray-300 mb-6">
                  Have feedback on content or a podcast topic suggestion? Fill out the form below and I'll get back to
                  you as soon as possible.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Let's Make Systems That Don't Suck</h2>
            <p className="text-xl text-gray-300 mb-8">
              Through educational content, diagrams, and podcast episodes, Methodical Cloud aims to share knowledge and
              insights about building better systems. Explore our content to learn more about automation, clarity, and
              systems thinking.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/blog" className="btn-secondary">
                Read the Blog
              </a>
              <a href="/podcast" className="btn-secondary">
                Listen to the Podcast
              </a>
              <a href="/diagrams" className="btn-secondary">
                Explore Diagrams
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
