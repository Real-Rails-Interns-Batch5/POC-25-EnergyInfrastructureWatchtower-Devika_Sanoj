import pandas as pd
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent


def get_dashboard_metrics():

    fuel_path = BASE_DIR / "data" / "fuel_mix.csv"
    emissions_path = BASE_DIR / "data" / "emissions.csv"

    fuel_df = pd.read_csv(fuel_path)
    emissions_df = pd.read_csv(emissions_path)

    renewable_share = fuel_df[
        fuel_df["fuel"].isin(
            ["Solar", "Wind", "Hydro"]
        )
    ]["share"].sum()

    avg_emissions = emissions_df["co2_mt"].mean()

    return {
        "headline_metric": {
            "value": f"{renewable_share:.1f}%",
            "label": "Renewable Share"
        },

        "regional_delta": {
            "value": "+8.2%",
            "description": "Above National Average"
        },

        "outage_risk": "Moderate",

        "emission_trend": "Declining",

        "average_emissions": round(avg_emissions, 2),

        "risk_scores": [
            {
                "region": "India",
                "score": 78,
                "level": "High",
                "ai_explanation":
                    "Rapid demand growth and transmission congestion increase outage exposure."
            },
            {
                "region": "Japan",
                "score": 52,
                "level": "Medium",
                "ai_explanation":
                    "Strong infrastructure but aging assets require modernization."
            },
            {
                "region": "Germany",
                "score": 46,
                "level": "Medium",
                "ai_explanation":
                    "Renewable integration introduces balancing complexity."
            },
            {
                "region": "France",
                "score": 35,
                "level": "Low",
                "ai_explanation":
                    "Stable generation capacity supports reliability."
            },
            {
                "region": "UK",
                "score": 42,
                "level": "Low",
                "ai_explanation":
                    "Grid modernization continues to reduce risk."
            }
        ],

        "energy_flows": [
            {
                "from": "Mumbai",
                "to": "Delhi"
            },
            {
                "from": "Delhi",
                "to": "Bengaluru"
            },
            {
                "from": "Tokyo",
                "to": "Osaka"
            },
            {
                "from": "Berlin",
                "to": "Paris"
            },
            {
                "from": "Paris",
                "to": "London"
            }
        ]
    }