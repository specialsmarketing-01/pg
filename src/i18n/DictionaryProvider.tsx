"use client";

import { createContext, useContext, useMemo, type ReactNode } from "react";
import type { Locale } from "./config";
import type { Dictionary } from "./get-dictionary";

const DictionaryContext = createContext<{
  locale: Locale;
  dict: Dictionary;
} | null>(null);

export function DictionaryProvider({
  children,
  locale,
  dict,
}: {
  children: ReactNode;
  locale: Locale;
  dict: Dictionary;
}) {
  const value = useMemo(() => ({ locale, dict }), [locale, dict]);
  return (
    <DictionaryContext.Provider value={value}>
      {children}
    </DictionaryContext.Provider>
  );
}

export function useDictionary() {
  const ctx = useContext(DictionaryContext);
  if (!ctx) {
    throw new Error("useDictionary must be used within DictionaryProvider");
  }
  return ctx;
}
