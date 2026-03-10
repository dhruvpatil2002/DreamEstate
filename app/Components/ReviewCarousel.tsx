'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

const reviews = [
  { id: 1, name: "Priya Sharma", role: "Home Buyer, Mumbai", quote: "Found my dream apartment in Bandra within 3 days!", rating: 5 },
  { id: 2, name: "Rahul Patel", role: "Investor, Thane", quote: "Closed 3 investment deals last month!", rating: 5 },
  { id: 3, name: "Anita Desai", role: "NRI, Pune", quote: "Bought parents' home remotely from Dubai!", rating: 4.9 },
  { id: 4, name: "Vikram Singh", role: "Family, Navi Mumbai", quote: "Perfect 4BHK, saved ₹2 lakhs commission!", rating: 5 }
]

export default function ReviewCarousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const review = reviews[current]

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"
        >
          Loved by 10,000+ Happy Customers
        </motion.h2>
        
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={review.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/70 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/50"
          >
            <div className="flex items-center mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-7 h-7 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
              ))}
            </div>
            <blockquote className="text-2xl font-light text-gray-800 leading-relaxed mb-8">
              "{review.quote}"
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center">
                <span className="text-2xl font-bold text-white">★</span>
              </div>
              <div>
                <h4 className="font-bold text-2xl">{review.name}</h4>
                <p className="text-emerald-600 font-semibold">{review.role}</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center gap-2 mt-12">
            {reviews.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition-all ${i === current ? 'bg-emerald-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
