'use client'

import { useState, useEffect } from 'react'

interface Property {
  id: number
  title: string
  location: string
  price: number
  beds: number
  baths: number
  sqft: number
  image: string
}

export function useFavorites() {
  const [favorites, setFavorites] = useState<number[]>([])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('dreamestate_favorites')
        if (saved) {
          setFavorites(JSON.parse(saved))
        }
      } catch (error) {
        console.warn('Failed to load favorites:', error)
      }
    }
  }, [])

  const toggleFavorite = (id: number) => {
    const newFavorites = favorites.includes(id)
      ? favorites.filter(f => f !== id)
      : [...favorites, id]
    
    setFavorites(newFavorites)
    
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('dreamestate_favorites', JSON.stringify(newFavorites))
      } catch (error) {
        console.warn('Failed to save favorites:', error)
      }
    }
  }

  return { favorites, toggleFavorite }
}
