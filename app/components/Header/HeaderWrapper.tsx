"use client";

import { usePathname } from "next/navigation";
import Nav from "./header";

export default function HeaderWrapper() {
  const pathname = usePathname();
  const isStudio = pathname.startsWith("/studio");

  if (isStudio) return null;

  return <Nav />;
}