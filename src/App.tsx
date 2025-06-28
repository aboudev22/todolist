import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./pages/Home";
import NewTask from "./pages/NewTask";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "/newtask", element: <NewTask /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
