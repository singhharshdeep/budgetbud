import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../../../components/header";
import Button from "../../../components/util/button";
import Input from "../../../components/util/text-input";

const PasswordResetScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
      <View style={{ flex: 1 }}>
        <Header title="Reset Password" />
      </View>
      <View style={{ flex: 5 }}>
        <View style={{ marginTop: 32 }}>
          <Input placeholder="New Password" />
        </View>
        <View style={{ marginTop: 32 }}>
          <Input placeholder="Retype New Password" />
        </View>
        <View style={{ marginTop: 24 }}>
          <Button primary title="Continue" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PasswordResetScreen;
