import styled from "styled-components";

export const Description = styled.p`
  display: none;
  position: absolute;
  bottom: 0;
  font-size: 12px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:hover {
    transform: scale(1.2);
    ${Description} {
      display: block;
    }
  }
`;
