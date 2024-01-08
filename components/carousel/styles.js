import { StyleSheet } from "react-native";

import theme, { colors, typography } from "../../theme";

export default StyleSheet.create({
  container: { flex: 5 },
  sliderButtonsContainer: {
    marginVertical: 32,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
  },
  carouselContentContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  carouselTitle: [
    { marginTop: 16, marginHorizontal: 16, textAlign: "center", fontSize: 30 },
    typography["text-4xl"],
  ],
  carouselDescription: [
    {
      color: "gray",
      marginHorizontal: 32,
      marginTop: 16,
      textAlign: "center",
      fontSize: 30,
    },
    typography["text-xl"],
  ],
  selectedIndex: {
    backgroundColor: theme.colors.primary,
    width: 15,
    height: 15,
    borderRadius: 15,
  },
  otherIndex: {
    backgroundColor: colors["gray-300"],
    width: 10,
    height: 10,
    borderRadius: 10,
    marginTop: 2,
  },
});
