import Link from 'next/link'
import { Phone, Mail, Map, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-gray-900 via-gray-800 to-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Company */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  DreamEstate
                </h3>
                <p className="text-gray-400 text-sm mt-1">Premium real estate across India</p>
              </div>
            </div>
            <div className="space-y-3 text-emerald-400">
              <div className="flex items-center space-x-3"><Phone className="w-5 h-5" />+91 98765 43210</div>
              <div className="flex items-center space-x-3"><Mail className="w-5 h-5" />hello@dreamestate.in</div>
              <div className="flex items-center space-x-3"><Map className="w-5 h-5" />Mumbai, MH</div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-300">
              <li><Link href="/buy" className="hover:text-white transition-colors">Buy</Link></li>
              <li><Link href="/rent" className="hover:text-white transition-colors">Rent</Link></li>
              <li><Link href="/sell" className="hover:text-white transition-colors">Sell</Link></li>
              <li><Link href="/properties" className="hover:text-white transition-colors">All Listings</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xl font-bold mb-6">Company</h4>
            <ul className="space-y-3 text-gray-300">
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-12 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="text-center lg:text-left">
            <p className="text-gray-400 mb-4">Get latest property listings</p>
            <div className="flex max-w-md mx-auto gap-2">
              <input placeholder="Your email" className="flex-1 bg-gray-800 border-gray-700 text-white placeholder-gray-400 px-4 py-3 rounded-xl focus:ring-emerald-500" />
              <button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 px-8 py-3 font-semibold rounded-xl whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
          
          <div className="flex space-x-6">
            {[[Facebook, 'facebook'], [Twitter, 'twitter'], [Instagram, 'instagram'], [Linkedin, 'linkedin']].map(([Icon, platform], i) => (
              <Link key={i} href={`https://twitter.com/${platform}`} className="group w-12 h-12 bg-gray-800 rounded-2xl flex items-center justify-center hover:bg-emerald-500 hover:scale-110 transition-all shadow-xl" target="_blank">
                <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </Link>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          © 2026 DreamEstate. All rights reserved. | Made with ❤️ in India
        </div>
      </div>
    </footer>
  )
}
