import { FC } from "react";
import styled from "styled-components";

const SuspiciousObject: FC = () => {
  return (
    <Wrap>
      <Title>不審物について</Title>
      <Pragraph>もし校内で持ち主の不明なものや不審に思われるものがありましたら、総合案内所までご連絡下さい。</Pragraph>
    </Wrap>
  );
}

export default SuspiciousObject;

const Wrap = styled.div`

`;

const Title = styled.h1`

`;

const Pragraph = styled.p`

`;