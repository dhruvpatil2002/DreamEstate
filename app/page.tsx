'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import { useUser } from '@clerk/nextjs'
import { properties } from "@/app/data/Property"
import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import ReviewCarousel from "@/app/Components/ReviewCarousel"
import CitiesCarousel from "@/app/Components/CitiesCarousel"
import RentProperties
 from "@/app/Components/RentProperties"

 import PropertyAddForm from "@/app/Components/PropertyAddForm"
import {
  Search, MapPin, BedDouble, Bath, Square, ArrowRight,
  Heart, Star, Calendar, MessageCircle, Share2, Filter,
  Phone, Mail, Map, Facebook, Twitter, Instagram, Linkedin
} from "lucide-react"

// Favorites hook
const useFavorites = () => {
  const [favorites, setFavorites] = useState<number[]>([])
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('dreamestate_favorites')
      if (saved) setFavorites(JSON.parse(saved))
    }
  }, [])

  const toggleFavorite = (id: number) => {
    const newFavorites = favorites.includes(id)
      ? favorites.filter(f => f !== id)
      : [...favorites, id]
    setFavorites(newFavorites)
    localStorage.setItem('dreamestate_favorites', JSON.stringify(newFavorites))
  }

  return { favorites, toggleFavorite }
}

export default function HomePage() {
  const { isSignedIn } = useUser()
  const [search, setSearch] = useState("")
  const [priceRange, setPriceRange] = useState([0, 50000000])
  const [beds, setBeds] = useState(1)
  const [baths, setBaths] = useState(1)
  const [showFilters, setShowFilters] = useState(false)
  
  const { favorites, toggleFavorite } = useFavorites()

  const filteredProperties = properties
    .filter(p => 
      p.location.toLowerCase().includes(search.toLowerCase()) &&
      p.price >= priceRange[0] && p.price <= priceRange[1] &&
      p.beds >= beds && p.baths >= baths
    )
    .slice(0, 6)

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1, y: 0,
      transition: { duration: 0.6, delay: i * 0.1 }
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HERO SECTION */}
      <section className="relative py-28 bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white rounded-full mix-blend-multiply animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white rounded-full mix-blend-multiply animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-1/2 w-80 h-80 bg-white rounded-full mix-blend-multiply animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            >
              Find Your Perfect <br />
              <motion.span initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.6 }}>
                Dream Home
              </motion.span>
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl opacity-90 mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            >
              Search 10K+ villas, apartments and luxury homes across 200+ cities in India
            </motion.p>

            <motion.div className="max-w-xl mx-auto relative mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
              <Input
                placeholder="Search city (Mumbai, Pune, Goa...)"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-12 h-14 text-lg bg-white/90 backdrop-blur-sm text-black rounded-2xl shadow-2xl border-0 focus:ring-4 focus:ring-white/30"
              />
            </motion.div>

            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Link href="/sign-in">
                <Button size="lg" className="bg-white text-emerald-700 hover:bg-gray-100 h-14 px-8 text-lg font-semibold shadow-2xl rounded-2xl">
                  Sign In
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-emerald-700 h-14 px-8 text-lg font-semibold backdrop-blur-sm rounded-2xl">
                  Get Started
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
<RentProperties />
<PropertyAddForm />
      <ReviewCarousel />
