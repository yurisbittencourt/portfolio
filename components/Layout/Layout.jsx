import { Navbar, Footer } from "../";
import { Main } from "./LayoutStyles";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;
