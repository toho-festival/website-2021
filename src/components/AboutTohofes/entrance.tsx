import styled from "styled-components";
import { FC } from 'react';
import {explain1} from "~/scripts/about"

const AboutTOHO:FC = () => {
  return(
    <>
      <Title>桐朋祭について</Title>
      <Constraction>
      <SubTitle>
        <ContentTitle>桐朋祭とは</ContentTitle>
        <Img>写真</Img>
      </SubTitle>
      <Content>
        {
          explain1.map(
            ({ title }) => <ContentTitle key={ title }>{ title }</ContentTitle>,
          )
        }
        {
          explain1.map(
            ({ info }) => <ContentInfo key={ info }>{ info }</ContentInfo>,
          )
        }
      </Content>
      </Constraction>
    </>
  )
}

export default AboutTOHO

const Title = styled.h1`
  font-size: 50px;
  :first-letter{
    font-size:80px;
    color:orange;
  }
  border-bottom: 4px solid #0e4e62;
  @media screen and (max-width:767px) { 
    :first-letter{
      font-size: 15vw;
      color:orange;
    }
  }
`;

const Constraction = styled.div`
  @media screen and (min-width:768px) {
    display: flex;
    margin-bottom:32.5vh;
  }
  @media screen and (max-width:767px) { 
    margin-bottom:32.5vh;
  }
`;

const SubTitle = styled.article`
  margin-top: 5vh;
  margin-left: 5vh;
  width: 44%;
  @media screen and (max-width:767px) { 
    
  }
`;

const ContentTitle = styled.h2`

`;

const Img = styled.div`
  background-color:black;
  height:200%;
  width:100%;
  color: white;
  @media screen and (max-width:767px) { 
    
  }
`;

const Content = styled.aside`
  margin-top: 10vh;
  margin-left: 5vh;
  width: 56%;
  @media screen and (max-width:767px) { 
    
  }
`;

const ContentInfo = styled.h3`
  
`;