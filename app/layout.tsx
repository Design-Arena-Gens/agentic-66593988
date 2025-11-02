import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ERP & POS System',
  description: 'Modern Enterprise Resource Planning with integrated Point of Sale',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
