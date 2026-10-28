"use client";

import { useSyncExternalStore } from "react";

const assinar = () => () => {};

export default function CopyrightYear() {
  const ano = useSyncExternalStore(
    assinar,
    () => new Date().getFullYear(),
    () => 2026,
  );
  return <>{ano}</>;
}
