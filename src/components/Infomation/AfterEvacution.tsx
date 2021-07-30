import { FC } from "react";
import styled from "styled-components";

const AfterEvacution = () => {
  return (
    <Wrap>
      <Title>避難後について</Title>
      <Pragraph>避難誘導の終了後は教職員が指示を出しますのでその場でお待ち下さい。</Pragraph>
    </Wrap>
  );
}

export default AfterEvacution

const Wrap = styled.div`

`;

const Title = styled.h1`

`;

const Pragraph = styled.p`

`;