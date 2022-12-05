import styled from "styled-components";

export const CardStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 40px 0;
  padding: 60px;
  flex-direction: ${({ layout }) => layout || "row"};
`;

export const CardContent = styled.div`
  padding: 50px;
  width: 50%;
`;
export const Title = styled.h1`
  font-size: 2rem;
`;
export const Text = styled.p`
  margin: 20px 0;
`;
export const CardImage = styled.div`
  width: 50%;
`;
export const Image = styled.img`
  width: 100%;
`;
