import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

export default function NewTask() {
  const location = useLocation();
  return (
    <motion.div
      key={location.pathname}
      className="h-full w-full flex justify-center items-center dark:bg-neutral-800 bg-slate-400"
    >
      <h1 className="text-7xl text-center font-bold text-black dark:text-neutral-200">
        Task manager
      </h1>
    </motion.div>
  );
}
