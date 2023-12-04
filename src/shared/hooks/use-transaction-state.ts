import { useMemo, useState } from "react";
import { getData } from "../utils/get-data";
import { useTheme } from "styled-components/native";
import { TransactionStatusItem } from "../../components/transaction-status/transaction-status.types";

export const useTransactionState = (numberOfItems?: number) => {
  const {
    colors: { stateOverdue, stateOpen, stateRejected, white },
  } = useTheme();
  const [data] = useState(() => getData().slice(0, numberOfItems));

  const transactionStateData = useMemo(() => {
    const open = data.filter((item) => item.state === "open").length;
    const openPercentage = (open / data.length) * 100;
    const overdue = data.filter((item) => item.state === "overdue").length;
    const overduePercentage = (overdue / data.length) * 100;
    const rejected = data.filter((item) => item.state === "rejected").length;
    const rejectedPercentage = (rejected / data.length) * 100;

    const transactionStateData = [
      {
        label: "Open",
        value: open,
        color: stateOpen,
        percentage: openPercentage,
      },
      {
        label: "Overdue",
        value: overdue,
        color: stateOverdue,
        percentage: overduePercentage,
      },
      {
        label: "Rejected",
        value: rejected,
        color: stateRejected,
        percentage: rejectedPercentage,
      },
    ] as TransactionStatusItem[];

    return transactionStateData;
  }, [data, stateOpen, stateOverdue]);

  return { transactionStateData };
};
