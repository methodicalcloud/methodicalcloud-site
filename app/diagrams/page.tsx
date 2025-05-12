import DiagramPreview from '@/components/diagram-preview'
import Link from 'next/link'

export const metadata = {
  title: 'Diagrams | Methodical Cloud',
  description:
    'Visual representations of complex systems and processes to enhance understanding',
}

export default function DiagramsPage() {
  const diagrams = [
    {
      id: 1,
      title: 'CI/CD Pipeline Flow',
      description:
        'A comprehensive visualization of a modern CI/CD pipeline with automated testing and deployment stages.',
      imageSrc: '/images/placeholders/placeholder.svg',
      href: '/blog/hidden-cost-of-poor-automation',
      category: 'DevOps',
    },
    {
      id: 2,
      title: 'Kubernetes Architecture',
      description:
        'Breaking down the components of a Kubernetes cluster and how they interact.',
      imageSrc: '/images/placeholders/placeholder.svg',
      href: '/blog/diagram-the-damn-thing',
      category: 'Infrastructure',
    },
    {
      id: 3,
      title: 'Event-Driven Systems',
      description:
        'Mapping out event flows in distributed systems and their implications for scalability.',
      imageSrc: '/images/placeholders/placeholder.svg',
      href: '/blog/everything-should-be-virtual',
      category: 'Architecture',
    },
    {
      id: 4,
      title: 'Automation Value Curve',
      description:
        'Visualizing the diminishing returns of automation efforts and finding the optimal balance.',
      imageSrc: '/images/placeholders/placeholder.svg',
      href: '/blog/hidden-cost-of-poor-automation',
      category: 'Automation',
    },
  ]

  return (
    <div>
      {/* Diagrams Header */}
      <section className="py-16 bg-navy-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Flow Crimes</h1>
            <p className="text-xl text-gray-300">
              Our visual archive of diagrams that break down complex systems and
              processes
            </p>
          </div>
        </div>
      </section>

      {/* About Flow Crimes */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">What is Flow Crimes?</h2>
            <p className="text-xl text-gray-300 mb-6">
              Flow Crimes is our growing collection of diagrams that visualize
              complex systems, automation workflows, and architectural patterns.
              Each diagram is designed to bring clarity to technical concepts
              and serve as both a learning tool and a reference.
            </p>
            <p className="text-xl text-gray-300 mb-6">
              The name "Flow Crimes" reflects our lighthearted approach to
              identifying and fixing problematic flows and systems—turning
              "crimes" against clarity into opportunities for improvement.
            </p>
            <p className="text-xl text-gray-300 mb-6">
              Many of these diagrams are featured in our{' '}
              <Link
                href="/podcast"
                className="text-blue-400 hover:text-blue-300"
              >
                Diagram the Damn Thing
              </Link>{' '}
              podcast episodes, where we break them down in detail.
            </p>
          </div>
        </div>
      </section>

      {/* Diagrams Grid */}
      <section className="py-16 bg-navy-900">
        <div className="container-custom">
          <h2 className="section-title">Featured Diagrams</h2>
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

      {/* Diagram Tools */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Diagram Tools</h2>
            <p className="text-xl text-gray-300 mb-6">
              We create our diagrams primarily using Lucidchart, which allows us
              to build clear, professional visualizations of complex systems and
              processes.
            </p>
            <p className="text-xl text-gray-300 mb-6">
              Each diagram follows a consistent visual language with clear
              labels, appropriate use of color, and a focus on readability and
              understanding.
            </p>
            <div className="card p-6 mt-8">
              <h3 className="text-xl font-bold mb-3">Diagram Principles</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Visual clarity over complexity</li>
                <li>Consistent use of shapes and colors</li>
                <li>Clear labels and annotations</li>
                <li>Logical flow and organization</li>
                <li>Focus on the most important elements</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Diagrams Matter */}
      <section className="py-16 bg-navy-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Why Diagrams Matter</h2>
            <p className="text-xl text-gray-300 mb-8">
              At Methodical Cloud, we believe that visual thinking is essential
              for understanding complex systems. Diagrams help clarify concepts,
              identify patterns, and communicate ideas more effectively than
              text alone.
            </p>
            <p className="text-xl text-gray-300">
              Each diagram is carefully crafted to provide clarity and insight,
              serving as both a learning tool and a reference for
              implementation.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
