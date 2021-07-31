import { FC } from 'react';
import styled from 'styled-components';

const Definition:FC = () => {

  return(  
    <>
      <Title>
        <Colmn>
          <div><Stage src={ process.env.basePath + "/images/newStage.png"} alt="ステージの画像" /></div>
        </Colmn>
        <Categoly>
          <CategolyName>　ステージ企画</CategolyName>
          <Discription>　 ステージ企画━それは、～～～である。</Discription>
          <Discription>　 かくかくしかじか</Discription>
          <Discription>　 かくかくしかじか四角いムーブ</Discription>
        </Categoly>
      </Title>
    </>
  );
}

export default Definition;

const Title = styled.div`
  display:flex;
  margin-top: 10vw;
  margin-bottom: 3vw;
  justify-content: center;
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

const Stage = styled.img`
    width: 20vw;
    @media screen and (max-width: 767px) {
    width:30vw;
    }
`;


const CategolyName = styled.h1`
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

const Discription = styled.p`
  @media screen and (max-width: 767px) {
    font-size:10px;
  }
`;
