import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "./header";
import Transactions from "../../components/transactions";

const TransactionScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, padding: 16, backgroundColor: 'white' }}>
      <Header />
      <Transactions />
    </SafeAreaView>
  );
};

export default TransactionScreen;
