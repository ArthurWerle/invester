"use client"

import { Pie } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { INCOME_STRATEGY } from "./config"

ChartJS.register(ArcElement, Tooltip, Legend)

type ChartProps = {
  totalAmount: number
}

const calculateInvestments = (totalAmount: number) => {
  if (!isNaN(totalAmount)) {
    return Object.keys(INCOME_STRATEGY).map((key: string) => {
      return {
        label: INCOME_STRATEGY[key].label,
        value: totalAmount * INCOME_STRATEGY[key].percentage,
        color: INCOME_STRATEGY[key].color,
      }
    })
  }

  return []
}

const chartConfig = {
  responsive: true,
}

export function SalaryDistribution({ totalAmount }: ChartProps) {
  const investments = calculateInvestments(totalAmount)

  const chartData = {
    labels: investments.map((investment) => investment.label),
    config: chartConfig,
    datasets: [
      {
        label: "$",
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
