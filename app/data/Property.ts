// export type Property = {
//   id: number
//   image: string
//   title: string
//   price: number
//   beds: number
//   baths: number
//   sqft: number
//   location: string
//   type?: 'For Sale' | 'For Rent'
// }


//  export const properties: Property[] = [

// { id:1,image:"https://images.unsplash.com/photo-1564013799919-ab600027ffc6",title:"Luxury Villa with Pool",price:12500000,beds:4,baths:3,sqft:2800,location:"Mumbai" },

// { id:2,image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c",title:"Modern Apartment",price:8500000,beds:3,baths:2,sqft:1600,location:"Pune" },

// { id:3,image:"https://images.unsplash.com/photo-1572120360610-d971b9d7767c",title:"Beach Side House",price:21000000,beds:5,baths:4,sqft:3500,location:"Goa" },

// { id:4,image:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",title:"City View Apartment",price:7200000,beds:2,baths:2,sqft:1200,location:"Mumbai" },

// { id:5,image:"https://images.unsplash.com/photo-1600573472591-ee6b68d14c68",title:"Garden Villa",price:18500000,beds:4,baths:3,sqft:3000,location:"Bangalore" },

// { id:6,image:"https://images.unsplash.com/photo-1599423300746-b62533397364",title:"Premium Penthouse",price:32000000,beds:4,baths:4,sqft:4200,location:"Delhi" },

// { id:7,image:"https://images.unsplash.com/photo-1600585152915-d208bec867a1",title:"Lake View Apartment",price:9500000,beds:3,baths:2,sqft:1700,location:"Pune" },

// { id:8,image:"https://images.unsplash.com/photo-1560448075-bb4caa6cde4c",title:"Budget Studio Flat",price:4200000,beds:1,baths:1,sqft:600,location:"Mumbai" },

// { id:9,image:"https://images.unsplash.com/photo-1580587771525-78b9dba3b914",title:"Luxury Farm House",price:45000000,beds:6,baths:5,sqft:6000,location:"Lonavala" },

// { id:10,image:"https://images.unsplash.com/photo-1600607687644-c7171b42498a",title:"Family Apartment",price:7800000,beds:3,baths:2,sqft:1500,location:"Thane" },

// { id:11,image:"https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6",title:"Hill View Cottage",price:11500000,beds:3,baths:2,sqft:2000,location:"Shimla" },

// { id:12,image:"https://images.unsplash.com/photo-1560185127-6ed189bf02f4",title:"Luxury Smart Home",price:27500000,beds:5,baths:4,sqft:4000,location:"Bangalore" },

// { id:13,image:"https://images.unsplash.com/photo-1505691938895-1758d7feb511",title:"Classic Townhouse",price:13200000,beds:4,baths:3,sqft:2500,location:"Chennai" },

// { id:14,image:"https://images.unsplash.com/photo-1599427303058-f04cbcf4756f",title:"Modern Duplex",price:19000000,beds:4,baths:3,sqft:3100,location:"Hyderabad" },

// { id:15,image:"https://images.unsplash.com/photo-1568605114967-8130f3a36994",title:"City Center Apartment",price:9600000,beds:3,baths:2,sqft:1800,location:"Mumbai" },

// { id:16,image:"https://images.unsplash.com/photo-1512917774080-9991f1c4c750",title:"Glass Villa",price:38000000,beds:5,baths:5,sqft:5000,location:"Goa" },

// { id:17,image:"https://images.unsplash.com/photo-1570129477492-45c003edd2be",title:"Compact Studio",price:3800000,beds:1,baths:1,sqft:550,location:"Pune" },

// { id:18,image:"https://images.unsplash.com/photo-1507089947368-19c1da9775ae",title:"Luxury Garden Bungalow",price:42000000,beds:6,baths:5,sqft:5500,location:"Delhi" },

// { id:19,image:"https://images.unsplash.com/photo-1493809842364-78817add7ffb",title:"Minimalist Apartment",price:6700000,beds:2,baths:2,sqft:1100,location:"Bangalore" },

// { id:20,image:"https://images.unsplash.com/photo-1484154218962-a197022b5858",title:"Cozy Lake Cottage",price:14500000,beds:3,baths:2,sqft:2200,location:"Udaipur" },

