import { FC } from 'react';
import styled from 'styled-components';



const Exhibition:FC = () => 
  <>
    <Title>
      <Colmn>
        <Exhibiting src={process.env.basePath + "/images/newExhibit.png"} alt="展示企画の画像" />
      </Colmn>
      <Categoly>
        <CategolyName>　展示企画</CategolyName>
        <OnePoint>　個性の爆発</OnePoint>
        <CategolyDiscriptionTitle>展示企画について</CategolyDiscriptionTitle>
        <Sentence>あああああああああああああああああああああああ</Sentence>
      </Categoly>
    </Title>
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

`;

const Categoly = styled.aside`
    margin-top:5vw;
`;

const CategolyName = styled.h2`
    color:orange;
`;

const Title = styled.div`
    display:flex;
    margin-top: 10vw;
`;

const OnePoint = styled.h2`

`;

const CategolyDiscriptionTitle = styled.h4`
    margin-top:5vw;
`;

const Sentence = styled.div`

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
  color: black;
`;