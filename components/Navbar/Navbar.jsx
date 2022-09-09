import { Nav, List, A } from "./NavbarStyles";
import Link from "next/link";

const Navbar = () => {
  return (
    <Nav>
      <Link href="#hero" passHref aria-label="Home">
        <A>YSB</A>
      </Link>
      <List>
        <Link href="#about" passHref aira-label="About">
          <A>About</A>
        </Link>
        <Link href="#projects" passHref aria-label="Projects">
          <A>Projects</A>
        </Link>
        <Link href="#contact" passHref aria-label="Contact">
          <A>Contact</A>
        </Link>
      </List>
    </Nav>
  );
};

export default Navbar;
