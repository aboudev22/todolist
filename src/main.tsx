import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import ThemeProvider from "./context/ThemeProvider";
import { BrowserRouter } from "react-router-dom";
import TasksProvider from "./context/TasksProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <TasksProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </TasksProvider>
    </BrowserRouter>
  </StrictMode>
);
