import {
  Section,
  Title,
  Card,
  SubTitle,
  Description,
  Image,
  Wrapper,
  A,
  Row,
} from "./ProjectsStyles";
import Link from "next/link";
import projectData from "../../utils/projectData.json";
import { TbArrowUpRight } from "react-icons/Tb";

const Projects = () => {
  return (
    <Section id="projects">
      <Title>Projects</Title>
      <Wrapper>
        {projectData.map((project) => (
          <Card key={project.id}>
            <Row>
              <SubTitle>{project.name}</SubTitle>
              <Link
                href={`${project.url}`}
                passHref
                aria-label="project website"
              >
                <A target="_blank">
                  Live
                  <TbArrowUpRight size="25px" style={{ marginLeft: "5px" }} />
                </A>
              </Link>
            </Row>
            <Description>{project.description}</Description>
            <Image src={project.image} />
          </Card>
        ))}
      </Wrapper>
    </Section>
  );
};

export default Projects;
