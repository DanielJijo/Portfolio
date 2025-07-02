import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'
import { ClientOnly } from '@/components/ClientOnly'
import MouseTracker from '@/components/MouseTracker'
import { DockHoverProvider } from '@/context/DockHoverContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Daniel Jijo P P',
  description: 'Portfolio website of Daniel Jijo P P',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        {/* Optionally keep SVG favicon for modern browsers */}
        {/* <link rel="icon" type="image/svg+xml" href="/logo.svg" /> */}
      </head>
      <body className={`${inter.className} text-white min-h-screen relative overflow-x-hidden bg-gradient-to-br from-black via-zinc-900 to-white/10`}>
        <DockHoverProvider>
          <MouseTracker />
        <div className="relative z-10">
          <Navbar />
          <main>
            {children}
          </main>
        </div>
        </DockHoverProvider>
      </body>
    </html>
  )
}
