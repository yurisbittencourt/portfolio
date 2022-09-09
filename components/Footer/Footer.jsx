import { FooterEl, Text, A, WhiteBG } from "./FooterStyles";
import Link from "next/link";
import { Icon } from "../";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterEl>
      <Link href="#hero" passHref aria-label="Home">
        <A>
          <Text>YSB</Text>
        </A>
      </Link>
      <Link
        href="https://www.linkedin.com/in/ysbittencourt/"
        passHref
        aria-label="LinkedIn"
      >
        <A target="_blank">
          <FaLinkedin size="50px" color="#0A66C2" />
        </A>
      </Link>
      <Link
        href="https://github.com/yurisbittencourt"
        passHref
        aria-label="Github"
      >
        <A target="_blank">
          <FaGithub size="50px" color="#000000" />
        </A>
      </Link>
    </FooterEl>
  );
};

export default Footer;
