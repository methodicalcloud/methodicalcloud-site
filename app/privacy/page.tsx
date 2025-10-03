import Link from 'next/link'
import { Mail, Shield } from 'lucide-react'

export const metadata = {
  title: 'Privacy Policy | Methodical Cloud',
  description:
    'Learn how Methodical Cloud collects, uses, and protects your information.',
}

export default function PrivacyPolicyPage() {
  return (
    <div>
      {/* Privacy Policy Header */}
      <section className="py-16 bg-navy-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Shield className="h-16 w-16 text-blue-400" />
            </div>
            <h1 className="mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-300">
              How we collect, use, and protect information about visitors to our
              website
            </p>
            <p className="text-gray-400 mt-4">Last updated: May 2025</p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto prose-custom">
            <p>
              Methodical Cloud ("we", "us", or "our") is committed to protecting
              your privacy. This Privacy Policy explains how we collect, use,
              and protect information about visitors to our website:{' '}
              <Link href="https://methodicalcloud.com">
                methodicalcloud.com
              </Link>
              .
            </p>

            <h2>1. What We Collect</h2>
            <p>We may collect the following information:</p>
            <ul>
              <li>
                <strong>Information you provide directly</strong>: When you
                submit a contact form or sign up for a newsletter.
              </li>
              <li>
                <strong>Basic usage data</strong>: Like browser type, time spent
                on pages, and referral source (via tools like Google Analytics
                or Vercel Analytics).
              </li>
              <li>
                <strong>Email addresses</strong>: Only if you contact us
                directly or subscribe to updates.
              </li>
            </ul>

            <h2>2. How We Use It</h2>
            <p>We use your data to:</p>
            <ul>
              <li>Respond to inquiries</li>
              <li>Improve our site experience.</li>
              <li>Understand what content is most helpful.</li>
              <li>Send occasional updates (only if you've opted in)</li>
            </ul>
            <p>
              We <strong>do not sell</strong>, rent, or share your personal
              information with third parties, ever.
            </p>

            <h2>3. Cookies & Analytics</h2>
            <p>We may use cookies or similar technologies to:</p>
            <ul>
              <li>Remember preferences</li>
              <li>
                Track website traffic (via services like Google Analytics or
                Vercel)
              </li>
            </ul>
            <p>You can disable cookies in your browser at any time.</p>

            <h2>4. Third-Party Services</h2>
            <p>
              We may link to or embed third-party services (e.g., GitHub and
              other platforms). Each of these has its own privacy policies.
            </p>

            <h2>5. Data Security</h2>
            <p>
              We take reasonable steps to protect your information, but no
              system is 100% secure. If you suspect misuse of your data, please
              contact us immediately at{' '}
              <a href="mailto:contact@methodicalcloud.com">
                contact@methodicalcloud.com
              </a>
              .
            </p>

            <h2>6. Your Rights</h2>
            <p>You can:</p>
            <ul>
              <li>Request access to or deletion of your data</li>
              <li>Opt out of future communications.</li>
              <li>Ask any privacy-related question by emailing us.</li>
            </ul>

            <h2>7. Contact</h2>
            <p>
              If you have questions about this Privacy Policy or how your data
              is handled, contact us:
            </p>
            <p>
              <a href="mailto:contact@methodicalcloud.com">
                contact@methodicalcloud.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-navy-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">
              Have Questions About Your Privacy?
            </h2>
            <p className="text-gray-300 mb-8">
              If you have any concerns or questions about how we handle your
              data, please don't hesitate to reach out. Your privacy matters to
              us.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center btn-primary"
            >
              <Mail className="mr-2 h-5 w-5" /> Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
