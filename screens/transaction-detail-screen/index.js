import {
  View,
  StatusBar,
  Pressable} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from '@expo/vector-icons';

import Header from "../../components/header";
import theme, {  } from "../../theme";
import TransactionOverview from "./transaction-overview";
import TransactionAccountOverview from "./transaction-account-overview";
import OtherDetails from "./other-details";
import Button from "../../components/util/button";

const TransactionDetailScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white'
      }}
    >
      <StatusBar barStyle="auto" />
      <View style={{ backgroundColor: theme.colors.primary, borderRadius: 30 }}>
        <SafeAreaView style={{
          padding: 16
        }}>
          <Header
            title="Transaction Detail"
            textColor="white"
            rightIcon={
              <Pressable>
                <AntDesign name="delete" size={24} color="white" />
              </Pressable>
            }
          />
          <TransactionOverview />
        </SafeAreaView>
      </View>
      <TransactionAccountOverview />
      <OtherDetails />
      <View style={{ paddingTop: 0, padding: 16, justifyContent: "flex-end", marginBottom: 8 }}>
        <Button onPress={() => {}} title="Edit" primary />
      </View>
    </View>
  )
}

export default TransactionDetailScreen;