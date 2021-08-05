import { FC } from "react";
import styled from "styled-components";

const Disaster: FC = () => {
  return (
    <Wrap>
      <Center>
        <Back>
        <Center><Title>もし災害が発生したら</Title></Center>
          <Paragraph>地震が発生した場合、まずはその場で身の安全を確保して下さい。</Paragraph>
          <Paragraph>本校舎は耐震構造になっており安全ですので、校舎内に留まり校外には出ないようお願い致します。</Paragraph>
          <Paragraph>また、火災が発生した場合には速やかに火元から離れて下さい。即座に教職員による避難案内が開始されますので、誘導に従い避難を開始して下さい。</Paragraph>
        </Back>
      </Center>
    </Wrap>
  );
}

export default Disaster

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
  margin-bottom: 2vw;
  font-size: 50px;
  display: inline-block;
  border-bottom: 10px solid #bf9d6d;
  text-align: initial;
  @media screen and (max-width: 1230px) {
    font-size: 25px;
    border-bottom: 7px solid #bf9d6d;
  }
`;

const Paragraph = styled.p`
  text-align: center;
`;