// { id:21,image:"https://images.unsplash.com/photo-1575517111478-7f6afd0973db",title:"Skyline Penthouse",price:52000000,beds:5,baths:5,sqft:6500,location:"Mumbai" },

// { id:22,image:"https://images.unsplash.com/photo-1584622650111-993a426fbf0a",title:"Compact City Flat",price:5200000,beds:2,baths:1,sqft:900,location:"Thane" },

// { id:23,image:"https://images.unsplash.com/photo-1565182999561-18d7dc61c393",title:"Luxury Mansion",price:75000000,beds:8,baths:7,sqft:9000,location:"Delhi" },

// { id:24,image:"https://images.unsplash.com/photo-1502673530728-f79b4cab31b1",title:"Modern Family Home",price:14800000,beds:4,baths:3,sqft:2600,location:"Hyderabad" },

// { id:25,image:"https://images.unsplash.com/photo-1600585154340-1e3d24e3f8f9",title:"Sea Facing Apartment",price:29500000,beds:4,baths:3,sqft:3000,location:"Goa" },

// { id:26,image:"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",title:"Budget Apartment",price:4600000,beds:2,baths:1,sqft:800,location:"Pune" },

// { id:27,image:"https://images.unsplash.com/photo-1560448075-bb4caa6cde4c",title:"Studio City Loft",price:4100000,beds:1,baths:1,sqft:650,location:"Mumbai" },

// { id:28,image:"https://images.unsplash.com/photo-1605276373954-0c4a0dac5b12",title:"Nature View Villa",price:23500000,beds:4,baths:4,sqft:3500,location:"Coorg" },

// { id:29,image:"https://images.unsplash.com/photo-1568605114967-8130f3a36994",title:"Suburban Duplex",price:12500000,beds:3,baths:3,sqft:2400,location:"Nashik" },

// { id:30,image:"https://images.unsplash.com/photo-1505691938895-1758d7feb511",title:"Elegant Residence",price:28500000,beds:5,baths:4,sqft:4200,location:"Bangalore" },

// { id:31,image:"https://images.unsplash.com/photo-1599423300746-b62533397364",title:"Sky Tower Apartment",price:16000000,beds:3,baths:3,sqft:2100,location:"Mumbai" },

// { id:32,image:"https://images.unsplash.com/photo-1580587771525-78b9dba3b914",title:"Weekend Farmhouse",price:19500000,beds:4,baths:3,sqft:3600,location:"Lonavala" },

// { id:33,image:"https://images.unsplash.com/photo-1560185127-6ed189bf02f4",title:"Designer Smart Home",price:35000000,beds:5,baths:5,sqft:4800,location:"Delhi" },

// { id:34,image:"https://images.unsplash.com/photo-1570129477492-45c003edd2be",title:"Compact Studio Flat",price:3900000,beds:1,baths:1,sqft:580,location:"Pune" },

// { id:35,image:"https://images.unsplash.com/photo-1512917774080-9991f1c4c750",title:"Luxury Glass House",price:42000000,beds:5,baths:5,sqft:5200,location:"Goa" },

// { id:36,image:"https://images.unsplash.com/photo-1484154218962-a197022b5858",title:"Countryside Cottage",price:13500000,beds:3,baths:2,sqft:2100,location:"Manali" },

// { id:37,image:"https://images.unsplash.com/photo-1507089947368-19c1da9775ae",title:"Luxury Bungalow",price:38000000,beds:6,baths:5,sqft:6000,location:"Bangalore" },

// { id:38,image:"https://images.unsplash.com/photo-1493809842364-78817add7ffb",title:"Minimal Flat",price:5800000,beds:2,baths:2,sqft:1000,location:"Thane" },

// { id:39,image:"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",title:"Affordable Apartment",price:4400000,beds:2,baths:1,sqft:780,location:"Pune" },

// { id:40,image:"https://images.unsplash.com/photo-1568605114967-8130f3a36994",title:"Green Villa",price:26000000,beds:4,baths:4,sqft:3800,location:"Kerala" },

// { id:41,image:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",title:"Urban City Apartment",price:8900000,beds:3,baths:2,sqft:1600,location:"Mumbai" },

// { id:42,image:"https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6",title:"Mountain View Cottage",price:15500000,beds:3,baths:2,sqft:2300,location:"Shimla" },

// { id:43,image:"https://images.unsplash.com/photo-1600585152915-d208bec867a1",title:"Lakefront Apartment",price:9800000,beds:3,baths:2,sqft:1700,location:"Udaipur" },

