export default function Badge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[var(--line)] bg-[var(--panel)] px-3 py-1 text-xs text-[var(--fg-muted)] transition-colors">
      {label}
    </span>
  );
}
