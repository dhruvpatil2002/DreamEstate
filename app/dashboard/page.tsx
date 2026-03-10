'use client'

import { useUser, UserButton, SignInButton } from '@clerk/nextjs'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'  // shadcn/ui
import { useFavorites } from '@/lib/useFavourite'  // ✅ Fixed path + name
import { PropertyCard } from '@/app/Components/PropertyCard'  // ✅ Fixed path
import { properties } from '@/app/data/Property'  // ✅ Fixed path


export default function Dashboard() {
  const { user } = useUser()
  const { favorites } = useFavorites()

  // Show sign-in if not authenticated (middleware already protects route)
  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 py-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-4xl mx-auto px-6 text-center"
        >
          <div className="text-6xl mb-8">🏠</div>
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Your Dashboard</h1>
          <p className="text-xl text-gray-600 mb-12 max-w-lg mx-auto">
            Sign in to view saved properties, bookings, and personalized recommendations
          </p>
          <SignInButton mode="modal" redirectUrl="/dashboard">
            <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-12 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all">
              Access Dashboard
            </button>
          </SignInButton>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
      {/* Header */}
      <section className="bg-white/80 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Welcome Back, {user.firstName || user.fullName || 'User'}!
              </h1>
              <p className="text-gray-600 mt-2">Manage your properties & favorites</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-2xl">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                {favorites.length} Saved
              </div>
              <UserButton afterSignOutUrl="/" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-gray-100 group">
            <div className="text-emerald-600 text-3xl mb-4">🏠</div>
            <h3 className="text-4xl font-black text-emerald-600 mb-2">{favorites.length}</h3>
            <p className="text-gray-600 font-semibold text-lg">Saved Properties</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-gray-100 group">
            <div className="text-blue-600 text-3xl mb-4">👁️</div>
            <h3 className="text-4xl font-black text-blue-600 mb-2">24</h3>
            <p className="text-gray-600 font-semibold text-lg">Recent Views</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-gray-100 group">
            <div className="text-purple-600 text-3xl mb-4">📅</div>
            <h3 className="text-4xl font-black text-purple-600 mb-2">2</h3>
            <p className="text-gray-600 font-semibold text-lg">Pending Bookings</p>
          </div>
        </motion.div>

        {/* Saved Properties */}
        {favorites.length > 0 ? (
          <div>
            <h2 className="text-3xl font-bold mb-8">Your Saved Properties</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {favorites.slice(0, 6).map(id => {
                const prop = properties.find(p => p.id === id)
                if (!prop) return null
                return <PropertyCard key={prop.id} property={prop} />
              })}
            </div>
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20 bg-white/50 backdrop-blur rounded-3xl"
          >
            <div className="text-6xl mb-8">💎</div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">No Saved Properties</h3>
            <p className="text-xl text-gray-600 mb-8">Save your favorite properties from the homepage</p>
            <Link href="/">
              <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-12 py-4 rounded-2xl font-bold text-lg shadow-xl">
                Browse Properties
              </Button>
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  )
}
