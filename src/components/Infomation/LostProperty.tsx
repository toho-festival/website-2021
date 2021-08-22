import { FC } from "react";
import styled from "styled-components";

const LostProperty: FC = () => {
  return (
    <Wrap>
      <Center>
        <Back>
      <Center><Title id="lostProperty">落とし物について</Title></Center>
      <Pragraph>落とし物は総合案内所にて保管しております。お心当たりの方は総合案内所までお越し下さい。</Pragraph>
      </Back>
      </Center>
    </Wrap>
  );
}

export default LostProperty;

const Wrap = styled.div`
  margin-top: 10vw;
  margin-bottom: 5vw;
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
    font-size: 25px;
    border-bottom: 7px solid #bf9d6d;
  }
`;

const Pragraph = styled.p`
  text-align: center;
`;