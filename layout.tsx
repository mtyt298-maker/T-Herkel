import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'T-Herkel | Kabelverlegung im Hochbau',
  description: 'Professionelle Kabelverlegung und Bauhilfsarbeiten in Deutschland.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  )
}
