"use client";
import React from "react";

import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup,
  Polyline,
} from "react-leaflet";

const outageNodes = [
  { city: "Mumbai", lat: 19.076, lng: 72.8777 },
  { city: "Delhi", lat: 28.6139, lng: 77.2090 },
  { city: "Tokyo", lat: 35.6762, lng: 139.6503 },
  { city: "Berlin", lat: 52.5200, lng: 13.4050 },
  { city: "Paris", lat: 48.8566, lng: 2.3522 },
  { city: "London", lat: 51.5072, lng: -0.1276 },
  { city: "Dubai", lat: 25.2048, lng: 55.2708 },
  { city: "Singapore", lat: 1.3521, lng: 103.8198 },
];

const energyFlows = [
  [[19.076, 72.8777], [28.6139, 77.209]],
  [[28.6139, 77.209], [12.9716, 77.5946]],
  [[35.6762, 139.6503], [34.6937, 135.5023]],
  [[52.52, 13.405], [48.8566, 2.3522]],
  [[48.8566, 2.3522], [51.5072, -0.1276]],
];

export default function MapInner({ data }: any) {
  const center: [number, number] = [25, 35];

  return (
    <div
      className="
      relative
      bg-[#0B1117]
      border
      border-[#1F2937]
      rounded-lg
      overflow-hidden
    "
    >
      {/* HEADER */}

      <div className="p-4 border-b border-[#1F2937] flex justify-between items-center">
        <div>
          <h2 className="text-[#38BDF8] text-lg font-bold">
            Global Energy Infrastructure Network
          </h2>

          <p className="text-xs text-gray-400 mt-1">
            Real-time plant visibility, outage intelligence,
            and energy flow monitoring
          </p>
        </div>

        <div className="text-green-400 text-xs font-semibold">
          ● LIVE
        </div>
      </div>

      {/* GRID SUMMARY */}

      <div
      className="
        absolute
        top-20
        right-4
        z-[1000]
        bg-[#030712]/95
        border
        border-[#1F2937]
        rounded-lg
        p-3
        text-xs
      "
      >
        <div>Plants: {data?.length || 0}</div>
        <div>Outage Nodes: {outageNodes.length}</div>
        <div>Regions: 9</div>
      </div>

      {/* LEGEND */}

      <div
        className="
        absolute
        bottom-4
        right-4
        z-[1000]
        bg-[#030712]/95
        border
        border-[#1F2937]
        rounded-lg
        p-3
        text-xs
      "
      >
        <div className="text-[#38BDF8]">
          ● Energy Plant
        </div>

        <div className="text-red-500">
          ◉ Outage Alert
        </div>

        <div className="text-cyan-300">
          ━ Energy Flow
        </div>
      </div>

      <div className="h-[600px] w-full">
        <MapContainer
  center={center}
  zoom={2}
  scrollWheelZoom={false}
  doubleClickZoom={true}
  dragging={true}
  zoomControl={true}
  style={{
    height: "100%",
    width: "100%",
  }}
>
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          />

          {/* ENERGY FLOWS */}

          {energyFlows.map((flow, index) => (
            <Polyline
              key={index}
              positions={flow as any}
              pathOptions={{
                color: "#38BDF8",
                weight: 3,
                opacity: 0.7,
                dashArray: "8 8",
              }}
            />
          ))}

          {/* PLANTS */}

          {data?.map((plant: any) => (
            <CircleMarker
              key={plant.id}
              center={[plant.lat, plant.lng]}
              radius={7}
              pathOptions={{
                color: "#38BDF8",
                fillColor: "#38BDF8",
                fillOpacity: 1,
                weight: 2,
              }}
            >
              <Popup>
                <div style={{ color: "black" }}>
                  <b>{plant.name}</b>
                  <br />
                  {plant.fuel_type}
                  <br />
                  {plant.region}
                </div>
              </Popup>
            </CircleMarker>
          ))}

          {/* OUTAGE ALERT HALOS */}

          {outageNodes.map((node, index) => (
            <React.Fragment key={`outage-${node.city}-${index}`}>

              {/* RED ALERT RING */}

              <CircleMarker
                center={[node.lat, node.lng]}
                radius={16}
                pathOptions={{
                  color: "#EF4444",
                  fillColor: "#EF4444",
                  fillOpacity: 0.12,
                  weight: 2,
                }}
              />

              {/* CYAN NODE */}

              <CircleMarker
                center={[node.lat, node.lng]}
                radius={6}
                pathOptions={{
                  color: "#38BDF8",
                  fillColor: "#38BDF8",
                  fillOpacity: 1,
                  weight: 2,
                }}
              >
                <Popup>
                  <div style={{ color: "black" }}>
                    <b>Outage Alert</b>
                    <br />
                    {node.city}
                  </div>
                </Popup>
              </CircleMarker>

            </React.Fragment>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}