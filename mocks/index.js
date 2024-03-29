import {
  Entypo,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import theme, { colors } from "../theme";

export const categories = [
  {
    id: 1,
    label: "Shopping",
    value: "shopping",
  },
  {
    id: 2,
    label: "Subscription",
    value: "subscription",
  },
  {
    id: 3,
    label: "Food",
    value: "food",
  },
  {
    id: 4,
    label: "Salary",
    value: "salary",
  },
];

export const accountTypes = [
  {
    id: 1,
    label: "Bank",
    value: "bank",
  },
  {
    id: 2,
    label: "Credit Card",
    value: "credit-card",
  },
  {
    id: 3,
    label: "Wallet",
    value: "wallet",
  },
];

export const banks = [
  {
    id: 1,
    img: require("../assets/rbc.png"),
  },
  {
    id: 2,
    img: require("../assets/td.png"),
  },
  {
    id: 3,
    img: require("../assets/scotia.png"),
  },
  {
    id: 4,
    img: require("../assets/bmo.png"),
  },
  {
    id: 5,
    img: require("../assets/tangerine.jpeg"),
  },
  {
    id: 6,
    img: require("../assets/cibc.png"),
  },
  {
    id: 7,
    img: require("../assets/national.png"),
  },
  {
    id: 8,
    name: "Other",
    text: "Other",
  },
];

export const transactions = [
  {
    id: 1,
    category: "shopping",
    description: "Groceries",
    type: "expense",
    value: 120,
    time: "10:00 AM",
    icon: <Entypo name="shopping-bag" size={36} color={colors["yellow-400"]} />,
    color: colors["yellow-100"],
  },
  {
    id: 2,
    category: "subscription",
    description: "Disney+ Annual Subscription",
    type: "expense",
    value: 80,
    time: "03:30 PM",
    icon: (
      <MaterialIcons
        name="subscriptions"
        size={36}
        color={theme.colors.primary}
      />
    ),
    color: colors["indigo-100"],
  },
  {
    id: 3,
    category: "food",
    description: "Ramen",
    type: "expense",
    value: 32,
    time: "07:30 PM",
    icon: (
      <MaterialCommunityIcons
        name="silverware-fork-knife"
        size={36}
        color={colors["red-700"]}
      />
    ),
    color: "#fee2e2",
  },
];

export const graphData = [0, 1000, 2500, 2200, 2800, 2000];

export const frequency = [{
  id: 1,
  label: 'Daily',
  value: 'daily'
},
{
  id: 2,
  label: 'Weekly',
  value: 'weekly'
},
{
  id: 3,
  label: 'Monthly',
  value: 'monthly'
},
{
  id: 4,
  label: 'Yearly',
  value: 'yearly'
}];

export const accounts = [
  {
    id: 1,
    name: 'Scotiabank',
    balance: 9400,
    icon: <Image style={{ width: 30, height: 30 }} source={require('../assets/scotia.png')} />
  },
  {
    id: 2,
    name: 'TD',
    balance: 400,
    icon: <Image style={{ width: 30, height: 30 }} source={require('../assets/td.png')} />
  },
  {
    id: 3,
    name: 'Credit Card',
    balance: 200,
    icon: <FontAwesome name="credit-card-alt" size={24} color={theme.colors.primary} />
  }
];

export const budgets = [
  {
    id: 1,
    limit: 1000,
    spent: 1200,
    category: 'shopping',
    color: 'orange'
  },
  {
    id: 2,
    limit: 700,
    spent: 350,
    category: 'transportation',
    color: 'blue'
  }
];

export const exportTypes = [
  {
    id: 1,
    label: 'All',
    value: 'all'
  },
  {
    id: 2,
    label: 'Accounts',
    value: 'accounts'
  }
];

export const exportDateRange = [
  {
    id: 1,
    label: 'Last 7 days',
    value: 7
  },
  {
    id: 2,
    label: 'Last 30 days',
    value: 30
  }
];

export const exportFormat = [
  {
    id: 1,
    label: 'CSV',
    value: 'csv'
  },
  {
    id: 2,
    label: 'Excel',
    value: 'xlsx'
  }
];