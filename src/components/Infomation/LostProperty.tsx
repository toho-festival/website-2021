import { FC } from "react";
import styled from "styled-components";

const LostProperty: FC = () => {
  return (
    <Wrap>
      <Center><Title>落とし物について</Title></Center>
      <Pragraph>落とし物は総合案内所にて保管しております。お心当たりの方は総合案内所までお越し下さい。</Pragraph>
    </Wrap>
  );
}

export default LostProperty;

const Wrap = styled.div`
  margin-bottom: 5vw;
`;

const Center = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  margin-top: 4vw;
  margin-bottom: 2vw;
  font-size: 50px;
  display: inline-block;
  border-bottom: 10px solid #bf9d6d;
  @media screen and (max-width: 1230px) {
    font-size: 25px;
    border-bottom: 7px solid #bf9d6d;
  }
`;

const Pragraph = styled.p`
  text-align: center;
`;