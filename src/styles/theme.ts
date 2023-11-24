// // styles/theme.ts

// import * as styledComponents from "styled-components";

// const color = {
//   correct: "#5babab",
//   present: "#fdb800",
//   absent: "#908790",
// };

export const light = {
  colors: {
    background1: "#ffffff",
    backgroundOpacity: "#ffffff50",
    backgroundReverse: "#151515",
    backgroundReverseOpacity: "#15151550",
    backgroundHover: "#e9ecef",
    boardBorder1: "#cfcbcf",
    boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 2px 4px",
    text: "#213547",
  },
};

export const dark = {
  colors: {
    background1: "#151515",
    backgroundOpacity: "#00000050",
    backgroundReverse: "#ffffff",
    backgroundReverseOpacity: "#ffffff50",
    backgroundHover: "#343a40",
    boardBorder1: "#766c76",
    boxShadow: "0 10px 20px rgba(0,0,0,0.8), 0 2px 4px",
    text: "#eee",
  },
};

// export type Theme = typeof light;
// export const { default: styled, createGlobalStyle } = styledComponents;
export {};
