import { FC } from 'react';
import styled from 'styled-components';



const List:FC = () => (
  <Wrap>
    <H2>SET　LIST</H2>
    <Ol>
      <Li>シュガーソングとビターステップ<br/>/UNISON SQUARE GARDEN</Li>
      <Li>丸の内サディスティック<br/>/東京事変</Li>
      <H3>3曲目はお楽しみ枠ということで...！？</H3>
    </Ol>
  </Wrap>
)
export default List; 

const Wrap = styled.div`
  background-color:black;
  color:white;
`;
const H2 = styled.h2`
  font-size:5vw;
  text-align:center;
  margin-bottom:5vw;
`;
const Ol = styled.ol`

`;
const Li = styled.li`
  margin-bottom:5vw;
  margin-left:5vw;
  font-size:3vw;
`;
const H3 = styled.h3`
  margin-left:2vw;
  font-size:3vw;
`;