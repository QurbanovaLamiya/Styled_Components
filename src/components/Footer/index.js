import SocialBar from "../SocialBar";
import { Container } from "../../style/Container.styled";
import {
  FooterStyled,
  Logo,
  Content,
  List,
  Item,
  FooterEnd,
} from "./Footer.styled";

import FooterLogo from "../../images/footerLogo.svg";

const Footer = () => {
  return (
    <FooterStyled>
      <Container>
        <Logo src={FooterLogo} alt="FooterLogo" />
        <Content>
          <List>
            <Item>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </Item>
            <Item>+1-543-123-4567</Item>
            <Item>example@huddle.com</Item>
          </List>
          <List>
            <Item>About Us</Item>
            <Item>What We Do</Item>
            <Item>FAQ</Item>
          </List>
          <List>
            <Item>Career</Item>
            <Item>Blog</Item>
            <Item>Contact Us</Item>
          </List>

          <SocialBar />
        </Content>
        <FooterEnd>&copy; 2022 Huddle. All rights reserved</FooterEnd>
      </Container>
    </FooterStyled>
  );
};

export default Footer;
