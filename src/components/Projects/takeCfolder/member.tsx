import { FC } from 'react';
import styled from 'styled-components';



const Member:FC = () => (
  <Wrap>
    <Div>
        <Article>
            <H3>メンバー</H3>
            <H4>a</H4>
            <H4>b</H4>
            <H4>c</H4>
            <H4>d</H4>
        </Article>
        <Aside>
            <Img src="entrance-backgrund-1.jpg" alt="" />
        </Aside>
    </Div>
  </Wrap>
)
export default Member; 


const Wrap = styled.div`
    background-color:#ffcc00;
    padding: 3vw 0 2vw 0;
`;

const Div = styled.div`
    display:flex;
    margin-left: 15vw;
`;

const Article = styled.article`

`;

const H3 = styled.h3`
    font-size:5vw;
    text-align:center;
    border-bottom: 2px solid black;
`;

const H4 = styled.h4`
    border-bottom: 2px solid black;
    padding: 5px 0 5px 0;
`;

const Aside = styled.aside`

`;

const Img = styled.img`
    width:30vw;
    margin-left:20vw;
`;