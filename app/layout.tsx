import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DreamEstate - Premium Real Estate',
  description: 'Find luxury properties across India',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          {/* Dynamic import - loads client-side only */}
          <Navbar />
          <main className="min-h-screen pt-20">{children}</main>
          
        </body>
      </html>
    </ClerkProvider>
  )
}

// Dynamic import for client components
async function Navbar() {
  const { default: NavbarComponent } = await import('@/app/Components/Navbar')
  return <NavbarComponent />
}

