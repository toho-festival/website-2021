import { FC } from 'react';
import styled from 'styled-components';

const List:FC = () => 
  <Wrap>
    <ListTitle>SET　LIST</ListTitle>
    <MusicList>
      <Content>シュガーソングとビターステップ/UNISON SQUARE GARDEN</Content>
      <Content>丸の内サディスティック/東京事変</Content>
      <Content>3曲目はお楽しみ枠ということで...！？</Content>
    </MusicList>
  </Wrap>

export default List; 

const Wrap = styled.div`
  background-color:black;
  color:white;
`;

const ListTitle = styled.h2`
  font-size:5vw;
  text-align:center;
  margin-bottom:5vw;
`;

const MusicList = styled.ol`

`;

const Content = styled.li`
  margin-bottom:5vw;
  margin-left:5vw;
  font-size:3vw;
`;

//最後のひとつだけbottom必要ないなら条件分岐とかしてね