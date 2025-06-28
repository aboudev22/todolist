export default function TaskBarDate() {
  const dayDAte = new Date();
  return (
    <div className="text-xl font-bold text-black">{dayDAte.toDateString()}</div>
  );
}
