"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { dict, type Key, type Lang, type Localized } from "@/lib/i18n";

type Ctx = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  /** teks dari kamus */
  t: (key: Key) => string;
  /** teks dari data dua bahasa */
  l: (value: Localized) => string;
};

const LanguageContext = createContext<Ctx | null>(null);
const STORAGE_KEY = "spd-lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("id");

  // Baca pilihan tersimpan setelah mount agar HTML server dan klien tetap sama.
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "en" || saved === "id") setLangState(saved);
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {}
  }, []);

  const value = useMemo<Ctx>(
    () => ({
      lang,
      setLang,
      t: (key) => dict[lang][key],
      l: (v) => v[lang],
    }),
    [lang, setLang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang harus dipakai di dalam LanguageProvider");
  return ctx;
}
