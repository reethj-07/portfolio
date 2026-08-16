import type { ReactNode } from "react";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  id,
}: {
  eyebrow: string;
  title: string;
  description?: ReactNode;
  action?: ReactNode;
  id?: string;
}) {
  return (
    <div className="mb-10 md:mb-14">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <div className="mb-4 flex items-center gap-3">
            <span
              aria-hidden
              className="h-px w-6 bg-[var(--accent-line)]"
            />
            <span className="eyebrow">{eyebrow}</span>
          </div>

          <h2
            id={id}
            className="display text-3xl text-[var(--fg)] sm:text-4xl md:text-[2.75rem]"
          >
            {title}
          </h2>

          {description && (
            <p className="text-pretty mt-4 text-[0.9375rem] leading-relaxed text-[var(--fg-subtle)] md:text-base">
              {description}
            </p>
          )}
        </div>

        {action && <div className="shrink-0">{action}</div>}
      </div>
    </div>
  );
}
