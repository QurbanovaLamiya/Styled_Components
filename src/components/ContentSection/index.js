import { Button } from "../../style/Button.styled";
import IllustrationMockUps from "../../images/illustration-mockups.svg";
import {
  Context,
  Title,
  Text,
  Content,
  ContextImage,
  Image,
} from "./ContentSection.styled";

const ContentSection = () => {
  return (
    <Context>
      <Content>
        <Title>Build The Community Your Fans Will Love</Title>
        <Text>
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </Text>
        <Button bg="#f09" color="#fff">
          Get Started For Free
        </Button>
      </Content>
      <ContextImage>
        <Image src={IllustrationMockUps} alt="IllustrationMockUps" />
      </ContextImage>
    </Context>
  );
};

export default ContentSection;
