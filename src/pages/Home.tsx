import clsx from "clsx";
import Button from "../components/ui/Button";
import useTheme from "../hooks/useTheme";

export default function Home() {
  const { toggleTheme } = useTheme();
  return (
    <div
      className={clsx("w-screen h-screen dark:bg-neutral-900 bg-amber-50 p-4")}
    >
      <Button
        text="switch theme"
        variant="red"
        onClick={() => {
          console.log("clique");
          toggleTheme();
        }}
      />
      <h1 className="dark:text-white text-black  text-6xl font-bold">
        Up your productivity like never before
      </h1>
    </div>
  );
}
