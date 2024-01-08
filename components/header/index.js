import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Pressable } from "react-native";

import styles from "./styles";

const Header = ({ title, textColor = "black", rightIcon = null }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <Pressable onPress={() => navigation.goBack()} style={{}}>
          <AntDesign name="arrowleft" size={32} color={textColor} />
        </Pressable>
      </View>
      <View>
        <Text style={[styles.title, { color: textColor }]}>{title}</Text>
      </View>
      <View>
        {rightIcon}
      </View>
    </View>
  );
};

export default Header;
