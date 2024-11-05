import { Strategy, Investment } from "./types";

// Modify below with you're strategy!
// This is just an example of a strategy, please don't take this as an advice for anything!

export const INCOME_STRATEGY: Strategy = {
  investments: {
      percentage: 0.25,
      label: "Invest",
      color: "rgb(141, 217, 126)",
  },
  costOfLiving: {
      percentage: 0.5,
      label: "Cost of living",
      color: "rgb(126, 151, 214)",
  },
  consumables: {
      percentage: 0.25,
      label: "Future plans and plesaures",
      color: "rgb(36, 3, 252)",
  },
};


export const INVESTMENTS_STRATEGY: { [key: string]: Investment } = {
  treasure: {
    percentage: 0.5,
    label: "Treasure",
    color: "rgb(141, 217, 126)",
  },
  stocks: {
    percentage: 0.2,
    label: "Stocks",
    color: "rgb(126, 151, 214)",
  },
  bonds: {
    percentage: 0.02,
    label: "Bonds",
    color: "rgb(196, 61, 83)",
  },
  bitcoin: {
    percentage: 0.1,
    label: "Bitcoin",
    color: "rgb(222, 118, 58)",
  },
};