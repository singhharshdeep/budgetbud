import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors, typography } from "../../theme";
import Button from "../../components/util/button";
import { useNavigation } from "@react-navigation/native";

const BudgetScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: 'white',
      padding: 16
    }}>
      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
      }}>
        <Text style={[{
          color: colors["gray-400"]
        }, typography["text-md"]]}>You don't have a budget created</Text>        
        <Text style={[{
          color: colors["gray-400"]
        }, typography["text-md"]]}>Create one to put yourself in control</Text>        
      </View>
      <Button onPress={() => navigation.navigate("AddBudget")} primary title="Create a budget" />
    </SafeAreaView>
  );
};

export default BudgetScreen;
