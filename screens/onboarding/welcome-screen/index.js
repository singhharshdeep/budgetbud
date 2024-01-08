import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "./styles";
import AuthButtons from "../../../components/auth-buttons";
import Carousel from "../../../components/carousel";

const WelcomeScreen = () => (
  <SafeAreaView style={styles.container}>
    <StatusBar barStyle="dark-content" />
    <Carousel />
    <AuthButtons />
  </SafeAreaView>
);

export default WelcomeScreen;
