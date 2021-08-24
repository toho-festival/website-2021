import styled from "styled-components";
import { FC } from 'react';

const AboutTOHO:FC = () => {
  return(
    <>
      <Center><div><Title>桐朋祭について</Title></div></Center>
      <Center><ContentTitleAbout>桐朋祭とは</ContentTitleAbout></Center>
      <Constraction>
      <SubTitle>
        <Img src={ process.env.basePath + "/images/aboutTohoBackground.jpg"} />
      </SubTitle>
      <Content>
        <ContentTitle></ContentTitle>
        <ContentInfo>
          第70回桐朋祭委員はこのコロナ禍という状況の中でできることを模索して、内部の生徒や保護者だけでなく、外部からのお客様にも楽しんでもらえるような学園祭を目指しました。
          今年度は新たなことにも挑戦し、新しい桐朋祭をめざしました。各々の委員が協力して創り上げた桐朋祭をお楽しみください。
        </ContentInfo>
      </Content>
      </Constraction>
    </>
  )
}

export default AboutTOHO;

const Center = styled.div`
  text-align: center;
  @keyframes border_anim {
    0%{
      width: 0%;
    }
    100%{
      width: 100%;
    }
  }
  div {
    display: inline-block;
    position: relative;
    :before{
      content: '';
      position: absolute;
      left: 50%;
      bottom: 0;
      width: 0;
      transform: translateX(-50%);
      border-bottom: solid 10px #bf9d6d;
      animation: border_anim 2s forwards ease-in;
      }
    }
`;

const Title = styled.h1`
  color: white;
  font-size: 80px;
  display: inline-block;
  @media screen and (max-width:767px) { 
    font-size: 40px;
  }
`;

const Constraction = styled.div`
  @media screen and (min-width:768px) {
    display: flex;
    margin-bottom:10vw;
    margin-top: 5vw;
  }
  @media screen and (max-width:767px) { 
    margin-bottom:10vw;
    margin-top: 5vw;
  }
`;

const SubTitle = styled.article`
  margin-top: 5vw;
  margin-left: 5vw;
  width: 44%; 
  @media screen and (max-width:767px) {
    margin-left: 0vw;
    margin: auto;
    width: 70%;
    text-align: center;
  }
`;

const ContentTitleAbout = styled.h2`
  margin-top: 10vw;
  color: white;
  border-bottom: solid 5px #bf9d6d;
  display: inline-block;
`;

const ContentTitle = styled.h2`
  color: white;
  border-bottom: 1px #ddd solid;
  padding: 10px;
`;

const Img = styled.img`
  width:100%;
  color: black;
  border-radius: 40px;
  @media screen and (max-width:767px) { 
    text-align: center;
  }
`;

const Content = styled.aside`
  margin-top: 5vw;
  margin-left: 5vw;
  display: inline-block;
  width: 56%;
  color: white;
  @media screen and (max-width:767px) { 
    display: block;
    margin-left: 0vw;
    margin: auto;
    width: 80%;
  }
`;

const ContentInfo = styled.h3`
  text-align: center;
  border-bottom: 1px #ddd solid;
  padding: 10px;
`;