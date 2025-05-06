import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Diagrams() {
  // Sample diagram data - you would replace this with your actual diagrams
  const diagrams = [
    {
      id: 1,
      title: "Cloud Architecture Overview",
      description: "A comprehensive view of a scalable cloud architecture with multiple services.",
      image: "/placeholder.svg?key=0m6tr",
      slug: "cloud-architecture-overview",
    },
    {
      id: 2,
      title: "CI/CD Pipeline Flow",
      description: "Visualization of a modern CI/CD pipeline with automated testing and deployment.",
      image: "/ci-cd-pipeline-diagram.png",
      slug: "cicd-pipeline-flow",
    },
    {
      id: 3,
      title: "Microservices Communication",
      description: "How microservices communicate and share data in a distributed system.",
      image: "/microservices-architecture.png",
      slug: "microservices-communication",
    },
    {
      id: 4,
      title: "Data Flow Architecture",
      description: "End-to-end data flow from collection to processing and storage.",
      image: "/placeholder.svg?key=obtsh",
      slug: "data-flow-architecture",
    },
  ]

  return (
    <main className="min-h-screen bg-[#1a1f25] text-white pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">DIAGRAMS</h1>
        <p className="text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto">
          Visual representations of complex systems, architectures, and processes to help you understand and implement
          technical solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {diagrams.map((diagram) => (
            <div key={diagram.id} className="bg-[#232830] rounded-lg overflow-hidden">
              <div className="relative h-64">
                <Image src={diagram.image || "/placeholder.svg"} alt={diagram.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{diagram.title}</h2>
                <p className="text-gray-300 mb-4">{diagram.description}</p>
                <Button asChild>
                  <Link href={`/diagrams/${diagram.slug}`}>View Diagram</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
