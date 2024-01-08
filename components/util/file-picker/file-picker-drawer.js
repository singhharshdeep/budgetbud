import { FontAwesome, MaterialIcons, Octicons } from "@expo/vector-icons";
import * as DocumentPicker from "expo-document-picker";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import theme, { colors, typography } from "../../../theme";
import Drawer from "../../drawer";

const FilePickerDrawer = ({ isOpen, toggle }) => {
  const [image, setImage] = useState(null);
  const [document, setDocument] = useState(null);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const pickDocument = async () => {
    const result = await DocumentPicker.getDocumentAsync();

    console.log(result);

    if (!result.canceled) {
      setDocument(result.assets[0].uri);
    }
  };

  return (
    <Drawer
      isOpen={isOpen}
      toggle={toggle}
    >
      <View
        style={{
          backgroundColor: "white",
          width: "100%",
          borderRadius: 20,
        }}
      >
        <Octicons
          style={{ alignSelf: "center" }}
          name="horizontal-rule"
          size={48}
          color={colors["indigo-100"]}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            borderColor: colors["gray-300"],
            padding: 32,
          }}
        >
          <View
            style={{
              flexBasis: "30%",
              backgroundColor: colors["indigo-100"],
              justifyContent: "center",
              alignItems: "center",
              padding: 16,
              borderRadius: 20,
            }}
          >
            <FontAwesome
              name="camera"
              size={36}
              style={{ alignSelf: "center" }}
              color={theme.colors.primary}
            />
            <Text
              style={[
                { color: theme.colors.primary },
                typography["text-md"],
              ]}
            >
              Camera
            </Text>
          </View>
          <View
            style={{
              flexBasis: "30%",
              backgroundColor: colors["indigo-100"],
              justifyContent: "center",
              alignItems: "center",
              padding: 16,
              borderRadius: 20,
            }}
          >
            <TouchableOpacity onPress={pickImage}>
              <>
                <MaterialIcons
                  name="image"
                  size={36}
                  style={{ alignSelf: "center" }}
                  color={theme.colors.primary}
                />
                <Text
                  style={[
                    { color: theme.colors.primary },
                    typography["text-md"],
                  ]}
                >
                  Image
                </Text>
              </>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexBasis: "30%",
              backgroundColor: colors["indigo-100"],
              justifyContent: "center",
              alignItems: "center",
              padding: 16,
              borderRadius: 20,
            }}
          >
            <TouchableOpacity onPress={pickDocument}>
              <>
                <FontAwesome
                  name="file"
                  size={36}
                  style={{ alignSelf: "center" }}
                  color={theme.colors.primary}
                />
                <Text
                  style={[
                    { color: theme.colors.primary },
                    typography["text-md"],
                  ]}
                >
                  Document
                </Text>
              </>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Drawer>
  );
};

export default FilePickerDrawer;
