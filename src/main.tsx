import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ThemeProvider from "./context/ThemeProvider.tsx";
import { AuthProvider } from "./context/AuthProvider.tsx";
import RootComponent from "./components/RootComponent.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <AuthProvider>
        <ThemeProvider>
          <RootComponent />
        </ThemeProvider>
      </AuthProvider>
    </StrictMode>
  </BrowserRouter>
);
