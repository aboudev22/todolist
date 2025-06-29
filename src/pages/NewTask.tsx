export default function NewTask() {
  return (
    <div className="w-full h-full bg-amber-50 flex justify-center items-center">
      <form
        action=""
        className="flex flex-col w-xs justify-center items-center rounded-md py-16 bg-black/20"
      >
        <div>
          <input type="text" placeholder="description..." />
        </div>
        <div>
          <input type="date" placeholder="description..." />
        </div>
      </form>
    </div>
  );
}
