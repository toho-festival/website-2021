import { FC } from "react";
import styled from "styled-components";

const Disaster = () => {
  return (
    <Wrap>
      <Title>もし災害が発生したら</Title>
      <Paragraph>地震が発生した場合、まずはその場で身の安全を確保して下さい。</Paragraph>
      <Paragraph>本校舎は耐震構造になっており安全ですので、校舎内に留まり校外には出ないようお願い致します。</Paragraph>
      <Paragraph>また、火災が発生した場合には速やかに火元から離れて下さい。即座に教職員による避難案内が開始されますので、誘導に従い避難を開始して下さい。</Paragraph>
    </Wrap>
  );
}

export default Disaster

const Wrap = styled.div`

`;

const Title = styled.h1`

`;

const Paragraph = styled.p`

`;