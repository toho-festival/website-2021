import { FC } from "react";
import styled from "styled-components";

const Evacuation: FC = () => {
  return (
    <Wrap>
      <Title>避難について</Title>
      <Pragraph>避難に関しては基本的に教職員の指示に従って、迅速に避難していただくようにお願い致します。避難場所は東グラウンドです。</Pragraph>
    </Wrap>
  );
}

export default Evacuation;

const Wrap = styled.div`

`;

const Title = styled.h1`

`;

const Pragraph = styled.p`

`;