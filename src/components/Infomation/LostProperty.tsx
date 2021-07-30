import { FC } from "react";
import styled from "styled-components";

const LostProperty: FC = () => {
  return (
    <Wrap>
      <Title>落とし物について</Title>
      <Pragraph>落とし物は総合案内所にて保管しております。お心当たりの方は総合案内所までお越し下さい。</Pragraph>
    </Wrap>
  );
}

export default LostProperty;

const Wrap = styled.div`

`;

const Title = styled.h1`

`;

const Pragraph = styled.p`

`;