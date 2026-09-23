"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import {
  TRANSLATIONS,
  LANGUAGES,
  type LangCode,
  type LanguageOption,
} from "./i18n";

interface LanguageContextValue {
  lang: LangCode;
  setLang: (code: LangCode) => void;
  t: (key: string) => string;
  current: LanguageOption;
  languages: LanguageOption[];
  isRtl: boolean;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "qfs-ecosystem-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Lazy init from localStorage (SSR-safe: defaults to "es" on server)
  const [lang, setLangState] = useState<LangCode>(() => {
    if (typeof window === "undefined") return "es";
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as LangCode | null;
      if (saved && TRANSLATIONS[saved]) return saved;
    } catch {
      // ignore
    }
    return "es";
  });

  // Apply <html lang> and dir + persist whenever language changes
  useEffect(() => {
    const option = LANGUAGES.find((l) => l.code === lang);
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
      document.documentElement.dir = option?.rtl ? "rtl" : "ltr";
    }
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore
    }
  }, [lang]);

  const setLang = useCallback((code: LangCode) => {
    setLangState(code);
  }, []);

  const t = useCallback(
    (key: string): string => {
      const dict = TRANSLATIONS[lang] ?? TRANSLATIONS.es;
      return dict[key] ?? TRANSLATIONS.es[key] ?? key;
    },
    [lang]
  );

  const current = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0];
  const isRtl = current.rtl;

  return (
    <LanguageContext.Provider
      value={{ lang, setLang, t, current, languages: LANGUAGES, isRtl }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    // Safe fallback so server render doesn't crash
    return {
      lang: "es",
      setLang: () => {},
      t: (key: string) => TRANSLATIONS.es[key] ?? key,
      current: LANGUAGES[0],
      languages: LANGUAGES,
      isRtl: false,
    };
  }
  return ctx;
}
