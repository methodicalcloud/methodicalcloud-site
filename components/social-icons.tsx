import { Twitter, Linkedin, Github, Rss, Mail } from "lucide-react"

interface SocialIconsProps {
  showEmail?: boolean
  size?: "sm" | "md" | "lg"
  className?: string
}

export default function SocialIcons({ showEmail = false, size = "md", className = "" }: SocialIconsProps) {
  const iconSize = size === "sm" ? "h-5 w-5" : size === "lg" ? "h-6 w-6" : "h-5 w-5"

  return (
    <div className={`flex space-x-4 ${className}`}>
      <a href="https://x.com/methodicalcloud" className="text-gray-300 hover:text-blue-400 transition-colors">
        <Twitter className={iconSize} />
        <span className="sr-only">Twitter (X)</span>
      </a>
      <a
        href="https://bsky.app/profile/methodicalcloud.bsky.social"
        className="text-gray-300 hover:text-blue-400 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={iconSize}
        >
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
        <span className="sr-only">Bluesky</span>
      </a>
      <a href="https://linkedin.com/in/mrlesmithjr" className="text-gray-300 hover:text-blue-400 transition-colors">
        <Linkedin className={iconSize} />
        <span className="sr-only">LinkedIn</span>
      </a>
      <a href="https://github.com/mrlesmithjr" className="text-gray-300 hover:text-blue-400 transition-colors">
        <Github className={iconSize} />
        <span className="sr-only">GitHub</span>
      </a>
      {showEmail && (
        <a href="mailto:info@methodicalcloud.com" className="text-gray-300 hover:text-blue-400 transition-colors">
          <Mail className={iconSize} />
          <span className="sr-only">Email</span>
        </a>
      )}
      <a href="/rss.xml" className="text-gray-300 hover:text-blue-400 transition-colors">
        <Rss className={iconSize} />
        <span className="sr-only">RSS Feed</span>
      </a>
    </div>
  )
}
