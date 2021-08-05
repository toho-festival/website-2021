import { FC } from "react";
import styled from "styled-components";

const LostChild: FC = () => {
  return (
    <Wrap>
      <Center><Title>迷子について</Title></Center>
      <Pragraph>
        迷子については、総合案内所で対応させて頂いております。
        迷子を発見された方、お連れの方とはぐれてしまった方は総合案内所までお越し下さい。
        校内放送にて迷子の方の情報を放送致します。
      </Pragraph>
    </Wrap>
  );
}

export default LostChild;

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