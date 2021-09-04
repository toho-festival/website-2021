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
          桐朋祭は個性豊かな桐朋生が自分の趣味、特技を仲間とともに絆を深めながら作り上げた「作品」を発表する場所です。
          部活動や委員会をはじめ、同じ趣味を持つ生徒同士が集まり、参加団体として桐朋祭を盛り上げます。
          部活動の成果を発表したり、これまでにない独創的なイベントを考えたりと、どれも桐朋生が一年間かけて熟考し、磨き上げた世界に２つとない傑作ばかりです。
          桐朋生の努力の結晶をお楽しみください。        
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