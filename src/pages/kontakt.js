import React from "react"

export default function Kontakt() {
  const position = [53.132, 23.168]
  return (
    <>
      <section tw="flex h-screen">
        <div tw="w-2/5 bg-accent-gray text-accent-light-gray">
          hello from kontakt
        </div>
        <div tw="w-3/5 h-screen">
          {/* <MapContainer
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
          </MapContainer> */}
        </div>
      </section>
    </>
  )
}
