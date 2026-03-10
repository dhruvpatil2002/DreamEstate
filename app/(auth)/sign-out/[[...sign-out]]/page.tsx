'use client'

import { SignOutButton } from '@clerk/nextjs'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function SignOutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md text-center"
      >
        <div className="bg-white/20 backdrop-blur-xl rounded-3xl p-12 border border-white/30 shadow-2xl">
          <div className="text-6xl mb-6">👋</div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent mb-4">
            See You Soon!
          </h1>
          <p className="text-white/90 text-lg mb-8 max-w-sm mx-auto">
            You're about to sign out. You'll need to sign in again to access your dashboard.
          </p>
          
          <SignOutButton redirectUrl="/">
            <button className="w-full h-14 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-lg font-semibold rounded-2xl shadow-xl border-0 transition-all">
              Sign Out
            </button>
          </SignOutButton>
        </div>

        <Link href="/dashboard" className="inline-flex items-center gap-2 mt-8 text-white/80 hover:text-white transition-colors">
          ← Back to Dashboard
        </Link>
      </motion.div>
    </div>
  )
}
