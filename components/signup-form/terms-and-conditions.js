import Checkbox from "expo-checkbox";
import { View, Text, Linking } from "react-native";

import styles from "./styles";

const TermsAndConditions = () => {
  return (
    <View style={styles.tAndCContainer}>
      <Checkbox style={styles.checkbox} />
      <Text>
        By signing up, you agree to the{" "}
        <Text
          style={styles.checkboxText}
          onPress={() => Linking.openURL("http://www.google.com")}
        >
          Terms of Service and Privacy Policy
        </Text>
      </Text>
    </View>
  );
};

export default TermsAndConditions;
