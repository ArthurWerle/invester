"use client";

import { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

type ChartProps = {
  totalAmount: number;
};

interface Investment {
  percentage: number;
  label: string;
  color: string;
}

interface Strategy {
  [key: string]: Investment;
}

const STRATEGY: Strategy = {
  treasure: {
    percentage: 0.5,
    label: "Renda Fixa",
    color: "rgb(141, 217, 126)",
  },
  stocks: {
    percentage: 0.3,
    label: "Ações",
    color: "rgb(126, 151, 214)",
  },
  fiis: {
    percentage: 0.1,
    label: "Fundos Imobiliários",
    color: "rgb(196, 61, 83)",
  },
  bitcoin: {
    percentage: 0.1,
    label: "Bitcoin",
    color: "rgb(222, 118, 58)",
  },
};

const calculateInvestments = (totalAmount: number) => {
  if (!isNaN(totalAmount)) {
    return Object.keys(STRATEGY).map((key: string) => {
      return {
        label: STRATEGY[key].label,
        value: totalAmount * STRATEGY[key].percentage,
        color: STRATEGY[key].color,
      };
    });
  }

  return [];
};

export function Chart({ totalAmount }: ChartProps) {
  const investments = calculateInvestments(totalAmount);

  const chartData = {
    labels: investments.map((investment) => investment.label),
    datasets: [
      {
        label: "Porcentagem",
        data: investments.map((investment) => investment.value),
        borderWidth: 1,
        backgroundColor: investments.map((investment) => investment.color),
      },
    ],
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Pie data={chartData} />
    </main>
  );
}
