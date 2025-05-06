import { Twitter, Linkedin } from "lucide-react"

interface SocialShareProps {
  title: string
  url: string
  description?: string
  className?: string
}

export default function SocialShare({ title, url, description = "", className = "" }: SocialShareProps) {
  // Ensure URL is absolute
  const fullUrl = url.startsWith("http") ? url : `https://methodicalcloud.com${url}`

  // Prepare sharing URLs
  const twitterUrl = `https://x.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(fullUrl)}&via=methodicalcloud`
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullUrl)}`
  const blueskyUrl = `https://bsky.app/intent/compose?text=${encodeURIComponent(`${title} ${fullUrl}`)}`

  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      <span className="text-gray-300">Share:</span>

      <a
        href={twitterUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-blue-400 transition-colors"
        aria-label="Share on Twitter"
      >
        <Twitter className="h-5 w-5" />
      </a>

      <a
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-blue-400 transition-colors"
        aria-label="Share on LinkedIn"
      >
        <Linkedin className="h-5 w-5" />
      </a>

      <a
        href={blueskyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-blue-400 transition-colors"
        aria-label="Share on Bluesky"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      </a>
    </div>
  )
}
