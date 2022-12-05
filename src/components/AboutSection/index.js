import Card from "../Card";
import data from "../../data/CardData";
import { Section } from "./About.styled";

const AboutSection = () => {
  return (
    <Section>
      {data.map((item) => <Card key={item.id} {...item} />)}
    </Section>
  );
};

export default AboutSection;
