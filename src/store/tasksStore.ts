import { create } from "zustand";

interface CountProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const useTasks = create<CountProps>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));

export default { useTasks };
