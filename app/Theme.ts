import { MD3DarkTheme, PaperProvider } from 'react-native-paper';


export const theme = {
    ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: "rgb(220, 184, 255)",
    background: "rgb(29, 27, 30)",
    surface: "rgb(29,27,30)",
  },
};

export type AppTheme = typeof theme;