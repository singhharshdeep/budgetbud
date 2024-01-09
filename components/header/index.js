import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Pressable } from "react-native";

import styles from "./styles";
import BackButton from "./back-button";

const Header = ({ title, textColor = "black", rightIcon }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <BackButton textColor={textColor} />
      <View style={{ alignItems: 'center', flexBasis: '50%' }}>
        <Text style={[styles.title, { color: textColor }]}>{title}</Text>
      </View>
      <View style={{ flexBasis: '25%', alignItems: 'flex-end' }}>
        {rightIcon}
      </View>
    </View>
  );
};

export default Header;
