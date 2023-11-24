import { authType } from "@src/model/global";
import { create } from "zustand";

interface ID {
  themeMode: string;
  setThemeMode: (action: (prev: string) => string) => void;
  auth: authType;
  setAuth: (action: (prev: authType) => authType) => void;
  authInfoToggle: boolean;
  setAuthInfoToggle: (action: boolean) => void;
}

const THEME_MODE = localStorage.getItem("theme_mode");
const idToken = sessionStorage.getItem("idToken");
const uid = sessionStorage.getItem("uid");
const name = sessionStorage.getItem("name");
const email = sessionStorage.getItem("email");
const photoURL = sessionStorage.getItem("photoURL");

const globalStore = create<ID>((set) => ({
  themeMode: THEME_MODE ?? "dark",
  setThemeMode: (action) => {
    set((prev) => ({ themeMode: action(prev.themeMode) }));
  },
  auth: {
    idToken: idToken ?? null,
    uid: uid ?? null,
    name: name ?? null,
    email: email ?? null,
    photoURL: photoURL ?? null,
  },
  setAuth: (action) => {
    set((prev) => ({ auth: action(prev.auth) }));
  },
  authInfoToggle: false,
  setAuthInfoToggle: (action) => {
    set(() => ({ authInfoToggle: action }));
  },
}));

export default globalStore;
