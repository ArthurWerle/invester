"use client";

import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { ComponentProps } from "./page";
import { getStrategy } from './configLoader'
const { INVESTMENTS_STRATEGY } = getStrategy()

ChartJS.register(ArcElement, Tooltip, Legend);


const calculateInvestments = (totalAmount: number) => {
  if (!isNaN(totalAmount)) {
    return Object.keys(INVESTMENTS_STRATEGY).map((key: string) => {
      return {
        label: INVESTMENTS_STRATEGY[key].label,
        value: totalAmount * INVESTMENTS_STRATEGY[key].percentage,
        color: INVESTMENTS_STRATEGY[key].color,
      }
    })
  }

  return []
};

export function InvestmentsDistribution({ totalAmount }: ComponentProps) {
  const investments = calculateInvestments(totalAmount)

  const chartData = {
    labels: investments.map((investment) => investment.label),
    datasets: [
      {
        label: "R$",
        data: investments.map((investment) => investment.value),
        borderWidth: 1,
        backgroundColor: investments.map((investment) => investment.color),
      },
    ],
  }

  return (
    <main className="flex flex-col items-center justify-between">
      <Pie data={chartData} />
    </main>
  )
}
