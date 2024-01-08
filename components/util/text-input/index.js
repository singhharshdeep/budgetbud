import { TextInput, View } from "react-native";

import defaultStyles from "./styles";
import { colors } from "../../../theme";

const Input = ({ placeholder, styles }) => {
  return (
    <View style={[defaultStyles.textInputContainer, styles]}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={colors["gray-500"]}
      />
    </View>
  );
};

export default Input;
