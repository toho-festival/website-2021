import { FC } from 'react';
import styled from 'styled-components';



const Contents:FC = () => (
  <Wrap>
    <H2>何ヲカ見ル</H2>
    <H3>A.本格ミステリーを捌く</H3>
    <H4>　ロジック一本で勝負する「本格ミステリ」の<br/>系譜やトリックの種類をご紹介</H4>
    <H3>B.紙製ブックカバー配布</H3>
    <H4>　図書委員会初の試み。何ができるかは<br/>分からないが、もらっておいて損はないはず。</H4>
  </Wrap>
)
export default Contents; 

const Wrap = styled.div`

`;
const H2 = styled.h2`
    font-size:3vw;
    margin-left:2vw;
    :first-letter{
        color:red;
    }
`;

const H3 = styled.h3`
    margin-left:15vw;
    margin-top:5vw;
    font-size:4vw;
    :first-letter{
        color:red;
    }
`;
const H4 = styled.h4`
    margin-left:15vw;
    font-size:3vw;
`;