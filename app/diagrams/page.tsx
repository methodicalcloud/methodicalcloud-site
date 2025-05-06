import DiagramPreview from "@/components/diagram-preview"

export const metadata = {
  title: "Diagrams | Methodical Cloud",
  description: "Visual representations of complex systems and processes to enhance understanding",
}

export default function DiagramsPage() {
  const diagrams = [
    {
      id: 1,
      title: "CI/CD Pipeline Flow",
      description:
        "A comprehensive visualization of a modern CI/CD pipeline with automated testing and deployment stages.",
      imageSrc: "/placeholder.svg?key=a3cyp",
      href: "/blog/hidden-cost-of-poor-automation",
      category: "DevOps",
    },
    {
      id: 2,
      title: "Kubernetes Architecture",
      description: "Breaking down the components of a Kubernetes cluster and how they interact.",
      imageSrc: "/placeholder.svg?key=peqn4",
      href: "/blog/diagram-the-damn-thing",
      category: "Infrastructure",
    },
    {
      id: 3,
      title: "Event-Driven Systems",
      description: "Mapping out event flows in distributed systems and their implications for scalability.",
      imageSrc: "/placeholder.svg?key=pqxay",
      href: "/blog/everything-should-be-virtual",
      category: "Architecture",
    },
    {
      id: 4,
      title: "Automation Value Curve",
      description: "Visualizing the diminishing returns of automation efforts and finding the optimal balance.",
      imageSrc: "/placeholder.svg?height=300&width=500&query=automation%20value%20curve",
      href: "/blog/hidden-cost-of-poor-automation",
      category: "Automation",
    },
  ]

  return (
    <div>
      {/* Diagrams Header */}
      <section className="py-16 bg-navy-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">System Diagrams</h1>
            <p className="text-xl text-gray-300">
              Visual representations of complex systems and processes to enhance understanding
            </p>
          </div>
        </div>
      </section>

      {/* Diagrams Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="diagram-grid">
            {diagrams.map((diagram) => (
              <DiagramPreview
                key={diagram.id}
                title={diagram.title}
                description={diagram.description}
                imageSrc={diagram.imageSrc}
                href={diagram.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Diagrams */}
      <section className="py-16 bg-navy-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Why Diagrams Matter</h2>
            <p className="text-xl text-gray-300 mb-8">
              At Methodical Cloud, we believe that visual thinking is essential for understanding complex systems.
              Diagrams help clarify concepts, identify patterns, and communicate ideas more effectively than text alone.
            </p>
            <p className="text-xl text-gray-300">
              Each diagram is carefully crafted to provide clarity and insight, serving as both a learning tool and a
              reference for implementation.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
