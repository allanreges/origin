import styled from 'styled-components';

export const Title = styled.h1`
  color: #1B31A8;
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  margin: 32px 0 24px 0;

  span {
      font-weight: bold;
  }

  @media (min-width: 720px) {
    font-size: 20px;
    margin: 48px 0 24px 0;
  }
`;