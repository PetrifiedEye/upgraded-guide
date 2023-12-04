import { useMemo, useState } from "react";
import { getData } from "../utils/get-data";
import { PieItem } from "../types/data";

export const useIssuerExpenses = () => {
  const [data] = useState(() => getData());

  const { pieData, total } = useMemo(() => {
    const total = data.reduce((acc, item) => acc + item.amount, 0).toFixed(2);
    const issuers = data.reduce((acc, item) => {
      if (acc[item.issuer]) {
        acc[item.issuer] += item.amount;
      } else {
        acc[item.issuer] = item.amount;
      }
      return acc;
    }, {} as Record<string, number>);

    const pieData = Object.entries(issuers).map(
      ([label, value]) =>
        ({
          label,
          value,
        } as PieItem)
    );
    return { pieData, total };
  }, [data]);

  return { pieData, total };
};
