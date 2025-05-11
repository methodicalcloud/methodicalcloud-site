import Link from "next/link"
import Image from "next/image"
import SocialIcons from "./social-icons"

export default function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-navy-700">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Image
                src="/images/methodicalcloud_default_logo.png"
                alt="Methodical Cloud Logo"
                width={40}
                height={40}
                priority
              />
              <h3 className="text-xl font-bold ml-3">Methodical Cloud</h3>
            </div>
            <p className="mb-4 text-gray-300">
              Automation, clarity, and systems that don't suck. A platform for demystifying automation and promoting
              clarity in systems thinking.
            </p>
            <SocialIcons size="sm" />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Content</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/podcast" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Podcast
                </Link>
              </li>
              <li>
                <Link href="/diagrams" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Diagrams
                </Link>
              </li>
              <li>
                <Link href="/merch" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Merch
                </Link>
              </li>
              <li>
                <Link href="/archives" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Archives
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Topics</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/topics/automation" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Automation
                </Link>
              </li>
              <li>
                <Link href="/topics/devops" className="text-gray-300 hover:text-blue-400 transition-colors">
                  DevOps
                </Link>
              </li>
              <li>
                <Link href="/topics/infrastructure" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Infrastructure
                </Link>
              </li>
              <li>
                <Link href="/topics/system-design" className="text-gray-300 hover:text-blue-400 transition-colors">
                  System Design
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Site</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear().toString()} Methodical Cloud. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-gray-400 text-sm">
              Created by{" "}
              <a href="https://github.com/mrlesmithjr" className="text-blue-400 hover:text-blue-300">
                Larry Smith Jr.
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
