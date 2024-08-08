"use client";

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

export const STRATEGY: Strategy = {
  investments: {
    percentage: 0.4,
    label: "Investir",
    color: "rgb(141, 217, 126)",
  },
  costOfLiving: {
    percentage: 0.4,
    label: "Custo de vida",
    color: "rgb(126, 151, 214)",
  },
  consumables: {
    percentage: 0.2,
    label: "Bens materiais",
    color: "rgb(36, 3, 252)",
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

const chartConfig = {
  responsive: true,
}

export function SalaryDistribution({ totalAmount }: ChartProps) {
  const investments = calculateInvestments(totalAmount);

  const chartData = {
    labels: investments.map((investment) => investment.label),
    config: chartConfig,
    datasets: [
      {
        label: "R$",
        data: investments.map((investment) => investment.value),
        borderWidth: 1,
        backgroundColor: investments.map((investment) => investment.color),
      },
    ],
  };

  return (
    <main className="flex flex-col items-center justify-between">
      <Pie data={chartData} />
    </main>
  );
}
