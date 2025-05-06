import { Mail, Github, Twitter, Linkedin } from "lucide-react"
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
            <h1 className="mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-300">
              Have questions, ideas, or want to discuss a collaboration? Reach out to us.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <p className="text-lg text-gray-300 mb-8">
                Whether you have questions about content, want to discuss a potential collaboration, or are interested
                in consulting services, we'd love to hear from you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-blue-400 mt-1 mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <p className="text-gray-300">
                      <a href="mailto:info@methodicalcloud.com" className="text-blue-400 hover:text-blue-300">
                        info@methodicalcloud.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Github className="w-6 h-6 text-blue-400 mt-1 mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">GitHub</h3>
                    <p className="text-gray-300">
                      <a href="https://github.com/mrlesmithjr" className="text-blue-400 hover:text-blue-300">
                        github.com/mrlesmithjr
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Twitter className="w-6 h-6 text-blue-400 mt-1 mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Twitter</h3>
                    <p className="text-gray-300">
                      <a href="https://twitter.com/mrlesmithjr" className="text-blue-400 hover:text-blue-300">
                        twitter.com/mrlesmithjr
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Linkedin className="w-6 h-6 text-blue-400 mt-1 mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">LinkedIn</h3>
                    <p className="text-gray-300">
                      <a href="https://linkedin.com/in/mrlesmithjr" className="text-blue-400 hover:text-blue-300">
                        linkedin.com/in/mrlesmithjr
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-navy-800 rounded-lg border border-navy-700 p-8">
                <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
