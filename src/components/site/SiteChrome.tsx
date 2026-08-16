"use client";

import { useState, type ReactNode } from "react";
import Nav from "./Nav";
import CommandPalette from "./CommandPalette";

export default function SiteChrome({ children }: { children: ReactNode }) {
  const [paletteOpen, setPaletteOpen] = useState(false);

  return (
    <>
      <Nav onOpenPalette={() => setPaletteOpen(true)} />
      <CommandPalette open={paletteOpen} onOpenChange={setPaletteOpen} />
      {children}
    </>
  );
}
