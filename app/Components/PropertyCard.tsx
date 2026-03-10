'use client'

import { motion} from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  MapPin, Bed, Bath, Square, Heart 
} from 'lucide-react'
import { Property } from '@/app/data/Property'

interface PropertyCardProps {
  property: Property
}

export function PropertyCard({ property }: PropertyCardProps) {
  const [imageError, setImageError] = useState(false)
  
  const formatPrice = (price: number) => {
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(1)}Cr`
    } else if (price >= 100000) {
      return `₹${(price / 100000).toFixed(1)}L`
    }
    return `₹${price.toLocaleString()}`
  }

  const fallbackImage = `/api/placeholder/400/300?text=${encodeURIComponent(property.title.substring(0,20))}`

  return (
    <motion.div
      whileHover={{ y: -12 }}
      className="group cursor-pointer"
    >
      <Link href={`/properties/${property.id}`} className="block">
        {/* Image Card */}
        <div className="relative bg-gradient-to-br from-slate-50 to-gray-100 rounded-3xl overflow-hidden shadow-xl hover:shadow-3xl transition-all duration-500 h-80">
          
          {/* Featured Badge */}
          {Math.random() > 0.7 && (
            <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
              🔥 PREMIUM
            </div>
          )}
          
          {/* Image with ERROR HANDLING */}
          {!imageError ? (
            <Image
              src={property.image}
              alt={property.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onError={() => setImageError(true)}
              onLoadingComplete={() => setImageError(false)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-400 to-amber-500">
              <div className="text-6xl opacity-10 animate-pulse">🏠</div>
            </div>
          )}
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
          
          {/* Price Badge */}
          <div className="absolute bottom-6 left-6 right-6 z-20">
            <div className="bg-white/95 backdrop-blur-xl p-5 rounded-3xl shadow-2xl border border-white/50">
              <div className="text-center">
                <div className="font-black text-2xl text-gray-900 mb-1">
                  {formatPrice(property.price)}
                </div>
                <div className="text-emerald-600 font-bold text-sm uppercase tracking-wide">
                  {property.location}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="absolute top-20 right-6 flex flex-col gap-3 z-20">
            <div className="bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-xl text-center text-sm font-bold">
              <div className="flex items-center justify-center gap-1 text-gray-800">
                <Bed className="w-4 h-4" />
                {property.beds}BHK
              </div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-xl text-center text-sm font-bold">
              <div className="flex items-center justify-center gap-1 text-gray-800">
                <Bath className="w-4 h-4" />
                {property.baths}
              </div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-xl text-center text-sm font-bold w-20">
              <div className="flex items-center justify-center gap-1 text-gray-800 text-xs">
                <Square className="w-3 h-3" />
                {Math.round(property.sqft / 100)}m²
              </div>
            </div>
          </div>
        </div>

        {/* Content - SAME AS BEFORE */}
        <div className="p-6 bg-white rounded-b-3xl -mt-8 relative z-10 border border-gray-100 shadow-2xl">
          <div className="flex items-center gap-2 mb-4 text-gray-700 font-semibold text-lg">
            <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0" />
            <span className="truncate">{property.location}</span>
          </div>

          <h3 className="font-bold text-xl md:text-2xl text-gray-900 mb-4 leading-tight line-clamp-2 hover:text-orange-600 transition-colors group-hover:text-orange-600">
            {property.title}
          </h3>

          <div className="flex items-center gap-6 text-sm text-gray-600 mb-6">
            <div className="flex items-center gap-1">
              <Bed className="w-4 h-4 text-gray-400" />
              <span>{property.beds} Beds</span>
            </div>
            <div className="flex items-center gap-1">
              <Bath className="w-4 h-4 text-gray-400" />
              <span>{property.baths} Baths</span>
            </div>
            <div className="flex items-center gap-1">
              <Square className="w-4 h-4 text-gray-400" />
              <span>{property.sqft.toLocaleString()} sqft</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <Link 
              href={`/properties/${property.id}`}
              className="group inline-flex items-center gap-2 text-lg font-bold text-gray-900 hover:text-orange-600 transition-all duration-300"
            >
              View Property
              <motion.div 
                className="w-6 h-6 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.div>
            </Link>
            
            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-orange-50 hover:bg-orange-100 rounded-2xl group hover:shadow-md transition-all duration-200 border border-orange-100"
              aria-label="Save property"
            >
              <Heart className="w-6 h-6 text-orange-500 group-hover:fill-orange-400 transition-all duration-300" />
            </motion.button>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
