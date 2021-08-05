import { FC } from "react";
import styled from "styled-components";

const SuspiciousObject: FC = () => {
  return (
    <Wrap>
      <Center><Title>不審物について</Title></Center>
      <Pragraph>もし校内で持ち主の不明なものや不審に思われるものがありましたら、総合案内所までご連絡下さい。</Pragraph>
    </Wrap>
  );
}

export default SuspiciousObject;

const Wrap = styled.div`

`;

const Center = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  margin-bottom: 2vw;
  margin-top: 4vw;
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