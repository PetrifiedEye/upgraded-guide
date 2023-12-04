import { SafeAreaView } from "react-native-safe-area-context";
import { TransactionState } from "../../components/transaction-status";
import { useTransactionState } from "../../shared/hooks/use-transaction-state";

const TransactionPage: React.FC = () => {
  const { transactionStateData } = useTransactionState();

  return (
    <SafeAreaView>
      <TransactionState data={transactionStateData} />
    </SafeAreaView>
  );
};

export default TransactionPage;
