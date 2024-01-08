import { StyleSheet } from "react-native";

import theme, { typography } from "../../theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.primary,
  },
  text: [
    {
      color: "white",
    },
    typography["font-semibold"],
    typography["text-4xl"],
  ],
});

export default styles;
