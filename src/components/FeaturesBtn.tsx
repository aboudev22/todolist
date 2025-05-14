export default function FeaturesBtn({ name = "test" }: { name: string }) {
  return (
    <div className="flex gap-1 bg-amber-200 rounded-md p-1">
      <p className="font-bold text-xs text-amber-500">{name}</p>
    </div>
  );
}
