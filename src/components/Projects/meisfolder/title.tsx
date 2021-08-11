import { FC } from 'react';
import styled from 'styled-components';



const Title:FC = () => (
  <>
    <H1>ー迷'sー</H1>
    <Div>
        <Img src="entrance-backgrund-1.jpg" alt="昔風からくり迷路の画像" />
        <H2>江戸時代に<br />タイムスリップ！？</H2>
    </Div>
    <H3>からくり迷路を体感せよ！！</H3>
  </>
)
export default Title; 

const H1 = styled.h1`
    font-size:10vw;
    text-align: center
`;

const H3 = styled.h3`
    margin-top:4vw;
    font-size:7vw;
    text-align: center
`;

const Div = styled.div`
    display:flex;
`;

const Img = styled.img`
    width:40vw;
    height:25vw;
    margin: 1vw 0vw 0vw 10vw;
`;

const H2 = styled.h2`
    position: relative;
    display: inline-block;
    margin: 1.5em 0 1.5em 0vw;
    padding: 1vw 0px;
    width: 30vw;
    height: 15vw;
    line-height: 6vw;
    text-align: center;
    color: #FFF;
    font-size: 3vw;
    font-weight: bold;
    background: #ffcc75;
    border-radius: 50%;
    box-sizing: border-box;
    :before{
        content: "";
        position: absolute;
        top: 50%;
        left: -25px;
        margin-top: -15px;
        border: 15px solid transparent;
        border-right: 15px solid #ffcc75;
        z-index: 0;
    }
`;