<CitiesCarousel />  
      {/* NEW FILTERS BAR */}
      <section className="bg-white sticky top-0 z-50 shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md relative">
              <Input
                placeholder="Search properties..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-12 h-12 rounded-2xl shadow-sm border-0 focus:ring-2 focus:ring-emerald-500"
              />
              <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="gap-2 h-12">
                <Filter className="w-4 h-4" /> Filters
              </Button>
              <div className="text-sm bg-emerald-100 text-emerald-800 px-4 py-2 rounded-xl font-semibold">
                {filteredProperties.length} found
              </div>
            </div>
          </div>
          {showFilters && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mt-4 p-6 bg-gray-50 rounded-2xl">
              <div className="grid md:grid-cols-4 gap-6">
                <div>
                  <label className="text-sm font-semibold mb-2 block">Price Range</label>
                  <div className="text-sm text-gray-500 mb-2">
                    ₹{priceRange[0].toLocaleString()} - ₹{priceRange[1].toLocaleString()}
                  </div>
                  <input type="range" min="0" max="50000000" step="100000" value={priceRange[1]} 
                    onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])} 
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
                </div>
                <div>
                  <label className="text-sm font-semibold mb-2 block">Min Beds</label>
                  <Input type="number" value={beds} onChange={(e) => setBeds(Number(e.target.value))} className="h-10 w-24" min={1} />
                </div>
                <div>
                  <label className="text-sm font-semibold mb-2 block">Min Baths</label>
                  <Input type="number" value={baths} onChange={(e) => setBaths(Number(e.target.value))} className="h-10 w-24" min={1} />
                </div>
                <Button variant="outline" onClick={() => {setPriceRange([0, 50000000]); setBeds(1); setBaths(1);}}>Clear</Button>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* PROPERTIES */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Featured Properties <span className="text-emerald-600">({favorites.length} saved)</span>
          </h2>
          <Link href="/properties">
            <Button size="lg" className="gap-2">View All <ArrowRight size={18}/></Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property, index) => (
            <motion.div key={property.id} variants={cardVariants} initial="hidden" whileInView="visible" custom={index} viewport={{ once: true }}>
              <Card className="group overflow-hidden rounded-3xl hover:shadow-3xl transition-all duration-500 border-0 bg-white hover:-translate-y-2 h-full">
                <div className="relative h-64 overflow-hidden">
                  <img src={property.image} alt={property.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <motion.button
                    onClick={() => toggleFavorite(property.id)}
                    className={`absolute top-4 right-4 p-3 bg-white/90 backdrop-blur rounded-2xl shadow-xl transition-all ${
                      favorites.includes(property.id) ? 'bg-red-500 text-white' : 'text-gray-600 hover:bg-red-50 hover:text-red-500'
                    }`}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Heart className={`w-5 h-5 ${favorites.includes(property.id) ? 'fill-current' : ''}`} />
                  </motion.button>
                  <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-t from-black/70 p-4 rounded-2xl">
                    <div className="flex items-center justify-between text-white">
                      <span className="text-2xl font-bold">₹{property.price.toLocaleString()}</span>
                      <div className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-xl">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" /><span>4.8</span>
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-8 space-y-4 pt-0">
                  <h3 className="text-xl font-bold group-hover:text-emerald-600">{property.title}</h3>
                  <div className="flex items-center text-emerald-600 font-semibold mb-4">
                    <MapPin size={18} className="mr-1" />{property.location}
                  </div>
                  <div className="flex justify-between text-gray-600 text-sm mb-6">
                    <div><BedDouble size={16} className="inline mr-1" />{property.beds} Beds</div>
                    <div><Bath size={16} className="inline mr-1" />{property.baths} Baths</div>
                    <div><Square size={16} className="inline mr-1" />{property.sqft.toLocaleString()} sqft</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <motion.button whileTap={{ scale: 0.95 }} className="p-3 bg-emerald-50 hover:bg-emerald-100 rounded-xl text-xs text-emerald-700 font-semibold text-center">
                      <Calendar className="w-4 h-4 mx-auto mb-1" /><span>Visit</span>
                    </motion.button>
                    <motion.button whileTap={{ scale: 0.95 }} className="p-3 bg-blue-50 hover:bg-blue-100 rounded-xl text-xs text-blue-700 font-semibold text-center">
                      <MessageCircle className="w-4 h-4 mx-auto mb-1" /><span>Chat</span>
                    </motion.button>
                    <motion.button whileTap={{ scale: 0.95 }} className="p-3 bg-purple-50 hover:bg-purple-100 rounded-xl text-xs text-purple-700 font-semibold text-center">
                      <Share2 className="w-4 h-4 mx-auto mb-1" /><span>Share</span>
                    </motion.button>
                  </div>
                  <Link href={`/property/${property.id}`}>
                    <Button className="w-full h-12 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 shadow-xl font-semibold rounded-2xl">
                      View Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {isSignedIn && filteredProperties.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center py-12 bg-emerald-50 rounded-3xl mt-16">
            <h3 className="text-2xl font-bold text-emerald-800 mb-4">🔔 Get Alerts</h3>
            <p className="text-gray-600 mb-6">New properties matching your search</p>
            <Button className="bg-gradient-to-r from-emerald-600 to-teal-600">Save Search</Button>
          </motion.div>
        )}
      </section>

      {/* TRUST SECTION */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h3 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            Trusted By Thousands
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-12 text-center max-w-4xl mx-auto">
            {[{ num: "10K+", label: "Properties", icon: "🏠" }, { num: "5K+", label: "Buyers", icon: "😊" }, { num: "200+", label: "Cities", icon: "📍" }].map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2 }} viewport={{ once: true }} className="p-8 bg-white/50 backdrop-blur rounded-3xl shadow-xl hover:shadow-2xl border border-white/20">
                <div className="text-5xl mb-4">{stat.icon}</div>
                <h3 className="text-5xl font-black text-emerald-600 mb-4">{stat.num}</h3>
                <p className="text-xl text-gray-700 font-semibold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white py-24 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative">
          <div className="absolute inset-0 bg-white/10 animate-pulse"></div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to find your <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">dream property?</span>
            </h2>
            <p className="text-xl mb-10 opacity-95 max-w-2xl mx-auto">Premium cab service + expert agents</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Link href="/properties">
                <Button size="lg" className="bg-white text-emerald-700 px-12 h-14 text-lg font-semibold shadow-2xl rounded-2xl">Browse Properties</Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-2 border-white/50 text-white px-8 h-14 text-lg font-semibold backdrop-blur rounded-2xl">Contact Agent</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gradient-to-t from-gray-900 via-gray-800 to-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">DreamEstate</h3>
                  <p className="text-gray-400 text-sm mt-1">Luxury real estate across India</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-emerald-400"><Phone className="w-5 h-5" />+91 98765 43210</div>
                <div className="flex items-center space-x-3 text-emerald-400"><Mail className="w-5 h-5" />hello@dreamestate.in</div>
                <div className="flex items-center space-x-3 text-emerald-400"><Map className="w-5 h-5" />Mumbai, MH</div>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3 text-gray-300">
                <li><Link href="/buy" className="hover:text-white">Buy</Link></li>
                <li><Link href="/rent" className="hover:text-white">Rent</Link></li>
                <li><Link href="/sell" className="hover:text-white">Sell</Link></li>
                <li><Link href="/properties" className="hover:text-white">Listings</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-6">Company</h4>
              <ul className="space-y-3 text-gray-300">
                <li><Link href="/about" className="hover:text-white">About</Link></li>
                <li><Link href="/services" className="hover:text-white">Services</Link></li>
                <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
                <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-12 flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="text-center">
              <p className="text-gray-400 mb-4">Latest property listings</p>
              <div className="flex max-w-md mx-auto gap-2">
                <Input placeholder="Your email" className="bg-gray-800 border-gray-700 text-white h-12" />
                <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 h-12 px-8">Subscribe</Button>
              </div>
            </div>
            <div className="flex space-x-6">
              {[[Facebook, "/facebook"], [Twitter, "/twitter"], [Instagram, "/instagram"], [Linkedin, "/linkedin"]].map(([Icon, href], i) => (
                <Link key={i} href={href} className="group w-12 h-12 bg-gray-800 rounded-2xl flex items-center justify-center hover:bg-emerald-500 hover:scale-110 shadow-xl transition-all" target="_blank">
                  <Icon className="w-5 h-5 group-hover:scale-110" />
                </Link>
              ))}
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
            © 2026 DreamEstate. All rights reserved. | Made with ❤️ in India
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </div>
  )
}