// { id:44,image:"https://images.unsplash.com/photo-1565182999561-18d7dc61c393",title:"Royal Mansion",price:82000000,beds:9,baths:8,sqft:11000,location:"Delhi" },

// { id:45,image:"https://images.unsplash.com/photo-1575517111478-7f6afd0973db",title:"Luxury Skyline Penthouse",price:56000000,beds:5,baths:5,sqft:7000,location:"Mumbai" },

// { id:46,image:"https://images.unsplash.com/photo-1560448075-bb4caa6cde4c",title:"Smart Studio Loft",price:4200000,beds:1,baths:1,sqft:620,location:"Pune" },

// { id:47,image:"https://images.unsplash.com/photo-1502673530728-f79b4cab31b1",title:"Premium Family Villa",price:24500000,beds:4,baths:4,sqft:3700,location:"Hyderabad" },

// { id:48,image:"https://images.unsplash.com/photo-1600607687644-c7171b42498a",title:"Suburban Apartment",price:7200000,beds:3,baths:2,sqft:1400,location:"Thane" },

// { id:49,image:"https://images.unsplash.com/photo-1564013799919-ab600027ffc6",title:"Luxury Pool Villa",price:31000000,beds:5,baths:4,sqft:4500,location:"Goa" },

// { id:50,image:"https://images.unsplash.com/photo-1599423300746-b62533397364",title:"Executive Penthouse",price:48000000,beds:5,baths:5,sqft:6000,location:"Mumbai" }

 
// ]

// const rentProperties = [
//   { 
//     id: 51, 
//     image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80",
//     title: "Luxury 3BHK Sea View Apartment", price: 45000, beds: 3, baths: 3, sqft: 1650, location: "Bandra West, Mumbai", type: "For Rent"
//   },
//   { 
//     id: 52, 
//     image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80",
//     title: "Spacious 2BHK", price: 28000, beds: 2, baths: 2, sqft: 1200, location: "Majiwada, Thane", type: "For Rent"
//   },
//   { 
//     id: 53, 
//     image: "https://images.unsplash.com/photo-1600585152915-d208bec867a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80",
//     title: "Modern 1BHK", price: 18000, beds: 1, baths: 1, sqft: 650, location: "Hinjewadi, Pune", type: "For Rent"
//   },
//   { 
//     id: 54, 
//     image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80",
//     title: "Family 3BHK", price: 35000, beds: 3, baths: 2, sqft: 1400, location: "Kothrud, Pune", type: "For Rent"
//   }
// ]


export type Property = {
  id: number
  image: string
  title: string
  price: number
  beds: number
  baths: number
  sqft: number
  location: string
  type: "For Sale" | "For Rent"
}

const cities = [
  "Mumbai",
  "Thane",
  "Pune",
  "Bangalore",
  "Delhi",
  "Hyderabad",
  "Chennai",
  "Goa",
  "Lonavala",
  "Nashik",
]

const titles = [
  "Luxury Villa",
  "Modern Apartment",
  "Family Home",
  "Premium Penthouse",
  "Smart Home",
  "Lake View Apartment",
  "Garden Villa",
  "Skyline Penthouse",
  "Studio Apartment",
  "Luxury Bungalow",
]

const images = [
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  "https://images.unsplash.com/photo-1572120360610-d971b9d7767c",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
  "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68",
  "https://images.unsplash.com/photo-1599423300746-b62533397364",
]

function random(arr: any[]) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function generateProperties(count: number, startId: number, type: "For Sale" | "For Rent") {
  return Array.from({ length: count }, (_, i) => ({
    id: startId + i,
    image: random(images),
    title: random(titles),
    price:
      type === "For Sale"
        ? Math.floor(Math.random() * 60000000) + 4000000
        : Math.floor(Math.random() * 40000) + 10000,
    beds: Math.floor(Math.random() * 5) + 1,
    baths: Math.floor(Math.random() * 4) + 1,
    sqft: Math.floor(Math.random() * 4000) + 500,
    location: random(cities),
    type,
  }))
}

export const saleProperties: Property[] = generateProperties(120, 1, "For Sale")

export const rentProperties: Property[] = generateProperties(100, 121, "For Rent")

export const properties: Property[] = [
  ...saleProperties,
  ...rentProperties,
]