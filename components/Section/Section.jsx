import {
  Container,
  TextGroup,
  Title,
  SubTitle,
  Description,
  Image,
  Drawing,
} from "./SectionStyles";

export default function Section({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}

Section.TextGroup = function SectionTextGroup({ children, ...props }) {
  return <TextGroup {...props}>{children}</TextGroup>;
};

Section.Title = function SectionTitle({ children, ...props }) {
  return <Title {...props}>{children}</Title>;
};

Section.SubTitle = function SectionSubTitle({ children, ...props }) {
  return <SubTitle {...props}>{children}</SubTitle>;
};

Section.Description = function SectionDescription({ children, ...props }) {
  return <Description {...props}>{children}</Description>;
};

Section.Image = function SectionImage({ children, ...props }) {
  return <Image {...props}>{children}</Image>;
};

Section.Drawing = function SectionDrawing({ children, ...props }) {
  return <Drawing {...props}>{children}</Drawing>;
};
