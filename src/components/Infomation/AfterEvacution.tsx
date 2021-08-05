import { FC } from "react";
import styled from "styled-components";

const AfterEvacution: FC = () => {
  return (
    <Wrap>
      <Center><Title>避難後について</Title></Center>
      <Pragraph>避難誘導の終了後は教職員が指示を出しますのでその場でお待ち下さい。</Pragraph>
    </Wrap>
  );
}

export default AfterEvacution

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