import { FC } from 'react';
import styled from 'styled-components';



const Greeting:FC = () => 
  <Wrap>
    <Title>企画部長より<Red>一言</Red></Title>
    <Greetings>多くの高一の部員を桐朋祭委員に奪われ、続投するメンバーが二人という状況から始まった文化祭。この執筆時点（三月九日）では何が起こるかわかりません。ここに書いてあることは全て予定です。</Greetings>
  </Wrap>

export default Greeting; 

const Wrap = styled.div`
  margin-top: 8vw;
  margin-bottom: 8vw;
`;

const Title = styled.h2`
  font-size:4vw;
  margin-left:5vw;
`;

const Red = styled.span`
  color: red;
`;

const Greetings = styled.h3`
  font-size:2vw;
  margin-left:7vw;
`;