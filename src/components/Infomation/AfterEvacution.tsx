import { FC } from "react";
import styled from "styled-components";

const AfterEvacution: FC = () => {
  return (
    <Wrap>
      <Back>
        <Center><Title id="afterEvacution">避難後について</Title></Center>
        <Center><p>避難誘導の終了後は教職員が指示を出しますのでその場でお待ち下さい。</p></Center>
      </Back>
    </Wrap>
  );
}

export default AfterEvacution

const Wrap = styled.div`
  margin-top: 10vw;
`;

const Back = styled.div`
  padding: 5px 5px 5px 5px;
  width: 70%;
  border: 10px solid #bf9d6d;
  background-color: cornsilk;
  border-radius: 20px;
  display: inline-block;
`;

const Center = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  padding-top: 70px;
  margin-bottom: 2vw;
  font-size: 50px;
  display: inline-block;
  border-bottom: 10px solid #bf9d6d;
  @media screen and (max-width: 1230px) {
    font-size: 25px;
    border-bottom: 7px solid #bf9d6d;
    padding-top: 37px;
  }
`;
