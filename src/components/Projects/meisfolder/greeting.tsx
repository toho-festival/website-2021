import { FC } from 'react';
import styled from 'styled-components';



const Greeting:FC = () => (
  <>
    <H2>
        昨年の中３学年参加委員が再び集結！！<br/>どんな方でも歓迎！ぜひ来てください！！
    </H2>
    <H3>製作：</H3>
  </>
)
export default Greeting; 

const H2 = styled.h2`
    margin-top:5vw;
    text-align:center;
`;

const H3 = styled.h3`
    text-align:center;
`;