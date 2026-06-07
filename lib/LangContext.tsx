"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { Lang, t } from "./i18n";

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  tr: (key: string) => string;
  trArr: (key: string) => string[];
}

const Ctx = createContext<LangCtx>({
  lang: "en",
  setLang: () => {},
  tr: (k) => (t.en as any)[k] as string ?? k,
  trArr: (k) => (t.en as any)[k] as string[] ?? [],
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const tr = (key: string) => ((t[lang] as any)[key] as string) ?? key;
  const trArr = (key: string) => ((t[lang] as any)[key] as string[]) ?? [];
  return <Ctx.Provider value={{ lang, setLang, tr, trArr }}>{children}</Ctx.Provider>;
}

export const useLang = () => useContext(Ctx);
