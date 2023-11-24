import React from "react";
import Header from "./header";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import globalStore from "../store/global-store";
import { dark, light } from "../styles/theme";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { themeMode } = globalStore();
  const theme = themeMode === "light" ? light : dark;

  return (
    <ThemeProvider theme={theme}>
      <div id="container">
        <Header />
        <ContentWrap>{children}</ContentWrap>
      </div>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default Layout;

const ContentWrap = styled.div`
  margin-top: 116px;
  height: 100vh;
`;
