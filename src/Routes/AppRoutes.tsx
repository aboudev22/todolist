import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import NewTask from "../pages/NewTask";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/newtask" element={<NewTask />} />
    </Routes>
  );
}
