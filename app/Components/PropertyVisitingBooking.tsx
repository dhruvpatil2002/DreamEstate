'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

import { MapPin, Phone, User, Car, Clock, MessageCircle } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

interface Property {
  id: number
  title: string
  location: string
  image: string
  price: number
}

interface PropertyVisitBookingProps {
  property: Property
  onClose?: () => void
}

export default function PropertyVisitBooking({
  property,
  onClose
}: PropertyVisitBookingProps) {

  /* SAFETY GUARD */

  if (!property) return null

  const [open, setOpen] = useState(true)
  const [selectedSlot, setSelectedSlot] = useState('')
  const [customerName, setCustomerName] = useState('')
  const [customerPhone, setCustomerPhone] = useState('')
  const [loading, setLoading] = useState(false)

  const timeSlots = [
    '10:00 AM - 11:00 AM',
    '11:30 AM - 12:30 PM',
    '2:00 PM - 3:00 PM',
    '3:30 PM - 4:30 PM',
    '5:00 PM - 6:00 PM'
  ]

  const handleClose = () => {
    setOpen(false)
    onClose?.()
  }

  const handleBookVisit = () => {

    if (!customerPhone.match(/^[0-9]{10}$/)) {
      alert('Enter valid 10 digit phone')
      return
    }

    setLoading(true)

    const whatsappMessage = `🏠 Property Visit Booked

📍 ${property.title}
📅 Time: ${selectedSlot}

🚗 Cab: Ola
👨‍💼 Agent: Rahul Sharma
💰 Service Fee: ₹299

Driver will call 15 mins before arrival.`

    const whatsappUrl =
      `https://wa.me/919876543210?text=${encodeURIComponent(whatsappMessage)}`

    setTimeout(() => {

      window.open(whatsappUrl, '_blank')

      alert("Visit booked successfully!")

      setLoading(false)

      handleClose()

    }, 800)
  }

  return (

    <Dialog open={open} onOpenChange={handleClose}>

      <DialogContent className="max-w-md p-0 rounded-2xl">

        <DialogHeader className="p-6 border-b">

          <DialogTitle className="flex items-center gap-2 text-xl font-bold">
            <Car className="w-5 h-5"/>
            Book Property Visit
          </DialogTitle>

        </DialogHeader>


        <div className="p-6 space-y-6">

          {/* PROPERTY PREVIEW */}

          <Card>

            <div className="h-32 overflow-hidden">

              <img
                src={property.image || "https://placehold.co/600x400"}
                alt={property.title}
                onError={(e)=>{
                  e.currentTarget.src = "https://placehold.co/600x400"
                }}
                className="w-full h-full object-cover"
              />

            </div>

            <CardContent className="p-4">

              <h3 className="font-bold text-lg">
                {property.title}
              </h3>

              <div className="flex items-center text-sm text-gray-600">
                <MapPin className="w-4 h-4 mr-1"/>
                {property.location}
              </div>

              <div className="text-lg font-bold text-emerald-600 mt-2">
                ₹{property.price.toLocaleString()}
              </div>

            </CardContent>

          </Card>


          {/* CUSTOMER FORM */}

          <div className="space-y-4">

            <div>
              <Label className="flex items-center gap-2 mb-1">
                <User className="w-4 h-4"/>
                Name
              </Label>

              <Input
                value={customerName}
                onChange={(e)=>setCustomerName(e.target.value)}
                placeholder="Enter name"
              />
            </div>


            <div>
              <Label className="flex items-center gap-2 mb-1">
                <Phone className="w-4 h-4"/>
                Phone
              </Label>

              <Input
                value={customerPhone}
                onChange={(e)=>setCustomerPhone(e.target.value)}
                placeholder="9876543210"
              />
            </div>


            <div>
              <Label className="flex items-center gap-2 mb-1">
                <Clock className="w-4 h-4"/>
                Time Slot
              </Label>

              <Select value={selectedSlot} onValueChange={setSelectedSlot}>

                <SelectTrigger>
                  <SelectValue placeholder="Select time"/>
                </SelectTrigger>

                <SelectContent>

                  {timeSlots.map(slot => (

                    <SelectItem key={slot} value={slot}>
                      {slot}
                    </SelectItem>

                  ))}

                </SelectContent>

              </Select>

            </div>

          </div>


          {/* BUTTONS */}

          <div className="flex gap-3">

            <Button
              variant="outline"
              onClick={handleClose}
              className="flex-1"
            >
              Cancel
            </Button>

            <Button
              onClick={handleBookVisit}
              disabled={!customerName || !customerPhone || !selectedSlot || loading}
              className="flex-1 bg-emerald-600 hover:bg-emerald-700"
            >

              <MessageCircle className="w-4 h-4 mr-2"/>

              {loading ? "Booking..." : "Book Visit"}

            </Button>

          </div>

        </div>

      </DialogContent>

    </Dialog>
  )
}