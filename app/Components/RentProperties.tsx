'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { PropertyCard } from './PropertyCard'
import { properties } from '@/app/data/Property'
import { MapPin, Filter, DollarSign, BedDouble } from 'lucide-react'

const rentProperties = properties.filter(p => p.type === 'For Rent')

export default function RentProperties() {
  return (
    <section className="py-24 bg-gradient-to-br from-orange-50 via-amber-50 to-orange-25 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 bg-orange-100 px-6 py-3 rounded-full mb-8">
            <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full animate-ping"></div>
            <span className="font-bold text-orange-700 text-lg">🔥 250+ New Rentals This Week</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 bg-clip-text text-transparent leading-tight">
            Rentals Starting @ <span className="text-4xl">₹15K</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to move homes? Discover verified rentals across <strong>Mumbai, Thane, Pune</strong> and more
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-4 gap-8 mb-16 px-8"
        >
          <div className="group text-center p-6 bg-white/70 backdrop-blur-sm rounded-3xl border border-orange-100 hover:border-orange-200 transition-all">
            <div className="text-4xl font-black text-orange-600 mb-2 group-hover:scale-110 transition-transform">1,247</div>
            <p className="text-gray-600 font-semibold">Active Rentals</p>
          </div>
          <div className="group text-center p-6 bg-white/70 backdrop-blur-sm rounded-3xl border border-orange-100 hover:border-orange-200 transition-all">
            <div className="text-4xl font-black text-orange-600 mb-2 group-hover:scale-110 transition-transform">₹12K</div>
            <p className="text-gray-600 font-semibold">Avg Monthly Rent</p>
          </div>
          <div className="group text-center p-6 bg-white/70 backdrop-blur-sm rounded-3xl border border-orange-100 hover:border-orange-200 transition-all">
            <div className="text-4xl font-black text-orange-600 mb-2 group-hover:scale-110 transition-transform">2-3BHK</div>
            <p className="text-gray-600 font-semibold">Most Popular</p>
          </div>
          <div className="group text-center p-6 bg-white/70 backdrop-blur-sm rounded-3xl border border-orange-100 hover:border-orange-200 transition-all">
            <div className="text-4xl font-black text-orange-600 mb-2 group-hover:scale-110 transition-transform">97%</div>
            <p className="text-gray-600 font-semibold">Verified Owners</p>
          </div>
        </motion.div>

        {/* Filter Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-12 bg-white/50 backdrop-blur-sm rounded-3xl p-6 border border-orange-100"
        >
          <div className="flex items-center gap-3 text-orange-700 font-semibold">
            <Filter className="w-6 h-6" />
            <span>1,247 Rentals Available</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/properties?type=rent&beds=1" className="px-4 py-2 bg-orange-100 text-orange-700 rounded-2xl text-sm font-semibold hover:bg-orange-200 transition-all">1BHK</Link>
            <Link href="/properties?type=rent&beds=2" className="px-4 py-2 bg-orange-100 text-orange-700 rounded-2xl text-sm font-semibold hover:bg-orange-200 transition-all">2BHK</Link>
            <Link href="/properties?type=rent&beds=3" className="px-4 py-2 bg-orange-100 text-orange-700 rounded-2xl text-sm font-semibold hover:bg-orange-200 transition-all">3BHK</Link>
            <Link href="/properties?type=rent&price=under-20k" className="px-4 py-2 bg-amber-100 text-amber-700 rounded-2xl text-sm font-semibold hover:bg-amber-200 transition-all">Under ₹20K</Link>
          </div>
        </motion.div>

        {/* Properties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20">
          {rentProperties.slice(0, 8).map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              whileHover={{ y: -12, transition: { duration: 0.3 } }}
              className="group"
            >
              <PropertyCard property={property} />
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {rentProperties.length === 0 && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-center py-32 bg-white/50 backdrop-blur-sm rounded-3xl"
          >
            <div className="text-8xl mb-8">🏠</div>
            <h3 className="text-4xl font-bold text-gray-800 mb-4">No Rentals Yet</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto">
              Be the first to list your rental property with DreamEstate
            </p>
            <Link href="/add-property">
              <button className="bg-gradient-to-r from-orange-600 to-amber-600 text-white px-12 py-6 rounded-3xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all">
                List Your Rental
              </button>
            </Link>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <Link href="/properties?type=rent">
            <button className="group relative bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 text-white px-16 py-8 rounded-3xl font-black text-2xl shadow-2xl hover:shadow-3xl hover:scale-[1.02] transition-all duration-300 overflow-hidden">
              <span className="relative z-10">View All Rentals ({rentProperties.length}+)</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -skew-x-3"></div>
            </button>
          </Link>
          <p className="text-lg text-gray-600 mt-6">Saved searches, price alerts, and verified owners</p>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </section>
  )
}
