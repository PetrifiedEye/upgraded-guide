export enum RootStackPages {
  Home = "[Root] Home",
  Dashboard = "[Root] Dashboard",
  TransactionsState = "[Root] TransactionsState",
  IssuersExpenses = "[Root] IssuersExpenses",
  DateExpenses = "[Root] DateExpenses",
}

export type RootStackParamList = {
  [RootStackPages.Home]: undefined;
  [RootStackPages.Dashboard]: undefined;
  [RootStackPages.TransactionsState]: undefined;
  [RootStackPages.IssuersExpenses]: undefined;
  [RootStackPages.DateExpenses]: undefined;
};
