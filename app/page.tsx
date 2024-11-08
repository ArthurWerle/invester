"use client";

import { INCOME_STRATEGY } from "../config";
import { InvestmentsDistribution } from "./investments-distribution";
import { SalaryDistribution } from "./salary-distribution"
import { useState } from "react";

enum StepType {
  SalaryDistribution = 'SalaryDistribution',
  InvestmentsDistribution = 'InvestmentsDistribution'
}

const STEP_LABEL = {
  [StepType.InvestmentsDistribution]: 'This is your investments division',
  [StepType.SalaryDistribution]: 'How much was your income?'
}

const COMPONENTS = {
  [StepType.InvestmentsDistribution]: InvestmentsDistribution,
  [StepType.SalaryDistribution]: SalaryDistribution,
}

export type ComponentProps = {
  totalAmount: number;
};

type StepsProps = {
  step: StepType
} & ComponentProps

function Steps({ step, ...otherProps }: StepsProps) {
  const StepComponent = COMPONENTS[step]

  return <StepComponent {...otherProps} />
}

export default function Home() {
  const [value, setValue] = useState<number | undefined>()
  const [totalAmount, setTotalAmount] = useState<number>()

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && value) {
      setTotalAmount(value);
    }
  };

  const hasValue = totalAmount !== undefined && totalAmount > 0;
  const investmentsAmount = hasValue ? totalAmount * INCOME_STRATEGY.investments.percentage : 0

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div>
        <h2>{STEP_LABEL[StepType.SalaryDistribution]}</h2>
        <input
          className="text-slate-500"
          type="number"
          onKeyPress={handleKeyPress}
          value={value || ""}
          onChange={(e) => setValue(parseFloat(e.target.value))}
        />
      </div>

      {hasValue ? (
        <div className="flex gap-6 mt-20">
          <Steps totalAmount={totalAmount} step={StepType.SalaryDistribution} />

          <Steps totalAmount={investmentsAmount} step={StepType.InvestmentsDistribution} />
        </div>
      ) : null}
    </main>
  );
}
