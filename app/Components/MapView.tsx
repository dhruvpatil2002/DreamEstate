"use client"

import { MapContainer, TileLayer, Marker } from "react-leaflet"
import "leaflet/dist/leaflet.css"

export default function MapView({ properties }: any) {

  return (
    <MapContainer
      center={[19.076, 72.8777]}
      zoom={10}
      className="h-[500px] w-full rounded-xl"
    >

      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {properties.map((p: any) => (
        <Marker
          key={p.id}
          position={[
            19.07 + Math.random() * 0.1,
            72.87 + Math.random() * 0.1
          ]}
        />
      ))}

    </MapContainer>
  )
}