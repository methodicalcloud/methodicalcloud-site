import Link from "next/link"
import { Mail, FileText } from "lucide-react"

export const metadata = {
  title: "Terms of Use | Methodical Cloud",
  description: "Terms and conditions for using the Methodical Cloud website and services.",
}

export default function TermsPage() {
  return (
    <div>
      {/* Terms Header */}
      <section className="py-16 bg-navy-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <FileText className="h-16 w-16 text-blue-400" />
            </div>
            <h1 className="mb-4">Terms of Use</h1>
            <p className="text-xl text-gray-300">
              The terms and conditions for using the Methodical Cloud website and services
            </p>
            <p className="text-gray-400 mt-4">Last updated: May 06, 2025</p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto prose-custom">
            <p>
              Welcome to Methodical Cloud. These Terms of Use ("Terms") govern your access to and use of our website,
              content, and services ("Services"). By using the Services, you agree to be bound by these Terms.
            </p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Services, you confirm that you have read, understood, and agree to be bound by
              these Terms and our <Link href="/privacy">Privacy Policy</Link>. If you do not agree, do not use our
              Services.
            </p>

            <h2>2. Use of Services</h2>
            <p>
              You may use our Services only for lawful purposes and in accordance with these Terms. You agree not to:
            </p>
            <ul>
              <li>Violate any applicable laws or regulations;</li>
              <li>Infringe on the intellectual property or other rights of Methodical Cloud or others;</li>
              <li>Interfere with or disrupt the integrity or performance of the Services.</li>
            </ul>

            <h2>3. Intellectual Property</h2>
            <p>
              All content provided on Methodical Cloud, including but not limited to text, graphics, logos, and
              software, is the property of Methodical Cloud or its content creators and is protected by intellectual
              property laws.
            </p>

            <h2>4. User Contributions</h2>
            <p>
              If you submit or share content through our Services (e.g., feedback, blog comments), you grant Methodical
              Cloud a non-exclusive, royalty-free, perpetual, and irrevocable right to use, reproduce, and display such
              content.
            </p>

            <h2>5. Third-Party Links</h2>
            <p>
              Our Services may contain links to third-party websites. We are not responsible for the content or
              practices of any linked websites.
            </p>

            <h2>6. Disclaimer</h2>
            <p>
              The Services are provided "as is" and "as available" without warranties of any kind, either express or
              implied.
            </p>

            <h2>7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Methodical Cloud shall not be liable for any indirect, incidental,
              or consequential damages arising out of or related to your use of the Services.
            </p>

            <h2>8. Changes to Terms</h2>
            <p>
              We may revise these Terms from time to time. If we make changes, we will post the updated Terms on our
              website and update the "Last Updated" date.
            </p>

            <h2>9. Contact</h2>
            <p>For questions about these Terms, please contact us at:</p>
            <p>
              <a href="mailto:info@methodicalcloud.com">info@methodicalcloud.com</a>
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-navy-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">Questions About Our Terms?</h2>
            <p className="text-gray-300 mb-8">
              If you have any questions or concerns about our terms of use, please don't hesitate to reach out to us.
            </p>
            <Link href="/contact" className="inline-flex items-center btn-primary">
              <Mail className="mr-2 h-5 w-5" /> Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
