import Link from "next/link";

export default function ProjectCard({
  title,
  subtitle,
  points,
  href,
}: {
  title: string;
  subtitle: string;
  points: string[];
  href: string;
}) {
  return (
    <div className="rounded-xl border border-gray-800 bg-gradient-to-br from-black to-gray-900 p-6 hover:border-gray-600 hover:shadow-xl transition">
      <h3 className="text-lg font-semibold">
        {title}
        <span className="text-sm text-gray-400"> · {subtitle}</span>
      </h3>

      <ul className="list-disc list-inside text-gray-400 mt-3 space-y-1 text-sm">
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>

      <Link
        href={href}
        className="inline-block mt-4 text-blue-400 text-sm hover:underline"
      >
        View Project →
      </Link>
    </div>
  );
}
