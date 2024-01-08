import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";

import styles from "./styles";
import theme, { typography } from "../../theme";
import Button from "../util/button";
import SecureInput from "../util/secure-input";
import Input from "../util/text-input";

const LoginForm = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <Input placeholder="Email" styles={{ marginBottom: 16 }} />
        <SecureInput placeholder="Password" />
        <View style={{ marginTop: 24 }}>
          <Button
            primary
            title="Login"
            onPress={() => navigation.navigate("AccountSetup")}
          />
        </View>
        <View style={{ alignItems: "center", marginTop: 32 }}>
          <Text
            style={[
              {
                color: theme.colors.primary,
              },
              typography["text-lg"],
              typography["font-semibold"],
            ]}
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            Forgot Password?
          </Text>
        </View>
        <View style={{ alignItems: "center", marginTop: 32 }}>
          <Text style={styles.loginText}>
            Don't have an account yet?{" "}
            <Text
              style={{ color: theme.colors.primary }}
              onPress={() => navigation.navigate("Signup")}
            >
              Sign Up
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default LoginForm;
