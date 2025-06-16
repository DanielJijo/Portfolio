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
