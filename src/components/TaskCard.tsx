interface TaskCard {
  onClick: (id: number) => void;
  description: string;
  finished: boolean;
  id: number;
}

export default function TaskCard(props: TaskCard) {
  return (
    <div className="flex justify-center gap-5 items-center bg-white">
      <input
        onClick={() => props.onClick(props.id)}
        type="checkbox"
        checked={props.finished}
      />
      <p className="text-sm font-bold text-neutral-600 flex-1">
        {props.description}
      </p>
    </div>
  );
}
