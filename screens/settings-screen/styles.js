import { StyleSheet } from "react-native";

import { colors, typography } from "../../theme";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors["gray-50"],
    margin: -16,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderBlockColor: colors["gray-300"]
  },
  title: typography["text-xl"],
});
