export default function Badge({ label }: { label: string }) {
  return (
    <span className="inline-block rounded-full border border-gray-700 px-3 py-1 text-xs text-gray-300 bg-gray-900">
      {label}
    </span>
  );
}
