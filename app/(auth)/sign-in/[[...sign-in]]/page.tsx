'use client'

import { SignIn } from '@clerk/nextjs'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        {/* Back Link */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
        >
          ← Back to Home
        </Link>

        {/* Clerk SignIn Component */}
        <div className="bg-white/20 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent mb-4">
              Welcome Back
            </h1>
            <p className="text-white/90 text-lg">Sign in to your account</p>
          </div>
          <SignIn 
            routing="path"
            path="/sign-in"
            signInUrl="/sign-in"
            redirectUrl="/dashboard"
            appearance={{
              elements: {
                formButtonPrimary: 
                  "w-full h-14 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-lg font-semibold rounded-2xl shadow-xl border-0",
                formInput: 
                  "h-14 bg-white/90 backdrop-blur-sm border-2 border-white/30 rounded-2xl text-lg focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20",
                formFieldLabel: 
                  "text-white font-semibold text-lg",
                formDividerHeadline: 
                  "text-white/70 font-semibold",
                socialButtonsBlockButton: 
                  "h-14 bg-white/20 backdrop-blur-sm border-2 border-white/30 hover:bg-white/30 text-white font-semibold rounded-2xl transition-all duration-300",
                footerActionLink: 
                  "text-emerald-200 hover:text-white font-semibold",
                footerParagraph: 
                  "text-white/80"
              },
              variables: {
                colorPrimary: '#10B981',
                colorBackground: 'rgba(255, 255, 255, 0.1)',
                colorText: '#FFFFFF',
                colorInputBackground: 'rgba(255, 255, 255, 0.9)',
                colorInputText: '#1F2937',
                borderRadius: '24px',
              }
            }}
          />
        </div>

        {/* Footer Link */}
        <p className="text-center mt-8 text-white/80">
          Don't have an account?{' '}
          <Link href="/sign-up" className="text-emerald-200 font-semibold hover:text-white">
            Create one here
          </Link>
        </p>
      </motion.div>
    </div>
  )
}
