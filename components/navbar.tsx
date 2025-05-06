"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="w-full bg-[#1a1f25] text-white py-4 px-6 fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Methodical Cloud Logo"
            width={120}
            height={40}
            priority
            className="h-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="hover:text-gray-300 transition-colors">
            HOME
          </Link>
          <Link href="/about" className="hover:text-gray-300 transition-colors">
            ABOUT
          </Link>
          <div className="relative group">
            <button className="hover:text-gray-300 transition-colors">MORE</button>
            <div className="absolute left-0 mt-2 w-48 bg-[#232830] rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link href="/diagrams" className="block px-4 py-2 hover:bg-[#1a1f25]">
                DIAGRAMS
              </Link>
              <Link href="/blog" className="block px-4 py-2 hover:bg-[#1a1f25]">
                BLOG
              </Link>
              <Link href="/contact" className="block px-4 py-2 hover:bg-[#1a1f25]">
                CONTACT
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Toggle */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-[#1a1f25] p-4 flex flex-col space-y-4 border-t border-gray-800">
          <Link href="/" className="hover:text-gray-300 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
            HOME
          </Link>
          <Link
            href="/about"
            className="hover:text-gray-300 transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            ABOUT
          </Link>
          <Link
            href="/diagrams"
            className="hover:text-gray-300 transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            DIAGRAMS
          </Link>
          <Link
            href="/blog"
            className="hover:text-gray-300 transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            BLOG
          </Link>
          <Link
            href="/contact"
            className="hover:text-gray-300 transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            CONTACT
          </Link>
        </div>
      )}
    </nav>
  )
}
