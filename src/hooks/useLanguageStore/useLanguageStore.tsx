import { create } from "zustand";

type LanguageState = {
  language: "es" | "en" | "pr";
  setLanguage: (lang: "es" | "en" | "pr") => void;
};

export const useLanguageStore = create<LanguageState>((set) => ({
  language: "es",
  setLanguage: (lang) => set({ language: lang }),
}));
