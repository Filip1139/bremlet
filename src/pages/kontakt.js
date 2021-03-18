import React from "react"
import { MapContainer, TileLayer, Marker } from "react-leaflet"
import tw from "twin.macro"
import { Helmet } from "react-helmet"
export default function Kontakt() {
  const position = [53.132, 23.168]
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
        />
      </Helmet>
      <section tw="flex h-screen">
        <div tw="w-2/5 bg-accent-gray text-accent-light-gray">
          hello from kontakt
        </div>
        <div tw="w-3/5 h-screen">
          <MapContainer
            tw="w-full h-full"
            center={position}
            zoom={13}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}></Marker>
          </MapContainer>
        </div>
      </section>
    </>
  )
}
