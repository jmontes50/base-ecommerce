import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { saveStorage, getStorage } from "../utils/localStorageUtils";

const THEME_KEY = "theme";

const useThemeStore = create(
  devtools((set) => {
    const initialTheme = getStorage(THEME_KEY) || "light";

    const htmlBase = document.querySelector("html");
    htmlBase.setAttribute("data-theme", initialTheme);

    return {
      theme: initialTheme,
      changeTheme: () => {
        set(
          (state) => {
            const newTheme = state.theme === "dark" ? "light" : "dark";
            saveStorage(THEME_KEY, newTheme);

            const html = document.querySelector("html");
            html.setAttribute("data-theme", newTheme);

            return { theme: newTheme };
          },
          false,
          "theme/changeTheme"
        );
      },
    };
  })
);

export default useThemeStore;
