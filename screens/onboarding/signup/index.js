import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../../../components/header";
import SignupForm from "../../../components/signup-form";

const Signup = () => {
  return (
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
      <View style={{ flex: 1 }}>
        <Header title="Sign Up" />
      </View>
      <View style={{ flex: 5, justifyContent: "center" }}>
        <SignupForm />
      </View>
    </SafeAreaView>
  );
};

export default Signup;
