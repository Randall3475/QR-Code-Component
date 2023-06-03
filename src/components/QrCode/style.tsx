import styled from 'styled-components';

export const Card = styled.article`
  background-color: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  max-width: 320px;
  max-height: 497px;
  padding-inline: 16px;
  padding-block: 16px 40px;
`;

export const Image = styled.img`
  max-width: 288px;
  max-height: 288px;
  border-radius: 10px;
`;

export const Heading = styled.h1`
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  text-align: center;
  color: #1F314F;
  margin-block: 24px 16px;
`;

export const Paragraph = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.1875px;
  color: #7D889E;
  padding-inline: 16px;
`;
