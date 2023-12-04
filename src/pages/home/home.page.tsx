import { SafeAreaView } from "react-native-safe-area-context";
import * as Styled from "./home.styles";
import { Dashboard } from "../../components/dashboard";
import { useMemo, useState } from "react";
import { getData } from "../../shared/utils/get-data";
import { shadow } from "../../shared/constants";
import { useNavigation } from "@react-navigation/native";
import {
  RootStackPages,
  RootStackParamList,
} from "../../navigation/navigation.types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useTheme } from "styled-components/native";
import { TransactionState } from "../../components/transaction-status";
import { PieItem } from "../../shared/types/data";
import { useTransactionState } from "../../shared/hooks/use-transaction-state";
import { useIssuerExpenses } from "../../shared/hooks/use-issuer-expenses";
import { PieChart } from "../../components/pie-chart";
import { LineChart } from "../../components/line-chart";
import { useDateExpenses } from "../../shared/hooks/use-date-expenses";

type HomeNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  RootStackPages.Dashboard
>;

const Home: React.FC = () => {
  const [data] = useState(() => getData().slice(0, 5));
  const { transactionStateData } = useTransactionState();
  const { pieData, total } = useIssuerExpenses();
  const { dateExpenses, maxValue } = useDateExpenses();

  const navigation = useNavigation<HomeNavigationProp>();

  const handleSeeMoreEntries = () => {
    navigation.navigate(RootStackPages.Dashboard);
  };

  return (
    <SafeAreaView>
      <Styled.ScrollContainer showsVerticalScrollIndicator={false}>
        <Styled.Title>Hello!</Styled.Title>
        <Styled.Space value={20} />
        <Styled.Card style={shadow}>
          <Styled.CardTitle>Actual</Styled.CardTitle>
          <Dashboard scroll={false} data={data} />
          <Styled.AlignEnd>
            <Styled.TouchableText onPress={handleSeeMoreEntries}>
              See more
            </Styled.TouchableText>
          </Styled.AlignEnd>
        </Styled.Card>
        <Styled.Space value={40} />
        <Styled.Card style={shadow}>
          <Styled.CardTitle>Transaction Status</Styled.CardTitle>
          <TransactionState data={transactionStateData} />
          <Styled.Space value={10} />
        </Styled.Card>
        <Styled.Space value={40} />
        <Styled.Card style={shadow}>
          <Styled.CardTitle>Expenses</Styled.CardTitle>
          <PieChart data={pieData} total={total} />
        </Styled.Card>
        <Styled.Space value={40} />
        <Styled.Card style={shadow}>
          <Styled.CardTitle>Expenses</Styled.CardTitle>
          <LineChart data={dateExpenses} maxValue={maxValue} />
        </Styled.Card>
      </Styled.ScrollContainer>
    </SafeAreaView>
  );
};

export default Home;
