import { FC } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

const Parallel:FC = () => {
  const router = useRouter();
  return (
    <Wrap>
      <Button onClick={() => router.back()}>＜元のページに戻る</Button>
      <Name>~パラレルチンアナゴ~</Name>
      <YoutubePlayer>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/BjvVg6KpZH8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </YoutubePlayer>
      <YoutubePlayer>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/RYhKku5uBaI" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </YoutubePlayer>
      <Description>バンドエリアにて活動中！皆さんに楽しんで頂けるような曲を用意したので、是非来てください。事前に原曲を聞いていただいてもらうと、もっと楽しめます。</Description>
      <SubTitle>・メンバー紹介</SubTitle>
      <MemberImage src={process.env.basePath + "/images/parallelMusicMember.jpg"} />
      <MemberList>
        <Member><Strong>加藤啓佑（key.Vo.）</Strong></Member>
        <Member><Strong>北野𣳾地（Gt.Vo.）</Strong></Member>
        <Member><Strong>村越亮太郎（Gt.）</Strong></Member>
        <Member><Strong>石坂和英（Ba.）</Strong></Member>
        <Member><Strong>渡部瑛遥（Dr.）</Strong></Member>
      </MemberList>
      <SubTitle>・曲（曲名をタップすると曲が聞けます！）</SubTitle>
      <ul>
        <Music><a href="https://www.youtube.com/watch?v=j7CDb610Bg0" target="_blank" rel="noopener noreferrer"><Strong>天体観測</Strong>　（BUMP OF CHICKEN）</a></Music>
        <Music><a href="https://www.youtube.com/watch?v=9aJVr5tTTWk" target="_blank" rel="noopener noreferrer"><Strong>ピースサイン</Strong>　（米津玄師）</a></Music>
        <Music><a href="https://www.youtube.com/watch?v=by4SYYWlhEs" target="_blank" rel="noopener noreferrer"><Strong>夜に駆ける</Strong>　（YOASOBI）</a></Music>
        <Music><a href="https://www.youtube.com/watch?v=Nxwt_s1lM04" target="_blank" rel="noopener noreferrer"><Strong>Tomorrow never knows</Strong>　（Mr.Children）</a></Music>
      </ul>
    </Wrap>
  );
}

export default Parallel;

const Wrap = styled.div`
  background-color: white;
  padding-left: 4%;
  padding-right: 4%;
  padding-top: 3%;
`;

const Name = styled.h1`
  text-align: center;
`;

const YoutubePlayer = styled.div`
  margin: 0px auto;
  width: 70%;
  aspect-ratio: 16 / 9;
  > iframe {
    width: 100%;
    height: 100%;
  }
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

const Music = styled.li`
  margin-left: 5%;
`;

const Button = styled.a`
  border: 4px solid #1a1a1a;
  margin-top: 4px;
  border-radius: 150px;
  background: #1a1a1a;
  color: #fff;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  padding: 6px;

  :hover {
    color: #1a1a1a;
    background: #fff;
  }
  @media screen and (max-width: 767px) {
    padding: 2px;
  }
`;