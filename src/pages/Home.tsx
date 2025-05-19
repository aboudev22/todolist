import { Route, Routes } from "react-router-dom";
import Layout from "./_Layout";
import AddTask from "./AddTask";
import AllTask from "./AllTask";

export default function Home() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/AddTask" element={<AddTask />} />
        <Route path="/AllTask" element={<AllTask />} />
      </Route>
    </Routes>
  );
}
