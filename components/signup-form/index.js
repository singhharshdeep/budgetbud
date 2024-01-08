import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./styles";
import TermsAndConditions from "./terms-and-conditions";
import theme, { colors } from "../../theme";
import Button from "../util/button";
import SecureInput from "../util/secure-input";
import Input from "../util/text-input";

const SignupForm = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <Input placeholder="Name" />
        <Input placeholder="Email" styles={{ marginVertical: 16 }} />
        <SecureInput placeholder="Password" />
        <TermsAndConditions />
        <View style={{ marginTop: 24 }}>
          <Button
            primary
            title="Sign Up"
            onPress={() => navigation.navigate("AccountSetup")}
          />
          <Text style={styles.orWith}>or with</Text>
          <TouchableOpacity style={styles.googleButton}>
            <AntDesign
              style={{ paddingHorizontal: 8 }}
              name="google"
              size={24}
              color={colors["gray-600"]}
            />
            <Text style={styles.googleText}>Sign Up with Google</Text>
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center", marginTop: 16 }}>
          <Text style={styles.loginText}>
            Already have an account?{" "}
            <Text
              style={{ color: theme.colors.primary }}
              onPress={() => navigation.navigate("Login")}
            >
              Login
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SignupForm;
