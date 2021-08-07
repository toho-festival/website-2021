import { FC } from 'react';
import styled from 'styled-components';

type IsMain = {
  isMain:boolean;
}

const Tekken: FC = () => {
  return(
    <Layout>
      <Title>〜てっけん！〜</Title>
      <Img1 src="/entrance-backgrund-1.jpg" isMain={true}></Img1>
      <About>鉄研とは？中高合同でジオラマ制作や研究を行っています。夏には部員たちで行き先を決めた合宿もしています。</About>
      <DisplayContents>
        <SubTitle>展示内容</SubTitle>
        <Content>・クイズ</Content>
        <Content>・巨大ジオラマ</Content>
        <Content>・運転シュミレーター</Content>
        <Content>・発車ベル</Content>
      </DisplayContents>
      <Where><BigLetter>A</BigLetter>教室</Where>
      <Img2 src="/entrance-backgrund-1.jpg" isMain={false}></Img2>
      <Explain>巨大ジオラマを中心に発車ベル体験など何時間も楽しめる空間となっています。</Explain>
      <Where><BigLetter>B</BigLetter>教室</Where>
      <Img3 src="/entrance-backgrund-1.jpg" isMain={false}></Img3>
      <Explain>運転シュミレーター、クイズなど体験できるものを用意し、研究報告として部報の配布をを行っています。</Explain>
      <Notice><SubTitle>＜皆様に言いたいこと＞</SubTitle><Top>桐朋祭にお越しの際は</Top><Bottom>是非足を運んでみてください！</Bottom></Notice>
    </Layout>
  );
}

export default Tekken;

const Layout = styled.article`
  background-color:#000000;
  color:white;
  font-family: "ヒラギノ角ゴシック";
`;

const Title = styled.h1`
  text-align:center;
`;

const Img1 = styled.img<IsMain>`
  float: ${(props) => props.isMain ? "right" : "left"};
  width: ${(props) => props.isMain ? 40:20}%;
`;

const About = styled.p`
  text-decoration: underline;
`;

const DisplayContents = styled.ul`
`;

const Content = styled.li`
  text-decoration: underline;
  display: flex;
`;

const Where = styled.h2`
  clear: both;
  font-size:1rem;
`;

const BigLetter = styled.i`
  font-size:1.5rem;
`;

const Img2 = Img1.withComponent('img')

const Explain = styled.p`
  text-decoration: underline;
`;

const Notice = styled.section`
  clear: both;
  font-size:1.5rem;
`;

const Img3 = Img1.withComponent('img')

const SubTitle = styled.h3`
  left:0;
`;

const Top = styled.p`
  margin-left:2rem;
`;

const Bottom = styled.p`
  margin-left:4rem;
`;

