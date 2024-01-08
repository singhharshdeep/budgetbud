import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../../../components/header";
import LoginForm from "../../../components/login-form";

const Login = () => {
  return (
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
      <View style={{ flex: 1 }}>
        <Header title="Login" />
      </View>
      <View style={{ flex: 5, justifyContent: "center" }}>
        <LoginForm />
      </View>
    </SafeAreaView>
  );
};

export default Login;
