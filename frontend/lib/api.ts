const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "http://backend:8000";

export async function fetchPlants() {
  const res = await fetch(`${BASE_URL}/api/plants/`);
  return res.json();
}

export async function fetchFuelMix() {
  const res = await fetch(`${BASE_URL}/api/fuel-mix/`);
  return res.json();
}

export async function fetchOutages() {
  const res = await fetch(`${BASE_URL}/api/outages/`);
  return res.json();
}

export async function fetchEmissions() {
  const res = await fetch(`${BASE_URL}/api/emissions/`);
  return res.json();
}

export async function fetchRegions() {
  const res = await fetch(`${BASE_URL}/api/regions/`);
  return res.json();
}

export async function fetchIntelligence() {
  const res = await fetch(`${BASE_URL}/api/intelligence/dashboard`);
  return res.json();
}