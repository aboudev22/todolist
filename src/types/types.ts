type authContextType = {
  isConnected: boolean;
  toggleConnected: () => void;
};

type ThemeType = "light" | "dark";

type ThemeContexteType = {
  theme: ThemeType;
  toggleTheme: () => void;
};

export type { authContextType, ThemeType, ThemeContexteType };
