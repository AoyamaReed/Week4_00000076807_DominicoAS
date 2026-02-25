import { StyleSheet } from "react-native";
import {AppTheme} from "./Theme";

export const appStyles = (theme: AppTheme) => StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    display: "flex"
  },
  card: {
    borderWidth: 1,
    borderColor: theme.colors.primary,
    borderRadius: 8,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    width: 325,
    gap: 8
  },
  avatar: {
    width: 75,
    height: 75,
    borderRadius: 999
  },
  boldText: {
    fontWeight: "bold",
    color: theme.colors.primary
  },
  fontColor: {
    color: theme.colors.primary
  },
});