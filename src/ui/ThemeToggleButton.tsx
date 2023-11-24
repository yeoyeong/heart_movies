import globalStore from "@src/store/global-store";
import MoonIcon from "@src/assets/icon/moon.svg?react";
import styled from "styled-components";

const ThemeToggleButton = () => {
  const { themeMode, setThemeMode } = globalStore();

  const THEME_MODE = localStorage.getItem("theme_mode");
  const themeModeHandler = () => {
    setThemeMode((prev: string) => (prev === "dark" ? "light" : "dark"));
    if (!THEME_MODE || THEME_MODE === "dark")
      return localStorage.setItem("theme_mode", "light");
    return localStorage.setItem("theme_mode", "dark");
  };
  return (
    <ToggleButton $themeMode={themeMode} onClick={themeModeHandler}>
      <MoonIcon />
    </ToggleButton>
  );
};

export default ThemeToggleButton;

const ToggleButton = styled.button<{ $themeMode: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: none;
  background-color: #00000075;
  width: 30px;
  height: 30px;
  overflow: hidden;
  cursor: pointer;
  svg {
    /* width: 20px;
    height: 20px; */
    fill: ${(props) => (props.$themeMode === "dark" ? "yellow" : "#eeeeee")};
  }
`;
