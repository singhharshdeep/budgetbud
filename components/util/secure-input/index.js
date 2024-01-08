import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, TextInput, View } from "react-native";

import styles from "./styles";
import { colors } from "../../../theme";

const SecureInput = ({ placeholder }) => {
  const [passwordHidden, setPasswordHidden] = useState(true);

  return (
    <View style={styles.secureTextContainer}>
      <View style={{ flex: 10 }}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={colors["gray-500"]}
          secureTextEntry={passwordHidden}
        />
      </View>
      <Pressable
        onPress={() => setPasswordHidden(!passwordHidden)}
        style={{ flex: 1 }}
      >
        {passwordHidden ? (
          <Feather name="eye" size={18} color={colors["gray-500"]} />
        ) : (
          <Feather name="eye-off" size={18} color={colors["gray-500"]} />
        )}
      </Pressable>
    </View>
  );
};

export default SecureInput;
