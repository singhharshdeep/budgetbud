import { View, Text } from "react-native";

import styles from "./styles";
import BackButton from "../../components/header/back-button";
import { SafeAreaView } from "react-native-safe-area-context";

const Header = ({ title, textColor = "black", rightIcon }) => (
  <SafeAreaView style={styles.container}>
    <BackButton textColor={textColor} />
    <View style={{ alignItems: 'center', flexBasis: '50%' }}>
      <Text style={[styles.title, { color: textColor }]}>{title}</Text>
    </View>
    <View style={{ flexBasis: '25%', alignItems: 'flex-end' }}>
      {rightIcon}
    </View>
  </SafeAreaView>
);

export default Header;
