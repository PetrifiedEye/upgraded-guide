import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DashboardPage } from "../pages/dashboard";
import { HomePage } from "../pages/home";
import { RootStackPages, RootStackParamList } from "./navigation.types";
import { TransactionPage } from "../pages/transactions-state";
import IssuersExpensesPage from "../pages/issuers-expenses/issuers-expenses.page";
import { DateExpensesPage } from "../pages/date-expenses";
import { createDrawerNavigator } from "@react-navigation/drawer";

const RootStack = createDrawerNavigator<RootStackParamList>();

const Root: React.FC = () => {
  return (
    <RootStack.Navigator initialRouteName={RootStackPages.Home}>
      <RootStack.Screen
        options={{
          title: "Home",
        }}
        name={RootStackPages.Home}
        component={HomePage}
      />
      <RootStack.Screen
        options={{
          title: "Dashboard",
        }}
        name={RootStackPages.Dashboard}
        component={DashboardPage}
      />
      <RootStack.Screen
        options={{
          title: "Transactions state",
        }}
        name={RootStackPages.TransactionsState}
        component={TransactionPage}
      />
      <RootStack.Screen
        options={{
          title: "Issuers expenses",
        }}
        name={RootStackPages.IssuersExpenses}
        component={IssuersExpensesPage}
      />
      <RootStack.Screen
        options={{
          title: "Date expenses",
        }}
        name={RootStackPages.DateExpenses}
        component={DateExpensesPage}
      />
    </RootStack.Navigator>
  );
};

export default Root;
