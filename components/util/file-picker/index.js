import { Entypo } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { colors } from "../../../theme";
import FilePickerDrawer from "./file-picker-drawer";

const FilePicker = ({ containerStyle }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <>
      <TouchableOpacity onPress={toggleModal}>
        <View
          style={[
            {
              flexDirection: "row",
              borderWidth: 1,
              borderStyle: "dashed",
              borderColor: colors["gray-200"],
              justifyContent: "center",
              alignItems: "center",
              padding: 16,
              borderRadius: 10,
            },
            containerStyle,
          ]}
        >
          <Entypo name="attachment" size={24} color={colors["gray-400"]} />
          <Text style={{ marginLeft: 16, color: colors["gray-400"] }}>
            Add Attachment
          </Text>
        </View>
      </TouchableOpacity>
      <FilePickerDrawer isOpen={isModalOpen} toggle={toggleModal} />
    </>
  );
};

export default FilePicker;
