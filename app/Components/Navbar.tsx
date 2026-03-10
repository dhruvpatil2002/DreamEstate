'use client'

import Link from 'next/link'
import { useUser, UserButton, SignInButton } from '@clerk/nextjs'
import { Search, Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'

export default function Navbar() {
  const { isSignedIn } = useUser()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()
  const pathname = usePathname()

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/properties', label: 'Properties' },
    { href: '/dashboard', label: 'Dashboard' }
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/properties?search=${encodeURIComponent(searchQuery)}`)
      setSearchQuery('')
    }
  }

  useEffect(() => {
    const handleResize = () => mobileOpen && setMobileOpen(false)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [mobileOpen])

  const closeMobile = () => setMobileOpen(false)

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                DreamEstate
              </h1>
              <p className="text-sm text-gray-500">Premium Properties</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-lg font-semibold pb-1 transition-colors border-b-2 ${
                  pathname === link.href
                    ? 'text-emerald-600 border-emerald-500'
                    : 'text-gray-700 hover:text-emerald-600 hover:border-emerald-400 border-transparent'
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            <form onSubmit={handleSearch} className="relative">
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search properties..."
                className="pl-12 pr-6 py-3 w-64 text-sm bg-gray-100 rounded-2xl border focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
              <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400 pointer-events-none" />
            </form>

            {isSignedIn ? <UserButton /> : (
              <SignInButton mode="modal">
                <button className="px-6 py-3 bg-emerald-600 text-white font-semibold rounded-2xl hover:bg-emerald-700 transition-colors">
                  Sign In
                </button>
              </SignInButton>
            )}
          </div>

          {/* Mobile button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMobile}
                  className={`py-3 text-lg font-semibold transition-colors ${
                    pathname === link.href ? 'text-emerald-600' : 'hover:text-emerald-600'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <form onSubmit={handleSearch} className="relative">
                <input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search properties..."
                  className="w-full pl-12 pr-6 py-3 text-base bg-gray-100 rounded-2xl border focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
                <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400 pointer-events-none" />
              </form>
              {isSignedIn ? (
                <Link href="/dashboard" onClick={closeMobile} className="px-6 py-3 bg-emerald-600 text-white font-semibold rounded-2xl text-center hover:bg-emerald-700 transition-colors">
                  Go to Dashboard
                </Link>
              ) : (
                <SignInButton mode="modal">
                  <button className="px-6 py-3 bg-emerald-600 text-white font-semibold rounded-2xl text-center hover:bg-emerald-700 transition-colors">
                    Sign In
                  </button>
                </SignInButton>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
