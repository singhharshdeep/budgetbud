import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "./styles";
import { colors, typography } from "../../../theme";

const Picker = ({
  options = [],
  selectedValue,
  onValueChange,
  containerStyle,
  placeholder = "",
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <View style={containerStyle}>
      <TouchableOpacity onPress={toggleModal}>
        <View style={[styles.container]}>
          <Text
            style={{
              color: selectedValue ? "black" : colors["gray-500"],
            }}
          >
            {selectedValue?.label ?? placeholder}
          </Text>
          <MaterialIcons
            style={{ position: "absolute", right: 16, top: 12 }}
            name="keyboard-arrow-down"
            size={24}
            color={colors["gray-500"]}
          />
        </View>
      </TouchableOpacity>
      <Modal visible={isModalOpen} transparent animationType="fade">
        <TouchableWithoutFeedback style={{ flex: 1 }} onPress={toggleModal}>
          <SafeAreaView
            style={{
              flex: 1,
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
                borderWidth: 1,
                borderColor: colors["gray-300"],
                opacity: 1,
                width: 300,
                borderRadius: 10,
              }}
            >
              {options.map((option, index) => (
                <View key={option.id} style={{ width: "100%" }}>
                  <TouchableOpacity
                    onPress={() => {
                      onValueChange(option);
                      toggleModal();
                    }}
                    key={option.id}
                    style={{ padding: 16 }}
                  >
                    <Text
                      style={[
                        typography["text-lg"],
                        { alignSelf: "center", color: colors["gray-700"] },
                      ]}
                    >
                      {option.label}
                    </Text>
                  </TouchableOpacity>
                  {index !== options.length - 1 ? (
                    <View
                      style={{
                        borderWidth: 1,
                        borderColor: colors["gray-200"],
                      }}
                    />
                  ) : null}
                </View>
              ))}
            </View>
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

export default Picker;
