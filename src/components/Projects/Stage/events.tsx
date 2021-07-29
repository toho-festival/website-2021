import { FC } from 'react';
import styled from 'styled-components';



const Events:FC = () => 
  <>
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

export default Events;

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