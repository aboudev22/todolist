import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import SelectedDays from "./components/SelectedDays";
import TaskCard from "./components/TaskCard";
import useTasks from "./stores/tasksStore";
import useHeaderDAte from "./utils/headerDate";

type TaskType = {
  description: string;
  finished: boolean;
  id: number;
  date: Date;
};

export default function App() {
  const today = useHeaderDAte();
  const [d, setD] = useState(new Date());
  const { tasks, addTask, toggleTask, removeTask } = useTasks();
  const [viewDrawer, setViewDrawer] = useState(false);
  const ref = useRef<HTMLInputElement | null>(null);

  const [formDate, setFormDate] = useState<Date>(d);
  const [description, setDescription] = useState("");
  const [selected, setSelected] = useState(d);

  const handleChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };
  const handleAddTask = () => {
    if (!description.trim()) return;

    const task: TaskType = {
      description: description,
      finished: false,
      id: Date.now(),
      date: new Date(formDate),
    };
    addTask(task);
    setDescription("");
    setViewDrawer(false);
  };

  useEffect(() => {
    const now = new Date();
    const nextMidnight = new Date(now);
    nextMidnight.setHours(24, 0, 0, 0);
    const msUntilMidnight = nextMidnight.getTime() - now.getTime();

    const timeout = setTimeout(() => {
      setD(new Date());
    }, msUntilMidnight);

    return () => clearTimeout(timeout);
  }, [d]);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.focus();
  }, [viewDrawer]);

  const handleFormDateChange = (e: React.FormEvent<HTMLInputElement>) => {
    setFormDate(new Date(e.currentTarget.value));
  };

  const dayTasks = tasks.filter(
    (el) => new Date(el.date).toDateString() === selected.toDateString()
  );

  return (
    <div className="realative w-screen h-screen overflow-scroll flex justify-center items-center bg-slate-200">
      <div className="flex flex-col p-5 items-center justify-start h-full w-full lg:w-1/2">
        <header className="flex justify-between w-full">
          <p className="text-sm font-bold text-neutral-500">
            {today.toDateString()}
          </p>
          <p className="text-sm font-bold text-neutral-500">
            {today.toLocaleTimeString()}
          </p>
        </header>
        <main className="flex flex-col w-full mt-5 gap-5">
          <header className="flex flex-col w-full gap-5">
            <h1 className="text-3xl text-blue-500 font-black">To-do-List</h1>
            <SelectedDays
              handleSelected={(day) => setSelected(day)}
              selected={selected}
              date={d}
            />
          </header>
          <section className="flex flex-col h-full">
            <p className="text-sm font-bold">{tasks.length} Tasks</p>
            <AnimatePresence mode="popLayout">
              {dayTasks.length > 0 && (
                <motion.div className="flex flex-col overflow-auto gap-2 bg-neutral-200 px-8 py-8">
                  <AnimatePresence>
                    {dayTasks.map((item) => (
                      <TaskCard
                        key={item.id}
                        id={item.id}
                        date={item.date}
                        onDelete={() => removeTask(item.id)}
                        onChange={() => toggleTask(item.id)}
                        finished={item.finished}
                        description={item.description}
                      />
                    ))}
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>
          </section>
        </main>
      </div>
      <motion.button
        onClick={() => setViewDrawer(true)}
        whileTap={{ scale: 0.9 }}
        layout
        className="absolute z-[5] bottom-20 right-5 lg:right-[20%] cursor-pointer bg-blue-500 rounded-full p-2"
      >
        <Plus color="white" size={35} />
      </motion.button>
      <AnimatePresence>
        {viewDrawer && (
          <motion.div
            onClick={() => setViewDrawer(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute overflow-hidden p-8 top-0 bottom-0 left-0 right-0 bg-black/30 z-10 flex justify-center items-center lg:items-end lg:pb-36"
          >
            <motion.form
              onSubmit={(e) => e.preventDefault()}
              initial={{ y: 200 }}
              animate={{ y: 0 }}
              exit={{ y: 200 }}
              onClick={(e) => e.stopPropagation()}
              action=""
              className="flex justify-center items-center w-full md:w-lg xl:w-xl rounded-xl p-2 bg-white/60"
            >
              <div className="bg-slate-100 border-t-2 border-l-2 border-white rounded-xl px-5 shadow-2xl/50 flex justify-center items-center w-full">
                <input
                  ref={ref}
                  value={description}
                  onChange={(e) => handleChangeDescription(e)}
                  type="text"
                  placeholder="new task..."
                  className="w-full h-10  focus:outline-none text-neutral-600 font-bold"
                />
                <input
                  type="date"
                  onChange={handleFormDateChange}
                  value={formDate.toDateString()}
                  className="font-bold text-sm text-neutral-800 focus:outline-none"
                />
              </div>

              <motion.button
                onClick={handleAddTask}
                type="button"
                whileTap={{ scale: 0.9 }}
                className="bg-blue-500 shadow-xl/40 p-2 rounded-full ml-1 cursor-pointer"
              >
                <Plus size={30} color="white" />
              </motion.button>
            </motion.form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
