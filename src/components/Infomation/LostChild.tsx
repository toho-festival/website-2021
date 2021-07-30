import { FC } from "react";
import styled from "styled-components";

const LostChild: FC = () => {
  return (
    <Wrap>
      <Title>迷子について</Title>
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

const Title = styled.h1`

`;

const Pragraph = styled.p`

`;