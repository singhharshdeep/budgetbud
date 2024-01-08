import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AddTransactionScreen from "./screens/add-transaction-screen";
import DashboardScreen from "./screens/dashboard-screen";
import LaunchScreen from "./screens/launch-screen";
import AccountSetupScreen from "./screens/onboarding/account-setup-screen";
import AddAccountScreen from "./screens/onboarding/add-account-screen";
import ForgotPasswordScreen from "./screens/onboarding/forgot-password-screen";
import Login from "./screens/onboarding/login";
import PasswordResetScreen from "./screens/onboarding/password-reset-screen";
import Signup from "./screens/onboarding/signup";
import SuccessScreen from "./screens/onboarding/success-screen";
import WelcomeScreen from "./screens/onboarding/welcome-screen";
import TransactionDetailScreen from "./screens/transaction-detail-screen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* <Stack.Screen name="Launch" component={LaunchScreen} />
        <Stack.Screen name="Welcome" options={{ gestureEnabled: false }} component={WelcomeScreen} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="PasswordReset" component={PasswordResetScreen} />
        <Stack.Screen name="AccountSetup" options={{ gestureEnabled: false }} component={AccountSetupScreen} />
        <Stack.Screen name="AddAccount" component={AddAccountScreen} />
        <Stack.Screen name="Success" component={SuccessScreen} /> */}
        <Stack.Screen name="Dashboard" options={{ gestureEnabled: false }}  component={DashboardScreen} />
        <Stack.Screen name="AddTransaction" component={AddTransactionScreen} />
        <Stack.Screen name="TransactionDetail" component={TransactionDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
