export default function SkillBadge({ label }: { label: string }) {
  return (
    <span className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-300 border border-gray-700">
      {label}
    </span>
  );
}
