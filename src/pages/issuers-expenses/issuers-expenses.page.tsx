import { SafeAreaView } from "react-native-safe-area-context";
import { PieChart } from "../../components/pie-chart";
import { useIssuerExpenses } from "../../shared/hooks/use-issuer-expenses";

const IssuersExpensesPage: React.FC = () => {
  const { pieData, total } = useIssuerExpenses();

  return (
    <SafeAreaView>
      <PieChart data={pieData} total={total} />
    </SafeAreaView>
  );
};

export default IssuersExpensesPage;
