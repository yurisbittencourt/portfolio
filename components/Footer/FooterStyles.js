import styled from "styled-components";

export const FooterEl = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: #008013;
`;

export const Text = styled.p`
  color: white;
  font-size: 24px;
`;

export const A = styled.a`
  margin: 20px;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
`;
