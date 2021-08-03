import { FC } from "react";
import styled from "styled-components";

const Parallel:FC = () => {
  return (
    <Wrap>
      <Name>パラレルチンアナゴ</Name>
      <SubTitle>・メンバー紹介</SubTitle>
      <MemberList>
        <Member><Strong>加藤啓介（key.Vo.）</Strong></Member>
        <Member><Strong>北野𣳾地（Gt.Vo.）</Strong></Member>
        <Member><Strong>村越亮太郎（Gt.）</Strong></Member>
        <Member><Strong>石坂和英（Ba.）</Strong></Member>
        <Member><Strong>渡部瑛遥（Dr.）</Strong></Member>
      </MemberList>
      <SubTitle>・曲</SubTitle>
      <MusicList>
        <Music><a href="https://www.youtube.com/watch?v=j7CDb610Bg0"><Strong>天体観測</Strong>　（BUMP OF CHICKEN）</a></Music>
        <Music><a href="https://www.youtube.com/watch?v=9aJVr5tTTWk"><Strong>ピースサイン</Strong>　（米津玄師）</a></Music>
        <Music><a href="https://www.youtube.com/watch?v=by4SYYWlhEs"><Strong>夜に駆ける</Strong>　（YOASOBI）</a></Music>
        <Music><a href="https://www.youtube.com/watch?v=Nxwt_s1lM04"><Strong>Tomorrow never knouws</Strong>　（Mr.Children）</a></Music>
      </MusicList>
    </Wrap>
  );
}

export default Parallel;

const Wrap = styled.div`
  background-color: white;
`;

const Name = styled.h1`
  text-align: center;
`;

const SubTitle = styled.h2`

`;

const Strong = styled.div`
  font-weight: bold;
`;

const MemberList = styled.ul`

`;

const Member = styled.li`
  color: black;
`;

const MusicList = styled.ul`

`;

const Music = styled.li`

`;