import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1a1f25] text-white flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center min-h-screen text-center px-4 py-20">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <Image
            src="/images/logo.png"
            alt="Methodical Cloud Logo"
            width={300}
            height={200}
            className="mb-16 h-auto"
            priority
          />

          <h1 className="text-4xl md:text-6xl font-bold tracking-wider mb-8">WELCOME TO METHODICAL CLOUD</h1>

          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl">
            Clarity in automation, systems that scale, and technical storytelling that doesn't suck.
          </p>

          <Button variant="outline" className="text-white border-white hover:bg-white/10 px-8 py-6 text-lg" asChild>
            <Link href="/diagrams">BROWSE DIAGRAMS</Link>
          </Button>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="w-full py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">WHAT'S INSIDE</h2>

          {/* Content for What's Inside section would go here */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* This is a placeholder for your content */}
            <div className="bg-[#232830] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Technical Diagrams</h3>
              <p className="text-gray-300">Clear, concise visualizations of complex systems and architectures.</p>
            </div>

            <div className="bg-[#232830] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Automation Guides</h3>
              <p className="text-gray-300">
                Step-by-step instructions for implementing efficient automation solutions.
              </p>
            </div>

            <div className="bg-[#232830] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">System Design</h3>
              <p className="text-gray-300">
                Approaches to building scalable, resilient systems for modern applications.
              </p>
            </div>

            <div className="bg-[#232830] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Technical Writing</h3>
              <p className="text-gray-300">Examples of clear, engaging technical documentation and storytelling.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
