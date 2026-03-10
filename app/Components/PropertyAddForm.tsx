'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog'
import { Home, MapPin, Bed, Bath, DollarSign, ImagePlus, Square } from 'lucide-react'

export default function PropertyAddForm() {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    type: 'For Sale',
    beds: '',
    baths: '',
    sqft: '',
    location: '',
    description: '',
    images: [] as File[]
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Property submitted:', formData)
    setSuccess(true)
    setTimeout(() => {
      setOpen(false)
      setSuccess(false)
      setFormData({
        title: '', price: '', type: 'For Sale', beds: '', baths: '',
        sqft: '', location: '', description: '', images: []
      })
    }, 2000)
    
    setLoading(false)
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, images: Array.from(e.target.files) })
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-3xl font-bold text-lg shadow-2xl hover:shadow-3xl flex items-center gap-3 border-0"
        >
          <Home className="w-5 h-5" />
          Add Your Property
        </motion.button>
      </DialogTrigger>
      
      <DialogContent className="max-w-2xl p-0 max-h-[90vh] overflow-y-auto">
        <DialogHeader className="p-8 border-b">
          <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            List Your Property
          </DialogTitle>
          <p className="text-gray-600 mt-2">Share your property with 10K+ buyers & renters</p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="p-8 space-y-8">
          {/* Basic Info */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label className="text-lg font-semibold mb-2 block flex items-center gap-2">
                <Home className="w-5 h-5" />
                Property Title
              </Label>
              <Input 
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="e.g. Luxury 3BHK Sea View Apartment"
                className="h-14 text-lg"
                required
              />
            </div>
            
            <div>
              <Label className="text-lg font-semibold mb-2 block flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                Price
              </Label>
              <Input 
                type="number"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                placeholder="₹25,00,000"
                className="h-14 text-lg"
                required
              />
            </div>
          </div>

          {/* Property Details */}
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <Label className="text-lg font-semibold mb-2 block">Type</Label>
              <select 
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="w-full h-14 p-4 border-2 border-gray-200 rounded-2xl text-lg focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20"
                required
              >
                <option>For Sale</option>
                <option>For Rent</option>
              </select>
            </div>
            
            <div>
              <Label className="text-lg font-semibold mb-2 block flex items-center gap-2">
                <Bed className="w-5 h-5" />
                Bedrooms
              </Label>
              <Input 
                type="number"
                value={formData.beds}
                onChange={(e) => setFormData({ ...formData, beds: e.target.value })}
                placeholder="3"
                className="h-14 text-lg"
                min="0"
              />
            </div>
            
            <div>
              <Label className="text-lg font-semibold mb-2 block flex items-center gap-2">
                <Bath className="w-5 h-5" />
                Bathrooms
              </Label>
              <Input 
                type="number"
                value={formData.baths}
                onChange={(e) => setFormData({ ...formData, baths: e.target.value })}
                placeholder="2"
                className="h-14 text-lg"
                min="0"
              />
            </div>
          </div>

          {/* Size & Location */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label className="text-lg font-semibold mb-2 block flex items-center gap-2">
                <Square className="w-5 h-5" />
                Area (sqft)
              </Label>
              <Input 
                type="number"
                value={formData.sqft}
                onChange={(e) => setFormData({ ...formData, sqft: e.target.value })}
                placeholder="1500"
                className="h-14 text-lg"
              />
            </div>
            
            <div>
              <Label className="text-lg font-semibold mb-2 block flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Location
              </Label>
              <Input 
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                placeholder="Majiwada, Thane West"
                className="h-14 text-lg"
                required
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <Label className="text-lg font-semibold mb-2 block">
              Description
            </Label>
            <Textarea 
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Describe your property features, amenities, nearby landmarks..."
              className="h-32 text-lg resize-none"
              required
            />
          </div>

          {/* Images */}
          <div>
            <Label className="text-lg font-semibold mb-2 block flex items-center gap-2">
              <ImagePlus className="w-5 h-5" />
              Property Photos (Max 10)
            </Label>
            <Input 
              type="file" 
              multiple 
              accept="image/*"
              onChange={handleImageChange}
              className="file:mr-4 file:py-3 file:px-6 file:rounded-2xl file:border-0 file:text-lg file:font-semibold file:bg-emerald-600 file:text-white hover:file:bg-emerald-700 h-14"
            />
            {formData.images.length > 0 && (
              <p className="text-sm text-emerald-600 mt-2">
                {formData.images.length} images selected
              </p>
            )}
          </div>

          {/* Submit */}
          <div className="flex gap-4 pt-4">
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => setOpen(false)}
              className="flex-1 h-14 text-lg"
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              disabled={loading}
              className="flex-1 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 h-14 text-lg font-bold shadow-xl"
            >
              {loading ? 'Submitting...' : 'List Property'}
            </Button>
          </div>

          {success && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-emerald-100 border border-emerald-300 text-emerald-800 px-8 py-6 rounded-3xl text-center"
            >
              <h3 className="text-2xl font-bold mb-2">✅ Property Listed!</h3>
              <p>Your property is now live and visible to 10K+ users</p>
            </motion.div>
          )}
        </form>
      </DialogContent>
    </Dialog>
  )
}
