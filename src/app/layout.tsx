import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { ViewTransitionWrapper } from '@/components/viewTransitionWrapper'
import { Providers } from './providers'
import '@/styles/globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F9F5F1' },
    { media: '(prefers-color-scheme: dark)', color: '#282828' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: {
    default: 'Hardware Tune',
    template: '%s | Hardware Tune',
  },
  metadataBase: new URL('https://hardwaretune.com'),
  description:
    'Deep dives into PC hardware, GPU diagnostics, and performance tuning.',
  authors: [{ name: 'Afnan Naveed' }],
  creator: 'Afnan Naveed',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Hardware Tune',
    title: 'Hardware Tune',
    description:
      'Deep dives into PC hardware, GPU diagnostics, and performance tuning.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Hardware Tune',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hardware Tune',
    description:
      'Deep dives into PC hardware, GPU diagnostics, and performance tuning.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-full flex-col antialiased`}
      >
        <Providers>
          <Header />
          <main className="flex-grow">
            <ViewTransitionWrapper>{children}</ViewTransitionWrapper>
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
