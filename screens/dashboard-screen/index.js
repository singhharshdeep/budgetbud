import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import FloatingActionButton from "../../components/floating-action-button";
import theme, { colors } from "../../theme";
import BudgetScreen from "../budget-screen";
import HomeScreen from "../home-screen";
import ProfileScreen from "../profile-screen";
import TransactionScreen from "../transaction-screen";

const Tab = createBottomTabNavigator();

const DashboardScreen = () => {
  const screenOptions = {
    headerShown: false,
    tabBarActiveTintColor: theme.colors.primary,
    tabBarInactiveTintColor: colors["gray-400"],
    tabBarStyle: {
      backgroundColor: colors["gray-200"],
    },
  };

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, size }) =>
            focused ? (
              <Ionicons
                name="md-home"
                size={size}
                color={theme.colors.primary}
              />
            ) : (
              <Ionicons
                name="md-home-sharp"
                size={size}
                color={colors["gray-400"]}
              />
            ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, size }) => (
            <MaterialCommunityIcons
              name="swap-horizontal-bold"
              size={size}
              color={focused ? theme.colors.primary : colors["gray-400"]}
            />
          ),
        }}
        name="Transaction"
        component={TransactionScreen}
      />
      <Tab.Screen
        options={{
          tabBarStyle: {
            backgroundColor: "white",
          },
          tabBarButton: () => <FloatingActionButton />,
        }}
        name="Add"
        component={TransactionScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, size }) =>
            focused ? (
              <Ionicons
                name="pie-chart"
                size={size}
                color={theme.colors.primary}
              />
            ) : (
              <Ionicons
                name="pie-chart-outline"
                size={size}
                color={colors["gray-400"]}
              />
            ),
        }}
        name="Budget"
        component={BudgetScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, size }) =>
            focused ? (
              <Ionicons
                name="person"
                size={size}
                color={theme.colors.primary}
              />
            ) : (
              <Ionicons
                name="person-outline"
                size={size}
                color={colors["gray-400"]}
              />
            ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default DashboardScreen;
