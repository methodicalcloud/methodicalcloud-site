import { useMDXComponent } from "next-contentlayer/hooks"

export const Mdx = ({ code }: { code: string }) => {
  const MDXContent = useMDXComponent(code)

  return <MDXContent />
}
