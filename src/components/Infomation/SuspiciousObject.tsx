import { FC } from "react";
import styled from "styled-components";

const SuspiciousObject: FC = () => {
  return (
    <Wrap>
      <Center>
        <Back>
          <Center><Title id="suspiciousObject">不審物について</Title></Center>
          <Pragraph>もし校内で持ち主の不明なものや不審に思われるものがありましたら、総合案内所までご連絡下さい。</Pragraph>
        </Back>
      </Center>
    </Wrap>
  );
}

export default SuspiciousObject;

const Wrap = styled.div`
  margin-top: 10vw;
`;

const Center = styled.div`
  text-align: center;
`;

const Back = styled.div`
  padding: 5px 5px 5px 5px;
  width: 70%;
  border: 10px solid #bf9d6d;
  background-color: cornsilk;
  border-radius: 20px;
  display: inline-block;
`;

const Title = styled.h1`
  padding-top: 70px;
  margin-bottom: 2vw;
  font-size: 50px;
  display: inline-block;
  border-bottom: 10px solid #bf9d6d;
  @media screen and (max-width: 1230px) {
    padding-top: 37zpx;
    font-size: 25px;
    border-bottom: 7px solid #bf9d6d;
  }
`;

const Pragraph = styled.p`
  text-align: center;
`;