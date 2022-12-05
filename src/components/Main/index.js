// Style
import { Container } from "../../style/Container.styled";
import { MainStyled } from "./Main.styled";

// Components
import ContentSection from "../ContentSection";
import AboutSection from "../AboutSection";

const Main = () => {
  return (
    <MainStyled>
      <Container>
        <ContentSection />
        <AboutSection />
      </Container>
    </MainStyled>
  );
};

export default Main;
