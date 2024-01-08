import { StyleSheet } from "react-native";

import { typography } from "../../theme";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: typography["text-2xl"],
});
