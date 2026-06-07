"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { Lang, t, TKeys } from "./i18n";

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  tr: (key: TKeys) => string;
  trArr: (key: TKeys) => string[];
}

const Ctx = createContext<LangCtx>({
  lang: "en",
  setLang: () => {},
  tr: (k) => t.en[k] as string,
  trArr: (k) => t.en[k] as string[],
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const tr = (key: TKeys) => t[lang][key] as string;
  const trArr = (key: TKeys) => t[lang][key] as string[];
  return <Ctx.Provider value={{ lang, setLang, tr, trArr }}>{children}</Ctx.Provider>;
}

export const useLang = () => useContext(Ctx);
