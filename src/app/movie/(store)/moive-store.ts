import { create } from "zustand";
import { movielistType } from "../(model)/list";

interface ID {
  heartIdList: number[] | null;
  setHeartIdList: (action: (prev: number[] | null) => number[] | null) => void;
  heartMovieList: movielistType[];
  setHeartMovieList: (
    action: (prev: movielistType[]) => movielistType[]
  ) => void;
  //   themeMode: string;
  //   setThemeMode: (action: (prev: string) => string) => void;
  //   auth: authType;
  //   setAuth: (action: (prev: authType) => authType) => void;
  //   authInfoToggle: boolean;
  //   setAuthInfoToggle: (action: boolean) => void;
}

const movieStore = create<ID>((set) => ({
  heartIdList: null,
  setHeartIdList: (action) => {
    set((prev) => ({ heartIdList: action(prev.heartIdList) }));
  },
  heartMovieList: [],
  setHeartMovieList: (action) => {
    set((prev) => ({ heartMovieList: action(prev.heartMovieList) }));
  },

  //   themeMode: "dark",
  //   setThemeMode: (action) => {
  //     set((prev) => ({ themeMode: action(prev.themeMode) }));
  //   },
  //   auth: {
  //     idToken: idToken ?? null,
  //     uid: uid ?? null,
  //     name: name ?? null,
  //     email: email ?? null,
  //     photoURL: photoURL ?? null,
  //   },
  //   setAuth: (action) => {
  //     set((prev) => ({ auth: action(prev.auth) }));
  //   },
  //   authInfoToggle: false,
  //   setAuthInfoToggle: (action) => {
  //     set(() => ({ authInfoToggle: action }));
  //   },
}));

export default movieStore;
