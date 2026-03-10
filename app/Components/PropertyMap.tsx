"use client"

import { GoogleMap, Marker } from "@react-google-maps/api"

export default function PropertyMap({ properties }: any) {

  return (
    <GoogleMap
      zoom={10}
      center={{ lat: 19.076, lng: 72.8777 }}
      mapContainerStyle={{ height: "500px", width: "100%" }}
    >

      {properties.map((p:any) => (
        <Marker
          key={p.id}
          position={{
            lat: 19.07 + Math.random() * 0.1,
            lng: 72.87 + Math.random() * 0.1
          }}
        />
      ))}

    </GoogleMap>
  )
}