import { FC } from 'react';
import styled from 'styled-components';



const Greeting:FC = () => (
  <Wrap>
    <H2>企画部長より一言</H2>
    <H3>多くの高一の部員を桐朋祭委員に奪われ、続投するメン<br/>バーが二人という状況から始まった文化祭。この執筆時点<br/>（三月九日）では何が起こるかわかりません。ここに書いてあること<br/>は全て予定です。</H3>
  </Wrap>
)
export default Greeting; 

const Wrap = styled.div`
    margin-top: 8vw;
    margin-bottom: 8vw;
`;

const H2 = styled.h2`
    font-size:4vw;
    margin-left:5vw;
`;
const H3 = styled.h3`
    font-size:2vw;
    margin-left:7vw;
`;