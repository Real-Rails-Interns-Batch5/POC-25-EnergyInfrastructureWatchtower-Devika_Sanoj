"use client";

import { useEffect, useState, useMemo } from "react";

import PlantMap from "../components/PlantMap";
import FuelMixChart from "../components/FuelMixChart";
import RegionalCompare from "../components/RegionalCompare";
import OutageTimeline from "../components/OutageTimeline";
import EmissionsPanel from "../components/EmissionsPanel";
import IntelligencePanel from "../components/IntelligencePanel";
import WhyThisMatters from "../components/WhyThisMatters";
import WhoControlsRail from "../components/WhoControlsRail";
import Filters from "../components/Filters";
import DownloadDataButton from "../components/DownloadDataButton";
import LiveClock from "../components/LiveClock";
import KPICards from "../components/KPICards";
import RiskScoreCard from "../components/RiskScoreCard";
import AIExplanationPanel from "../components/AIExplanationPanel";
import GridHealthMonitor from "../components/GridHealthMonitor";
import OutageMonitor from "../components/OutageMonitor";
import RegionalLeaderboard from "../components/RegionalLeaderboard";
import LiveIntelligenceFeed from "../components/LiveIntelligenceFeed";

import {
  fetchPlants,
  fetchFuelMix,
  fetchOutages,
  fetchEmissions,
  fetchRegions,
  fetchIntelligence,
} from "../../lib/api";

export default function Page() {
  const [plants, setPlants] = useState<any[]>([]);
  const [fuelMix, setFuelMix] = useState<any[]>([]);
  const [outages, setOutages] = useState<any[]>([]);
  const [emissions, setEmissions] = useState<any[]>([]);
  const [regions, setRegions] = useState<any[]>([]);
  const [intel, setIntel] = useState<any>(null);

  const [selectedRegion, setSelectedRegion] = useState("All");
  const [selectedFuel, setSelectedFuel] = useState("All");

  useEffect(() => {
  Promise.all([
    fetchPlants(),
    fetchFuelMix(),
    fetchOutages(),
    fetchEmissions(),
    fetchRegions(),
    fetchIntelligence(),
  ]).then(
    ([
      plantsData,
      fuelData,
      outageData,
      emissionData,
      regionData,
      intelData,
    ]) => {
      setPlants(plantsData);
      setFuelMix(fuelData);
      setOutages(outageData);
      setEmissions(emissionData);
      setRegions(regionData);
      setIntel(intelData);
    }
  );
}, []);

  // FILTER LOGIC (FIXED + STABLE)
  const filteredPlants = useMemo(() => {
  return plants.filter((p) => {
    const regionMatch =
      selectedRegion === "All" ||
      p.region === selectedRegion;

    const fuelMatch =
      selectedFuel === "All" ||
      p.fuel_type === selectedFuel;

    return regionMatch && fuelMatch;
  });
}, [plants, selectedRegion, selectedFuel]);

const filteredOutages = useMemo(() => {
  return outages.filter((o) => {
    return (
      selectedRegion === "All" ||
      o.region === selectedRegion
    );
  });
}, [outages, selectedRegion]);

const filteredEmissions = useMemo(() => {
  return emissions.filter((e) => {
    return (
      selectedRegion === "All" ||
      e.region === selectedRegion
    );
  });
}, [emissions, selectedRegion]);

const filteredFuelMix = useMemo(() => {
  if (selectedFuel === "All") {
    return fuelMix;
  }

  return fuelMix.filter(
    (f) => f.fuel === selectedFuel
  );
}, [fuelMix, selectedFuel]);
  // FIXED DOWNLOAD (JSON + REAL DATA)
  const downloadFiltered = () => {
    const exportData = {
      filters: {
        region: selectedRegion,
        fuel: selectedFuel,
      },
      data: filteredPlants,
    };

    const blob = new Blob(
      [JSON.stringify(exportData, null, 2)],
      { type: "application/json" }
    );

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "filtered-energy-data.json";
    a.click();
  };

  return (
    <div className="min-h-screen bg-[#030712] text-white flex">

      {/* MAIN (70%) */}
      <div className="w-[70%] p-4 space-y-4">

        {/* HEADER */}
        <div className="bg-[#0B1117] border border-[#1F2937] p-3 rounded-lg">
          <h1
  className="
    text-[#38BDF8]
    text-3xl
    font-extrabold
    tracking-tight
  "
>
  Energy Infrastructure Watchtower
</h1>
          <p className="text-sm text-gray-400 mt-1">
            Real Rails Intelligence System — Grid Visibility Layer
          </p>
        </div>

        <LiveClock />

<KPICards
  intelligence={intel}
  outages={outages}
  regions={regions}
/>

        {/* MAP */}
        <PlantMap data={filteredPlants} />

        <div className="grid grid-cols-2 gap-4">
          <FuelMixChart data={filteredFuelMix} />
         <RegionalCompare emissions={filteredEmissions} />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <OutageTimeline data={filteredOutages} />
          <EmissionsPanel data={filteredEmissions} />
        </div>
      </div>

      {/* SIDEBAR (30%) */}
      <div className="w-[30%] border-l border-[#1F2937] p-4 space-y-4">

        <IntelligencePanel data={intel} />

<RiskScoreCard
  intelligence={intel}
/>
<AIExplanationPanel
  intelligence={intel}
/>
<GridHealthMonitor />

<OutageMonitor />

<RegionalLeaderboard />

<LiveIntelligenceFeed />

        {/* FIXED HEADINGS */}
        <div>
          <h2 className="text-[#38BDF8] font-semibold mb-1">
            Why This Matters
          </h2>
          <WhyThisMatters />
        </div>

        <div>
          <h2 className="text-[#38BDF8] font-semibold mb-1">
            Who Controls the Rail
          </h2>
          <WhoControlsRail />
        </div>

        <Filters
          regions={regions}
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
          selectedFuel={selectedFuel}
          setSelectedFuel={setSelectedFuel}
        />

        <DownloadDataButton onDownload={downloadFiltered} />
      </div>
    </div>
  );
}