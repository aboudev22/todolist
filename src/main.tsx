import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);


// createRoot(document.getElementById("root")!).render(
//   <StrictMode>
//     <BrowserRouter>
//       <TasksProvider>
//         <ThemeProvider>
//           <App />
//         </ThemeProvider>
//       </TasksProvider>
//     </BrowserRouter>
//   </StrictMode>
// );
