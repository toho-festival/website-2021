import { FC } from 'react';
import styled from 'styled-components';



const Exhibition:FC = () => 
  <>
    <Title>
      <Colmn>
        <div><Exhibiting src={process.env.basePath + "/images/newExhibit.png"} alt="展示企画の画像" /></div>
      </Colmn>
      <Categoly>
        <CategolyName>　展示企画</CategolyName>
        <OnePoint>　個性の爆発</OnePoint>
      </Categoly>
    </Title>
    <Description>
      <Center><CategolyDiscriptionTitle>展示企画について</CategolyDiscriptionTitle></Center>
      <Arrangement>
        <Sentence>{/*ここに文字を入れてはいけない。29文字を超えないように。*/}</Sentence>
        <Sentence>あああああああああああああああああああああああああああああ</Sentence>
        <Sentence>あああああああああああああああああああああああああああああ</Sentence>
      </Arrangement>
    </Description>
    <Contents>
      <Project href=""><Img src={ process.env.basePath + "/images/newEntrance-background-1.jpg"} /><Name>Sample</Name></Project>
      <Project href=""><Img src={ process.env.basePath + "/images/newEntrance-background-1.jpg"} /><Name>Sample</Name></Project>
      <Project href=""><Img src={ process.env.basePath + "/images/newEntrance-background-1.jpg"} /><Name>Sample</Name></Project>
      <Project href=""><Img src={ process.env.basePath + "/images/newEntrance-background-1.jpg"} /><Name>Sample</Name></Project>
      <Project href=""><Img src={ process.env.basePath + "/images/newEntrance-background-1.jpg"} /><Name>Sample</Name></Project>
      <Project href=""><Img src={ process.env.basePath + "/images/newEntrance-background-1.jpg"} /><Name>Sample</Name></Project>
      <Project href=""><Img src={ process.env.basePath + "/images/newEntrance-background-1.jpg"} /><Name>Sample</Name></Project>
      <Project href=""><Img src={ process.env.basePath + "/images/newEntrance-background-1.jpg"} /><Name>Sample</Name></Project>
      <Project href=""><Img src={ process.env.basePath + "/images/newEntrance-background-1.jpg"} /><Name>Sample</Name></Project>
    </Contents>
  </>

export default Exhibition;

const Exhibiting = styled.img`
    width: 20vw;
    @media screen and (max-width: 767px) {
    width:30vw;
    }
`;

const Colmn = styled.article`
margin-right: 2vw;
  div{
    transition-duration: 0.3s;
    :hover{
      transform: scale(1.05);
      transition-duration: 0.3s;
    }
  }
  @media screen and (max-width: 767px) {
    margin-right: 0vw;
    div{
      transition-duration: 0s;
      :hover{
        transform: scale(1);
        transition-duration: 0s;
      }
    }
  }
`;

const Categoly = styled.aside`
  margin-top:5vw;
`;

const Description = styled.div`
  margin-top:10vw;
  text-align: center;
`;

const Center = styled.div`
  text-align: center;
`;

const CategolyName = styled.h2`
  color: #FBB03B;
  opacity: .8;
  background: -webkit-linear-gradient(bottom, #ffffdb, #a16422);
  background: linear-gradient(to top, #ffffdb, #a16422);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  :hover{
    text-shadow: 0 0 15px rgba(250, 250, 214, 0.3),
    0 0 15px rgba(250, 250, 214, 0.3), 0 0 15px rgba(250, 250, 214, 0.3),
    0 0 15px rgba(250, 250, 214, 0.3);
  }
`;

const Title = styled.div`
  display:flex;
  margin-top: 15vw;
  margin-right: 5vw;
  justify-content: center;
`;

const OnePoint = styled.h2`
  @media screen and (max-width: 767px) {
    font-size:20px;
  }
`;

const Arrangement = styled.div`
  margin-bottom: 3vw;
  display: inline-block;
`;

const CategolyDiscriptionTitle = styled.h4`
  margin-bottom: 1.5vw;
  border-bottom: #bf9d6d 2px solid;
  display: inline-block;
`;

const Sentence = styled.div`
  border-bottom: 1px #ddd solid;
  padding: 10px;
  text-align: center;
  @media screen and (max-width: 767px) {
    font-size:10px;
  }
`;

const Contents = styled.div`
  margin: 0 auto;
  overflow: hidden;
  display:grid;
  grid-template-columns:repeat(3, 1fr);
  gap: 1vw;
`;

const Project = styled.a`
  :hover{
    opacity: 0.6;
    transition-duration: 0.3s;
  }
  position: relative;
`;

const Img = styled.img`
  width: 100%;
  cursor: pointer;
  transition-duration: 0.3s;
`;

const Name = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%,-50%);
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  margin:0;
  padding:0;
  color: white;
`;