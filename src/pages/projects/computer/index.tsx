import { FC } from 'react';
import styled from 'styled-components';


const Computer:FC = () => <Wrap>
    <ClubName>～コンピューター部～</ClubName>
    <Center>
      <ImageTop src={process.env.basePath + "/images/tcc3.png"} alt="TCCの画像" />
    </Center>
    <TCC src={process.env.basePath + "/images/tcc5.png"} alt="コンピュータ部のアイコン" />
    <SubTitle>コンピューター部とは？</SubTitle>   
    <Description>
      <p>文字通り、コンピューターを使用した活動を行っている部活です。</p>
      <SubTitle>何をしているの？</SubTitle>
      <p>ゲームや音楽を作ったり、コンピューターで絵をかいていたりします。</p>
      <SubTitle>桐朋祭では何をするの？</SubTitle>
      <p>部員作のゲームを展示しています。興味のある方は是非いらしてください！ </p>
    </Description>
    <p>　</p>
    <p>　</p>
    <Comment>それでは、数学教室でお待ちしています！</Comment>
    <SubTitle>部員が製作した絵</SubTitle>
    <CreateImage src={process.env.basePath + "/images/tcc2.jpg"} alt="生徒が作成した絵" />
</Wrap>;

export default Computer; 

const backGroundUrl = process.env.basePath + "/images/tcc1.png";

const Wrap = styled.div`
  background-image: url(${backGroundUrl});
  color: white;
  padding-left: 5%;
`;

const ClubName = styled.h1`

`;

const ImageTop = styled.img`
  text-align: center;
  width:50%;
`;

const Center = styled.div`
  text-align: center;
`;

const SubTitle = styled.h2`
  font-weight: bold;
`;

const Description = styled.div`
  clear: both;
`;

const Comment = styled.p`
  font-size: 50px;
  @media screen and (max-width:767px) { 
    font-size: 30px;
  }
  font-style: oblique;
`;

const TCC = styled.img`
  margin-right: 30%;
  width: 10%;
  float: right;
`;

const CreateImage = styled.img`
  width:60%;
`;