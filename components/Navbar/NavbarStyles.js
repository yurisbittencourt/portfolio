import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100px;
  height: 100%;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const A = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 10px;
  &:hover {
    font-weight: bold;
  }
`;
