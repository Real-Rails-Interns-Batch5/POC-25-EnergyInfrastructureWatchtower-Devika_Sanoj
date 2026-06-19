"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

const MapInner = dynamic(
  () => import("./MapInner"),
  {
    ssr: false,
    loading: () => (
      <div
        className="
          h-[700px]
          flex
          items-center
          justify-center
          bg-[#0B1117]
          border
          border-[#1F2937]
          rounded-lg
        "
      >
        <div className="text-center">
          <div className="text-[#38BDF8] text-lg font-semibold">
            Loading Global Infrastructure Network...
          </div>

          <div className="text-gray-400 text-sm mt-2">
            Initializing map engine
          </div>
        </div>
      </div>
    ),
  }
);

export default function PlantMap({ data }: any) {
  const [activateMap, setActivateMap] =
    useState(false);

  if (!activateMap) {
    return (
      <div
        className="
          h-[700px]
          bg-[#0B1117]
          border
          border-[#1F2937]
          rounded-lg
          flex
          flex-col
          items-center
          justify-center
        "
      >
        <div className="text-center max-w-lg">
          <h2
            className="
              text-2xl
              font-bold
              text-[#38BDF8]
            "
          >
            Global Energy Infrastructure Network
          </h2>

          <p
            className="
              text-gray-400
              mt-3
            "
          >
            Plant locations, outage intelligence,
            regional infrastructure monitoring,
            and energy flow visibility.
          </p>

          <button
            onClick={() =>
              setActivateMap(true)
            }
            className="
              mt-6
              px-6
              py-3
              rounded-lg
              bg-[#38BDF8]
              text-black
              font-semibold
              hover:scale-105
              transition
            "
          >
            Activate Infrastructure Map
          </button>
        </div>
      </div>
    );
  }

  return <MapInner data={data} />;
}