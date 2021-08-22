import { FC } from "react";
import styled from "styled-components";

const Evacuation: FC = () => {
  return (
    <Wrap>
      <Center>
        <Back>
          <Center><Title id="evacuation">避難について</Title></Center>
          <Pragraph>避難に関しては基本的に教職員の指示に従って、迅速に避難していただくようにお願い致します。避難場所は東グラウンドです。</Pragraph>
        </Back>
      </Center>
    </Wrap>
  );
}

export default Evacuation;

const Wrap = styled.div`
  margin-top: 10vw;
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
  }
`;

const Back = styled.div`
  padding: 5px 5px 5px 5px;
  width: 70%;
  border: 10px solid #bf9d6d;
  background-color: cornsilk;
  border-radius: 20px;
  display: inline-block;
`;

const Pragraph = styled.p`
  text-align: center;
`;