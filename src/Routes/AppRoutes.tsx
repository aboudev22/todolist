import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import NewTask from "../pages/NewTask";
import MainLayout from "../Layout/MainLayout";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/newtask" element={<NewTask />} />
      </Route>
    </Routes>
  );
}
