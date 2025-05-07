"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "Podcast", href: "/podcast" },
  { name: "Diagrams", href: "/diagrams" },
  { name: "Merch", href: "/merch" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-navy-900 border-b border-navy-700">
      <nav className="container-custom mx-auto flex items-center justify-between py-4" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Methodical Cloud</span>
            <div className="flex items-center">
              <Image
                src="/images/methodical-cloud-logo.png"
                alt="Methodical Cloud Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
                priority
              />
              <span className="ml-3 text-xl font-bold text-white">Methodical Cloud</span>
            </div>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-300 hover:text-blue-400 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <ThemeToggle />
          <Link href="/contact" className="btn-primary ml-4">
            Content Feedback
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" aria-hidden="true" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-navy-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-navy-700">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Methodical Cloud</span>
                <div className="flex items-center">
                  <Image
                    src="/images/methodical-cloud-logo.png"
                    alt="Methodical Cloud Logo"
                    width={40}
                    height={40}
                    className="h-8 w-auto"
                    priority
                  />
                  <span className="ml-3 text-lg font-bold text-white">Methodical Cloud</span>
                </div>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
              <div className="ml-auto">
                <ThemeToggle />
              </div>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-navy-700">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-300 hover:bg-navy-800"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    href="/contact"
                    className="btn-primary w-full text-center block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Content Feedback
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
