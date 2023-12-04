export interface TransactionStatusProps {
  data: TransactionStatusItem[];
}

export interface TransactionStatusItem {
  label: string;
  value: number;
  color: string;
  percentage: number;
}
