import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../../../components/header";
import Button from "../../../components/util/button";
import Input from "../../../components/util/text-input";
import { typography } from "../../../theme";

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
      <View style={{ flex: 1 }}>
        <Header title="Forgot Password" />
      </View>
      <View style={{ flex: 5 }}>
        <Text style={[typography["text-2xl"]]}>Don't worry</Text>
        <Text style={[typography["text-2xl"]]}>
          Enter your email and we'll send you a link to reset your password
        </Text>
        <View style={{ marginTop: 32 }}>
          <Input placeholder="Email" />
        </View>
        <View style={{ marginTop: 24 }}>
          <Button
            primary
            title="Continue"
            onPress={() => navigation.navigate("PasswordReset")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;
