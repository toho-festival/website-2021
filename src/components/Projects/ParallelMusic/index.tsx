import { FC } from "react";
import styled from "styled-components";

const Parallel:FC = () => {
  return (
    <Wrap>
      <Name>~パラレルチンアナゴ~</Name>
      <Description>バンドエリアにて活動中！皆さんに楽しんで頂けるような曲を用意したので、是非来てください。事前に原曲を聞いていただいてもらうと、もっと楽しめます。</Description>
      <SubTitle>・メンバー紹介</SubTitle>
      <MemberImage src={process.env.basePath + "/images/parallelMusicMember.jpg"} />
      <MemberList>
        <Member><Strong>加藤啓介（key.Vo.）</Strong></Member>
        <Member><Strong>北野𣳾地（Gt.Vo.）</Strong></Member>
        <Member><Strong>村越亮太郎（Gt.）</Strong></Member>
        <Member><Strong>石坂和英（Ba.）</Strong></Member>
        <Member><Strong>渡部瑛遥（Dr.）</Strong></Member>
      </MemberList>
      <SubTitle>・曲（曲名をタップすると曲が聞けます！）</SubTitle>
      <MusicList>
        <Music><a href="https://www.youtube.com/watch?v=j7CDb610Bg0" target="_blank" rel="noopener noreferrer"><Strong>天体観測</Strong>　（BUMP OF CHICKEN）</a></Music>
        <Music><a href="https://www.youtube.com/watch?v=9aJVr5tTTWk" target="_blank" rel="noopener noreferrer"><Strong>ピースサイン</Strong>　（米津玄師）</a></Music>
        <Music><a href="https://www.youtube.com/watch?v=by4SYYWlhEs" target="_blank" rel="noopener noreferrer"><Strong>夜に駆ける</Strong>　（YOASOBI）</a></Music>
        <Music><a href="https://www.youtube.com/watch?v=Nxwt_s1lM04" target="_blank" rel="noopener noreferrer"><Strong>Tomorrow never knouws</Strong>　（Mr.Children）</a></Music>
      </MusicList>
    </Wrap>
  );
}

export default Parallel;

const Wrap = styled.div`
  background-color: white;
  padding-left: 4%;
  padding-right: 4%;
`;

const Name = styled.h1`
  text-align: center;
`;

const Description = styled.div`
  margin-right: 3%;
  background: linear-gradient(transparent 90%, #000000 0%);
  display: inline;
`;

const SubTitle = styled.h2`
  clear: left;
`;

const MemberImage = styled.img`
  float: left;
  width: 50%;
`;

const Strong = styled.strong`
  font-weight: bold;
`;

const MemberList = styled.ul`
  list-style: none;
`;

const Member = styled.li`
  color: black;
`;

const MusicList = styled.ul`

`;

const Music = styled.li`
  margin-left: 5%;
`;