'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const cities = [
  { name: "Mumbai", properties: "2.5K+", image: "https://images.unsplash.com/photo-1558626524-bcde9c4a3227?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80", href: "/properties?city=mumbai" },
  { name: "Thane", properties: "1.8K+", image: "https://images.unsplash.com/photo-1564507592331-c776a99d6c2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80", href: "/properties?city=thane" },
  { name: "Pune", properties: "3.2K+", image: "https://images.unsplash.com/photo-1578407080328-d26e4f226195?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80", href: "/properties?city=pune" },
  { name: "Navi Mumbai", properties: "1.2K+", image: "https://images.unsplash.com/photo-1600607687649-8129ebdc61ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80", href: "/properties?city=navi-mumbai" },
  { name: "Nashik", properties: "890+", image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80", href: "/properties?city=nashik" },
  { name: "Aurangabad", properties: "650+", image: "https://images.unsplash.com/photo-1586432804513-9c8f4b0d7e81?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80", href: "/properties?city=aurangabad" }
]

export default function CitiesCarousel() {
  return (
    <section className="py-24 bg-gradient-to-r from-emerald-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
        >
          Properties in Your City
        </motion.h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Discover premium properties across Maharashtra's top cities
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cities.map((city, index) => (
            <motion.div
              key={city.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={city.href} className="group block h-80 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl bg-white">
                <div className="relative h-64 overflow-hidden group-hover:scale-110 transition-transform duration-500 bg-gradient-to-br from-emerald-500 to-teal-500">
                  {/* Remove img entirely - use CSS gradient background */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-black text-white drop-shadow-2xl">
                      {city.name.split(' ')[0]}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl text-sm font-bold text-gray-900 shadow-lg">
                      {city.properties} Properties
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {city.name}
                  </h3>
                  <p className="text-emerald-600 font-bold text-xl">{city.properties}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
