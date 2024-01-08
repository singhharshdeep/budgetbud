import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";

import styles from "./styles";
import Button from "../util/button";

const AuthButtons = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Button
        primary
        title="Sign Up"
        onPress={() => navigation.navigate("Signup")}
      />
      <Button
        title="Login"
        containerStyles={{ marginTop: 16 }}
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
};

export default AuthButtons;
