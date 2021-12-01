import { FC } from 'react';
import styled from 'styled-components';



const Contents: FC = () => {
  return (
    <div>
      <Question><Red>何</Red>ヲカ<Red>見</Red>ル</Question>
      <Answer>A.本格ミステリーを捌く</Answer>
      <Introduce>　ロジック一本で勝負する「本格ミステリ」の系譜やトリックの種類をご紹介</Introduce>
      <Answer>B.紙製ブックカバー配布</Answer>
      <Introduce>　図書委員会初の試み。何ができるかは分からないが、もらっておいて損はないはず。</Introduce>
    </div>
  )
}

export default Contents;

const Question = styled.h2`
  font-size:3vw;
  margin-left:2vw;
`;

const Red = styled.span`
  color: red;
`;

const Answer = styled.h3`
  margin-left:15vw;
  margin-top:5vw;
  font-size:4vw;
  :first-letter{
    color:red;
  }
`;
const Introduce = styled.h4`
  margin-left:15vw;
  font-size:3vw;
`;