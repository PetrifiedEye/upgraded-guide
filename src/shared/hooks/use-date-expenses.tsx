import { useState } from "react";
import { getData } from "../utils/get-data";
import { DateLabel } from "../../components/date-label";
import { format } from "date-fns";

export const useDateExpenses = () => {
  const [data] = useState(() => getData());

  const dateExpenses = data.map((item) => {
    const [year, month, day] = item.date.split("-") as [string, string, string];
    const date = format(new Date(+year, +month, +day), "MMM dd");
    return {
      value: item.amount,
      labelComponent: () => <DateLabel date={date} />,
    };
  }, []);

  const maxValue = Math.max(...data.map((item) => item.amount));

  return { dateExpenses, maxValue };
};
