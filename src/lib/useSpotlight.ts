"use client";

import { useCallback, useRef } from "react";

/**
 * Writes the pointer position onto the element as --mx/--my so the
 * `.spotlight` / `.spotlight-border` CSS in globals.css can render a
 * radial highlight that follows the cursor.
 *
 * Values are written straight to the style attribute (no React state) so a
 * mousemove never triggers a re-render.
 */
export function useSpotlight<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  const onPointerMove = useCallback((event: React.PointerEvent<T>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    el.style.setProperty("--my", `${event.clientY - rect.top}px`);
  }, []);

  return { ref, onPointerMove };
}
