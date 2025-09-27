import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { saveStorage, getStorage } from "../utils/localStorageUtils";

const THEME_KEY = "theme";

const useThemeStore = create(
  devtools(set => ({
    theme: "light",
    changeTheme: () => {
      set(state => {
        const newTheme = state.theme === 'dark' ? 'light' : 'dark';

        const html = document.querySelector('html');
        html.setAttribute("data-theme", newTheme);

        return { theme: newTheme }

      }, false, "theme/changeTheme");
    }
  }))
)

export default useThemeStore;
