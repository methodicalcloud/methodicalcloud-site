export default function About() {
  return (
    <main className="min-h-screen bg-[#1a1f25] text-white pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">ABOUT METHODICAL CLOUD</h1>

        <div className="space-y-8 text-lg">
          <p>
            Methodical Cloud is dedicated to bringing clarity to complex technical concepts through thoughtful
            automation, scalable system design, and technical storytelling that engages and informs.
          </p>

          <p>
            Our mission is to demystify technical concepts and provide clear, actionable insights for developers,
            architects, and technical leaders.
          </p>

          <p>
            We believe that even the most complex systems can be explained clearly, and that good technical
            communication is as important as good technical implementation.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-6">Our Approach</h2>

          <p>We focus on three core areas:</p>

          <ul className="list-disc pl-6 space-y-4">
            <li>
              <strong>Clarity in automation</strong> - Creating and documenting automation processes that are
              understandable, maintainable, and effective.
            </li>
            <li>
              <strong>Systems that scale</strong> - Designing and explaining system architectures that can grow with
              your needs while maintaining performance and reliability.
            </li>
            <li>
              <strong>Technical storytelling</strong> - Communicating complex technical concepts in ways that resonate
              with both technical and non-technical audiences.
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}
