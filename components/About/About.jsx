import { Section, Title, Description, Column, Row } from "./AboutStyles";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaJava,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaSass,
  FaAngular,
} from "react-icons/fa";
import { SiJavascript, SiTypescript } from "react-icons/si";
import { Icon } from "../";

const About = () => {
  return (
    <Section id="about">
      <Column>
        <Title>About Me</Title>
        <Description>
          I'm a web developer who is devoted to continue learning and growing
          every day. I love web development because it brings together
          technology, logic and creativity to turn them into beautiful tools and
          solutions to make peoples lives easier and more enjoyable. When I'm
          not coding I might be exercising, reading or playing the drums.
        </Description>
      </Column>
      <Row>
        <Icon Component={FaHtml5} name="HTML5" color="#e34c26" />
        <Icon Component={FaCss3Alt} name="CSS3" color="#264de4" />
        <Icon Component={SiJavascript} name="JavaScript" color="#f0db4f" />
        <Icon Component={SiTypescript} name="TypeScript" color="#007acc" />
        <Icon Component={FaReact} name="React" color="#61DBFB" />
        <Icon Component={FaAngular} name="Angular" color=" #dd1b16" />
        <Icon Component={FaGitAlt} name="Git" color="#f34f29" />
        <Icon Component={FaJava} name="Java" color="#5382a1" />
        <Icon Component={FaNodeJs} name="Node" color="#3C873A" />
        <Icon Component={FaPython} name="Python" color="#306998" />
        <Icon Component={FaDatabase} name="SQL" color="#000000" />
        <Icon Component={FaSass} name="Sass" color="#CD6799" />
      </Row>
    </Section>
  );
};

export default About;
