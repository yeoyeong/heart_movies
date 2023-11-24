import { Link, NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import { navData } from "../data/navData";
import { useCallback } from "react";
import ThemeToggleButton from "./ThemeToggleButton";
import Home from "@src/assets/icon/home.svg?react";
import Auth from "./Auth";
import globalStore from "@src/store/global-store";
const Header = () => {
  const { pathname, search } = useLocation();
  const { auth } = globalStore();
  //   const { pathname } = useLocation();

  const navStyle = useCallback(
    (link: string) => (pathname + search === link ? true : false),
    [pathname, search]
  );

  return (
    <HeaderStyle>
      <Nav>
        <TopMenu>
          <Link to="/">
            <Home />
          </Link>
          <ThemeToggleButton />
          {auth.idToken && <Auth />}
        </TopMenu>
        <ul>
          {navData.map((navItem) => (
            <Item key={navItem.link} $navStyle={navStyle(navItem.link)}>
              <NavLink to={navItem.link}>{navItem.title}</NavLink>
            </Item>
          ))}
        </ul>
      </Nav>
    </HeaderStyle>
  );
};

export default Header;

const HeaderStyle = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  /* height: 80px; */
  padding: 6px 0;
  width: 100%;
  background-color: ${(props) => props.theme.colors.background1};
`;

const Nav = styled.nav`
  height: inherit;
  > ul {
    height: inherit;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 20px;
    gap: 2px;
  }
`;

const TopMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  a {
    svg {
      fill: ${(props) => props.theme.colors.backgroundReverse};
    }
  }
  margin-bottom: 10px;
`;
const Item = styled.li<{ $navStyle: boolean }>`
  display: block;
  width: 100%;
  height: 56px;
  border-radius: 5px;
  background-color: ${(props) =>
    props.$navStyle ? props.theme.colors.backgroundHover : ""};
  /* background-color: red; */
  a {
    display: block;
    text-align: center;
    line-height: 56px;
    font-weight: ${(props) => (props.$navStyle ? 700 : 400)};
  }
  transition: 0.5s;
  &:hover {
    background-color: ${(props) => props.theme.colors.backgroundHover};
  }
`;
