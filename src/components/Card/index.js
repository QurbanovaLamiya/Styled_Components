import {
  CardContent,
  CardImage,
  CardStyled,
  Image,
  Text,
  Title,
} from "./Card.styled";

const Card = ({ id, title, body, image }) => {
  return (
    <CardStyled layout={id % 2 === 0 && "row-reverse"}>
      <CardContent>
        <Title>{title}</Title>
        <Text>{body}</Text>
      </CardContent>
      <CardImage>
        <Image src={image} alt={title} />
      </CardImage>
    </CardStyled>
  );
};

export default Card;
