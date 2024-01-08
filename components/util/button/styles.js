import { StyleSheet } from "react-native";

import { colors, typography } from "../../../theme";

export default StyleSheet.create({
  button: (color) => ({
    backgroundColor: colors[color],
    height: 56,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  }),
  buttonText: (color) => [{ color }, typography["text-lg"]],
});
