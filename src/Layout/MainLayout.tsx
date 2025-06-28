import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import {
  BookTask,
  FinishedTask,
  PinTask,
  TaskBarDate,
  ThemeButton,
} from "../components/index";

export default function MainLayout() {
  return (
    <>
      <div className="w-screen h-screen dark:bg-neutral-800 bg-slate-100 overflow-hidden flex transition-all duration-500">
        <ThemeButton />
        <div className="w-32 lg:w-64 bg-neutral-300 rounded-md p-2 m-2 flex flex-col items-center">
          <TaskBarDate />
          <PinTask />
          <FinishedTask />
          <BookTask />
        </div>
        <main className="flex-1 h-screen">
          <Outlet />
        </main>
        <NavBar />
      </div>
    </>
  );
}
