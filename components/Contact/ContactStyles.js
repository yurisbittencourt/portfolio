import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: calc(100vh - 80px);
  height: 100%;
  padding: 50px 20px;
  background-color: ${(props) => props.theme.colors.sky};
  background-image: url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Crect fill='%2387CEEB' width='1600' height='900' /%3E%3Cpolygon fill='%237abad3' points='957 450 539 900 1396 900' /%3E%3Cpolygon fill='%2375b2cb' points='957 450 872.9 900 1396 900' /%3E%3Cpolygon fill='%237bbcd5' points='-60 900 398 662 816 900' /%3E%3Cpolygon fill='%2374b0c9' points='337 900 398 662 816 900' /%3E%3Cpolygon fill='%237cbed8' points='1203 546 1552 900 876 900' /%3E%3Cpolygon fill='%2372aec7' points='1203 546 1552 900 1162 900' /%3E%3Cpolygon fill='%237ebfda' points='641 695 886 900 367 900' /%3E%3Cpolygon fill='%2371adc5' points='587 900 641 695 886 900' /%3E%3Cpolygon fill='%237fc1dd' points='1710 900 1401 632 1096 900' /%3E%3Cpolygon fill='%236fabc3' points='1710 900 1401 632 1365 900' /%3E%3Cpolygon fill='%2380c3df' points='1210 900 971 687 725 900' /%3E%3Cpolygon fill='%236ea9c1' points='943 900 1210 900 971 687' /%3E%3C/svg%3E");
  background-size: cover;
  background-position: center;
`;

export const Title = styled.h1`
  margin: 30px 0;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin: 0 0 20px 0;
`;

export const Input = styled.input`
  border: none;
  background: none;
  display: flex;
  width: 100%;
  height: 50px;
  padding: 0 10px;
  margin: 0 0 20px 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.primary};
  &:focus {
    outline: none;
    border-bottom: 2px solid ${(props) => props.theme.colors.primary};
  }
  &::placeholder {
    font-weight: 300;
  }
`;

export const Textarea = styled.textarea`
  background: none;
  display: flex;
  width: 100%;
  height: 200px;
  padding: 10px;
  margin: 0 0 20px 0;
  border: 1px solid ${(props) => props.theme.colors.primary};
  &:focus {
    outline: none;
    border: solid 2px ${(props) => props.theme.colors.primary};
  }
  &::placeholder {
    font-weight: 300;
  }
`;

export const Button = styled.button`
  all: unset;
  display: flex;
  align-self: end;
  padding: 10px;
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
`;
