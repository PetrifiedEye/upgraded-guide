export type State = "open" | "rejected" | "overdue";

export interface DataItem {
  date: string;
  issuer: string;
  amount: number;
  recipe: boolean;
  state: State;
}

export interface PieItem {
  label: string;
  value: number;
}

export interface LineChartItem {
  value: number;
  labelComponent: () => React.JSX.Element;
}
