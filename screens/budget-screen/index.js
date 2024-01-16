import React from "react";
import { FlatList, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from '@expo/vector-icons';

import { colors, typography } from "../../theme";
import Button from "../../components/util/button";
import { budgets } from "../../mocks";
import { capitalize } from '../../util';

const NoBudgets = () => (
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
);

const BudgetCard = ({ item }) => {
  const { id, spent, limit, color, category } = item;
  const overspent = spent >= limit;
  const remainingBudget = overspent ? 0 : limit - spent;
  const percentageSpent = overspent ? 100 : (spent / limit) * 100;

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('BudgetDetail')}
      key={id}
      style={{
        padding: 16,
        borderRadius: 20,
        backgroundColor: 'white',
        marginBottom: 16
      }}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}>
        <View style={{
          borderWidth: 1,
          borderColor: colors["gray-400"],
          padding: 8,
          borderRadius: 20,
          backgroundColor: colors["gray-100"],
          flexDirection: 'row',
          alignItems: 'center'
        }}>
          <View style={{ width: 15, height: 15, backgroundColor: color, marginRight: 8, borderRadius: 10 }} />
          <Text>{capitalize(category)}</Text>
        </View>
        {overspent && <FontAwesome name="exclamation-circle" size={24} color="red" />}
      </View>
      <View style={{
        marginTop: 16
      }}>
        <Text style={[typography["text-2xl"]]}>Remaining ${remainingBudget}</Text>
        <View style={{
          marginTop: 4,
          height: 16,
          width: '100%',
          backgroundColor: colors["gray-200"],
          borderRadius: 10
        }}>
          <View style={{
            height: 16,
            width: `${percentageSpent}%`,
            backgroundColor: color,
            borderRadius: 10
          }}>
          </View>
        </View>
        <Text style={[{
          color: colors["gray-400"],
          marginTop: 8
        }, typography["text-base"]]}>${spent} of ${limit}</Text>
        {
          overspent && <Text style={{
            color: 'red',
            marginTop: 8
          }}>You've exceeded the limit</Text>
        }
      </View>
    </TouchableOpacity>
  );
}

const BudgetScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: budgets.length > 0 ? colors["gray-50"] : 'white',
      padding: 16
    }}>
      {
        budgets.length > 0 ? (
          <FlatList
            data={budgets}
            style={{
              flex: 1
            }}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <BudgetCard item={item} />}
          />
        ) : <NoBudgets />
      }

      <Button onPress={() => navigation.navigate("AddBudget")} primary title="Create a budget" />
    </SafeAreaView>
  );
};

export default BudgetScreen;
