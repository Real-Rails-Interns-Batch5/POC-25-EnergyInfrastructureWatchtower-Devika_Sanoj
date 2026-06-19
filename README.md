
# Energy Infrastructure Watchtower

## POC Information

* **POC ID:** 25
* **Project Title:** Energy Infrastructure Watchtower
* **Category:** Data & Intelligence
* **Developer:** Devika Sanoj

---

# Project Overview

Energy Infrastructure Watchtower is a Real Rails Intelligence Library dashboard designed to provide visibility into global energy infrastructure networks.

The platform combines geospatial intelligence, outage monitoring, fuel mix analytics, emissions tracking, and infrastructure intelligence into a unified operational dashboard.

The system helps everyday viewers, builders, policymakers, and allocators understand the relationship between energy infrastructure, reliability, sustainability, and regional energy risks.

---

# Problem Statement

Energy infrastructure data is often fragmented across multiple sources, making it difficult to understand:

* Where critical energy assets are located
* Which regions are vulnerable to outages
* How energy generation is distributed
* How emissions vary across regions
* Which institutions control critical infrastructure

This project centralizes energy intelligence into a single interactive platform that enables faster infrastructure analysis and decision-making.

---

# Architecture Summary

## System Architecture

Frontend (Next.js + TypeScript)
↓
API Layer
↓
Backend (FastAPI + Pandas)
↓
Data Sources
(EIA Open Data + Our World in Data + Mock Outage Intelligence)

---

## Frontend

Technologies:

* Next.js
* React
* TypeScript
* Tailwind CSS
* React Leaflet
* Recharts

Responsibilities:

* Dashboard UI
* Interactive Map
* Analytics Charts
* Filters
* Intelligence Panels
* JSON Export

---

## Backend

Technologies:

* FastAPI
* Python
* Pandas

Responsibilities:

* Data Processing
* API Endpoints
* Intelligence Metrics
* Data Aggregation
* Mock Data Fallback

---

# Data Sources

## Primary Sources

* EIA Open Data
* Our World in Data

## Fallback Sources

* Synthetic Outage Intelligence Dataset

Fallback data is automatically used when event-level outage feeds are unavailable.

---

# Key Features

## Infrastructure Intelligence

* Global Energy Infrastructure Map
* Outage Intelligence Nodes
* Energy Flow Monitoring
* Infrastructure Visibility Layer

## Analytics

* Fuel Mix Analysis
* Regional Emissions Comparison
* Emissions Trend Monitoring
* Outage Timeline

## Intelligence Layer

* KPI Dashboard
* Risk Intelligence Score
* AI Explanation Panel
* Regional Leaderboard
* Live Intelligence Feed

## Controls

* Region Filtering
* Fuel Type Filtering
* Interactive Tooltips
* Download Filtered Data (JSON)

---

# Real Rails Compliance

## Visual DNA

* Background: #030712
* Surface: #0B1117
* Accent: #38BDF8
* Layout: 70% Visualization / 30% Intelligence Sidebar

## Intelligence Components

* Why This Matters
* Who Controls The Rail
* Risk Intelligence
* Infrastructure Context

---

# Project Structure

```text
POC-25-EnergyInfrastructureWatchtower/

├── backend/
│
├── frontend/
│
├── README.md
├── VAR_REPORT.md
└── UAT_CHECKLIST.md
```

---

# Backend Setup

Navigate to backend:

```bash
cd backend
```

Create virtual environment:

```bash
python -m venv .venv
```

Activate environment:

```bash
.venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run backend:

```bash
uvicorn app.main:app --reload
```

Backend URL:

```text
http://localhost:8000
```

API Documentation:

```text
http://localhost:8000/docs
```

---

# Frontend Setup

Navigate to frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run frontend:

```bash
npm run dev
```

Frontend URL:

```text
http://localhost:3000
```

Dashboard Route:

```text
http://localhost:3000/dashboard
```

---



# AI Usage Summary

AI assistance was used during development for:

* Architecture planning
* UI/UX refinement
* FastAPI endpoint generation
* React component development
* Data transformation logic
* Dashboard optimization
* Documentation generation

All implementation decisions, testing, debugging, integration, and final validation were performed manually.

---

# Current Status

Phase 1 Complete

Implemented:

* Global Infrastructure Map
* Outage Intelligence
* Fuel Mix Analytics
* Emissions Monitoring
* Intelligence Sidebar
* Risk Intelligence
* AI Explanation Panel
* Filtering System
* JSON Data Export

---

# Future Enhancements

* Real-time outage feeds
* Live grid telemetry
* Infrastructure risk forecasting
* AI-powered anomaly detection
* Predictive outage intelligence
* Asset clustering for large datasets
* Regional grid health forecasting



