import { FC } from 'react';
import styled from 'styled-components';



const Title:FC = () => (
  <Wrap>
    <H3>桐朋中学・高等学校</H3>
    <H1>図書委員会</H1>
    <H2>於　〇〇〇</H2>
  </Wrap>
)
export default Title;

const Wrap = styled.div`

`;
const H3 = styled.h3`
    font-size: 3vw;
    text-align:center;
`;
const H1 = styled.h1`
    font-size:10vw;
    text-align:center;
`;
const H2 = styled.h2`
    color:red;
    font-size:6vw;
    text-align:center;
    margin-top: 5vw;
    :first-letter{
        color:black;
    }
`;
