import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Button from "../../../components/util/button";
import { typography } from "../../../theme";

const AccountSetupScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, padding: 16, marginTop: 32 }}>
      <Text style={[typography["text-4xl"]]}>Let's setup your account!</Text>
      <Text
        style={[
          {
            marginTop: 32,
          },
          typography["text-md"],
        ]}
      >
        Account can be your bank, credit card or your wallet
      </Text>
      <View style={{ flex: 1, marginTop: 24, justifyContent: "flex-end" }}>
        <Button
          primary
          title="Continue"
          onPress={() => navigation.navigate("AddAccount")}
        />
      </View>
    </SafeAreaView>
  );
};

export default AccountSetupScreen;
