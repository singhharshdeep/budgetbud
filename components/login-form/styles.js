import { StyleSheet } from "react-native";

import theme, { colors, typography } from "../../theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 8,
    marginTop: 48,
  },
  orWith: [
    {
      alignSelf: "center",
      marginTop: 8,
      color: colors["gray-500"],
    },
    typography["font-semibold"],
  ],
  googleButton: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: colors["gray-400"],
    justifyContent: "center",
    alignItems: "center",
    height: 56,
    borderRadius: 15,
    marginTop: 8,
  },
  googleText: [typography["font-semibold"], typography["text-lg"]],
  loginText: [
    {
      color: colors["gray-500"],
    },
    typography["font-semibold"],
  ],
  secureTextContainer: {
    flexDirection: "row",
    borderColor: colors["gray-200"],
    borderWidth: 1,
    padding: 16,
    borderRadius: 10,
  },
  tAndCContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 24,
    paddingRight: 8,
  },
  checkbox: {
    marginRight: 8,
    borderRadius: 5,
    borderColor: theme.colors.primary,
  },
  checkboxText: {
    color: theme.colors.primary,
  },
  textInputContainer: {
    borderColor: colors["gray-200"],
    borderWidth: 1,
    padding: 16,
    borderRadius: 10,
  },
});
