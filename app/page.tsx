"use client";

import { Chart } from "./chart";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState<number | undefined>();
  const [totalAmount, setTotalAmount] = useState<number>();

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && value) {
      setTotalAmount(value);
    }
  };

  const hasValue = totalAmount !== undefined && totalAmount > 0;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h2>Quanto você vai investir?</h2>
        <input
          className="text-slate-500"
          type="number"
          onKeyPress={handleKeyPress}
          value={value || ""}
          onChange={(e) => setValue(parseFloat(e.target.value))}
        />
      </div>

      {hasValue ? <Chart totalAmount={totalAmount} /> : null}
    </main>
  );
}
