'use client'

import Link from 'next/link'
import { PropertyCard } from '@/app/Components/PropertyCard'
import { properties } from '@/app/data/Property'
import { motion } from 'framer-motion'

export default function PropertiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            All Properties
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto mb-8"
          >
            Browse 10K+ luxury homes across India
          </motion.p>
          <Link 
            href="/" 
            className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/30 transition-all"
          >
            ← Back to Homepage
          </Link>
        </div>
      </section>

      {/* Properties Grid */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <PropertyCard property={property} />
            </motion.div>
          ))}
        </div>
        
        {properties.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-8">🏠</div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">No Properties Found</h2>
            <p className="text-xl text-gray-600 mb-8">Check back soon for new listings</p>
            <Link href="/" className="bg-emerald-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-emerald-700">
              Browse Homepage
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
