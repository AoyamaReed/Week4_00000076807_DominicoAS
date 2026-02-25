import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";
import { theme } from "./Theme";

export default function RootLayout() {
  return (
    <PaperProvider theme={theme}>
      <Stack/>
    </PaperProvider>
  );
}
