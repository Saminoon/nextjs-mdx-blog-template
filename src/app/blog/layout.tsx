import type { Metadata } from 'next'

export const metadata = {
  title: 'Blog',
  description: 'Read the latest PC hardware guides and troubleshooting logs.',
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
