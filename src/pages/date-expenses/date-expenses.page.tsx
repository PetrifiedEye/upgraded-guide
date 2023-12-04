import { SafeAreaView } from "react-native-safe-area-context";
import { LineChart } from "../../components/line-chart";
import { useDateExpenses } from "../../shared/hooks/use-date-expenses";

const DateExpensesPage: React.FC = () => {
  const { dateExpenses, maxValue } = useDateExpenses();

  return (
    <SafeAreaView>
      <LineChart data={dateExpenses} maxValue={maxValue} />
    </SafeAreaView>
  );
};

export default DateExpensesPage;
