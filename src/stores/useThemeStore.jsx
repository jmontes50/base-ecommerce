import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { saveStorage, getStorage } from "../utils/localStorageUtils";

const THEME_KEY = "theme";

const useThemeStore = create(
  devtools(( set => ({
    theme: "light",
    changeTheme: () => {

    }
  })))
)

export default useThemeStore;
