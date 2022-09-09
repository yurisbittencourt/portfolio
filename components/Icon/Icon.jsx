import { Wrapper, Description } from "./IconStyles";

const Icon = ({ Component, name, ...props }) => {
  return (
    <Wrapper>
      <Component size="60px" style={{ margin: "15px" }} {...props} />
      <Description>{name}</Description>
    </Wrapper>
  );
};

export default Icon;
