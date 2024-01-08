import { SafeAreaView } from "react-native-safe-area-context";

import AccountBalance from "./account-balance";
import BudgetCards from "./budget-cards";
import Header from "./header";
import RecentTransactions from "./recent-transactions";
import SpendingTrends from "./spending-trends";

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white", padding: 16 }}>
      <Header />
      <AccountBalance />
      <BudgetCards />
      <SpendingTrends />
      <RecentTransactions />
    </SafeAreaView>
  );
};

export default HomeScreen;
