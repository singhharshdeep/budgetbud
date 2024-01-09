import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";


const BackButton = ({ textColor = "black" }) => {
  const navigation = useNavigation();

  return (
    <Pressable style={{ flexBasis: '25%' }} onPress={() => navigation.goBack()}>
      <AntDesign name="arrowleft" size={32} color={textColor} />
    </Pressable>
  );
};

export default BackButton;
