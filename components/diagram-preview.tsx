import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface DiagramPreviewProps {
  title: string
  description: string
  imageSrc: string
  href: string
}

export default function DiagramPreview({
  title,
  description,
  imageSrc,
  href,
}: DiagramPreviewProps) {
  return (
    <div className="card overflow-hidden flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageSrc || '/images/placeholders/placeholder.svg'}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300 mb-4 flex-grow">{description}</p>
        <Link
          href={href}
          className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center mt-auto"
        >
          View Diagram <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}
