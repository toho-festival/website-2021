import { FC } from 'react';
import styled from 'styled-components';



const Greeting:FC = () => (
  <Wrap>
    <H1>TAKE C</H1>
    <Div>
        <Article>
            <Img src="entrance-backgrund-1.jpg" alt="" />
        </Article>
        <Aside>
            <H2first>どうも！昨年１０月位に</H2first><H2>ゆる～くできた、TAKE Cと</H2><H2>申します！音楽初心者ばかりなのに</H2><H2>最初の曲でシュガソンやったりと迷走しています。</H2><H2>ちょっとでも気になったら是非！遊びに来てください！</H2>
        </Aside>
    </Div>
  </Wrap>
)

export default Greeting;


const Wrap = styled.div`
    background-color:#ffcc00;
`;
const H1 = styled.h1`
    font-size:10vw;
    text-align:center;
`;
const Div = styled.div`
    display:flex;
`;
const Article = styled.article`
    margin-left:5vw;
    margin-right:5vw;
`;
const Img = styled.img`
    width:30vw;
`;
const Aside = styled.aside`
    
`;
const H2first = styled.h2`
    border-bottom:2px solid black;
    font-size:2vw;
    :first-letter{
        font-size:4vw;
    }
`;
const H2 = styled.h2`
    border-bottom:2px solid black;
    font-size:2vw;
`;