import { Container } from "../../style/Container.styled";
import {HeaderStyled, Logo, Nav } from "./Header.styled";
import { Button } from "../../style/Button.styled";

import logo from "../../images/logo.svg";

const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <Nav>
          <Logo src={logo} alt="logo" />
          <Button>Try It Free</Button>
        </Nav>
      </Container>
    </HeaderStyled>
  );
};

export default Header;
