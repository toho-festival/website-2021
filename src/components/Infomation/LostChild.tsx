import { FC } from "react";
import styled from "styled-components";

const LostChild: FC = () => {
  return (
    <Wrap>
      <Center>
        <Back>
          <Center><Title id="lostChild">迷子について</Title></Center>
          <Pragraph>
            迷子については、総合案内所で対応させて頂いております。
            迷子を発見された方、お連れの方とはぐれてしまった方は総合案内所までお越し下さい。
            校内放送にて迷子の方の情報を放送致します。
          </Pragraph>
        </Back>
      </Center>
    </Wrap>
  );
}

export default LostChild;

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
  }
`;
const Pragraph = styled.p`
  text-align: center;
`;