import { Text, TouchableOpacity } from "react-native";

import styles from "./styles";
import theme from "../../../theme";

const Button = ({ primary = false, title, containerStyles, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button(primary ? "indigo-700" : "indigo-100"),
        containerStyles,
      ]}
    >
      <Text style={styles.buttonText(primary ? "white" : theme.colors.primary)}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
