import styled from "styled-components";
import { FC } from 'react';
import {greeting} from "../scripts/about";

const GreetingTOHO:FC = () => {
    return(
        <>
            <H2>委員長挨拶</H2>
            <Div>
                <Greeting>
                    <H3>実行委員長</H3>
                    <H3>高倉総一郎</H3>
                    <IMG>写真</IMG>
                    {
                    greeting.map(
                    ({ Ttext }) => <Greet key={ Ttext }>{ Ttext }</Greet>,
                    )
                    }
                </Greeting>
                <Greeting>
                    <H3>副実行委員長</H3>
                    <H3>澤本</H3>
                    <IMG>写真</IMG>
                    {
                    greeting.map(
                    ({ Stext }) => <Greet key={ Stext }>{ Stext }</Greet>,
                    )
                    }
                </Greeting>
                <Greeting>
                    <H3>副実行委員長</H3>
                    <H3>渡辺</H3>
                    <IMG>写真</IMG>
                    {
                    greeting.map(
                    ({ Wtext }) => <Greet key={ Wtext }>{ Wtext }</Greet>,
                    )
                    }
                </Greeting>
            </Div>
        </>
    )
}

export default GreetingTOHO;

const H2 = styled.h2`
    margin-left:3vw;
`;

const Div = styled.div`
    display:flex;
    gap:14vw;
`;
const Greeting = styled.div`
    margin-left:3vw;
`;
const H3 = styled.h3`
    font-size:1rem;
`;
const IMG = styled.div`
    background-color:black;
    color:white;
    margin-bottom:3vw;
    padding:2vw 9vw 5vw 1vw;
`;
const Greet = styled.div`
    background-color:black;
    color:white;
    margin-bottom:1vw;
    padding:2vw 9vw 20vw 1vw;
`;

