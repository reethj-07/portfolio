import Badge from "@/components/Badge";

export default function ProjectLayout({
  title,
  description,
  badges,
  children,
}: {
  title: string;
  description: string;
  badges: string[];
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-4xl mx-auto space-y-14">

        {/* HEADER */}
        <section className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            {title}
          </h1>

          <p className="text-gray-400 max-w-2xl">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {badges.map((b) => (
              <Badge key={b} label={b} />
            ))}
          </div>
        </section>

        {/* CONTENT */}
        <section className="space-y-12">
          {children}
        </section>

      </div>
    </main>
  );
}
