"use client";

import type { ReactNode } from "react";
import Reveal from "./Reveal";

/** Kept as a thin alias so existing case-study pages keep working. */
export default function FadeIn({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  return <Reveal delay={delay}>{children}</Reveal>;
}
