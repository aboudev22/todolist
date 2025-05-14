type User = {
  name: string;
  email: string;
  password: string;
};

type authContextType = {
  isConnected: boolean;
  toggleConnected: () => void;
};

type ThemeType = "light" | "dark";

type ThemeContexteType = {
  theme: ThemeType;
  toggleTheme: () => void;
};

export type { User, authContextType, ThemeType, ThemeContexteType };
