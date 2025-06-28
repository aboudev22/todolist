import { create } from "zustand";

type TestForm = {
  name: string;
  lastName: string;
  age: number;

  changeNAme: (name: string) => void;
  changeLastNAme: (name: string) => void;
  changeAge: (age: number) => void;
};

const useTest = create<TestForm>((set) => ({
  name: "",
  lastName: "",
  age: 0,

  changeNAme: (name) => set(() => ({ name })),
  changeAge: (age) => set(() => ({ age })),
  changeLastNAme: (lastName) => set(() => ({ lastName })),
}));

export default useTest;
