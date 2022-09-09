import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
`;

export const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 600px;
`;

export const Title = styled.h1`
  margin: 0;
`;

export const SubTitle = styled.h2`
  margin: 0;
`;

export const Description = styled.p`
  font-size: 24px;
  ${({ intro }) =>
    intro &&
    `
    font-size: 18px;
  `}
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 800px;
  max-height: 600px;
`;

export const Drawing = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  min-width: 200px;
  min-height: 200px;
  border: 1px solid black;
`;
