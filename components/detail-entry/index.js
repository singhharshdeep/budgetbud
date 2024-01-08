import {
  View,
  Text,
  StatusBar,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../../components/header";
import Button from "../../components/util/button";
import { typography } from "../../theme";

const DetailEntry = ({
  title,
  balanceLabel,
  children,
  flexValue,
  backgroundColor,
  onButtonPress,
}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{
        backgroundColor,
        flex: 1,
      }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <SafeAreaView
          style={{
            flex: 7,
            padding: 16,
            paddingBottom: 0,
          }}
        >
          <StatusBar barStyle="auto" />
          <View style={{ flex: 1 }}>
            <Header title={title} textColor="white" />
          </View>
          <Text
            style={[
              {
                color: "white",
                opacity: 0.6,
              },
              typography["text-lg"],
            ]}
          >
            {balanceLabel}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "white", fontSize: 72 }}>$</Text>
            <TextInput
              keyboardType="decimal-pad"
              style={{ fontSize: 72, color: "white" }}
              placeholder="0.00"
              placeholderTextColor="white"
            />
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
      <View
        style={{
          flex: flexValue,
          backgroundColor: "white",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          padding: 16,
        }}
      >
        {children}
        <View style={{ flex: 1, justifyContent: "flex-end", marginBottom: 8 }}>
          <Button onPress={onButtonPress} title="Continue" primary />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default DetailEntry;
