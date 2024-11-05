export type Strategy = {
  [key: string]: Investment
  investments: Investment
}

export type Investment = {
  percentage: number
  label: string
  color: string
}