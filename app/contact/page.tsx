import ContactForm from "@/components/contact-form"

export const metadata = {
  title: "Contact | Methodical Cloud",
  description: "Get in touch with Methodical Cloud for questions, collaborations, or consulting inquiries",
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
            <h1 className="mb-4">Let's Build Clarity Together</h1>
            <p className="text-xl text-gray-300">
              Let's talk diagrams, automation that doesn't suck, or anything that helps make systems clearer. Whether
              you're here to explore ideas, contribute, or collaborate—we're all about making tech feel methodical.
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
                    <p className="text-gray-300 mb-2">Questions, ideas, or want to connect?</p>
                    <a href="mailto:contact@methodicalcloud.com" className="text-blue-400 hover:text-blue-300">
                      contact@methodicalcloud.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-3xl mr-4">🛠️</div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">GitHub</h3>
                    <p className="text-gray-300 mb-2">Browse open-source diagrams and automation experiments.</p>
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
                      Follow our official account for diagram drops, podcast releases, and clarity rants.
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
                    <p className="text-gray-300 mb-2">Professional signal. No noise.</p>
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
                    <span>You want to discuss automation strategies or system design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>You have a topic suggestion for the podcast</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>You'd like to collaborate on content or projects</span>
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
                  Have a specific question or idea? Fill out the form below and I'll get back to you as soon as
                  possible.
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
              Whether you're looking to improve your automation, clarify your systems, or just chat about tech—I'm here
              to help make things methodical.
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
