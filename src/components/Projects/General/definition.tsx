import { FC } from 'react';
import styled from 'styled-components';

const Definition:FC = () => {
  return(  
    <Wrap>
      <Center><Title>一般参加団体とは？</Title></Center>
      <Arrangement>
        <Discription>{/*ここに文字を入れてはいけない*/}</Discription>
        <Discription>かくかくしかじか</Discription>
        <Discription>かくかくしかじか</Discription>
        <Discription>かくかくしかじか四角いムーブ</Discription>
      </Arrangement>
    </Wrap>
  )
}

export default Definition;

const Wrap = styled.div`
  margin-top: 10vw;
  margin-bottom: 20vw;
  text-align: center;
`;

const Center = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  display: inline-block;
  border-bottom: #bf9d6d 6px solid;
`;

const Arrangement = styled.div`
  margin-top: 3vw;
  display: inline-block;
`;

const Discription = styled.p`
  text-align: center;
  border-bottom: 1px #ddd solid;
  padding: 10px;
`;
