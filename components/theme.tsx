import styled from "styled-components";
import { FC } from 'react';
import {explain1} from "../scripts/about";

const ThemeTOHO:FC = () => {
    return(
        <>
            <h2>今年のテーマ</h2>
            <Div>
                <H4>しき</H4>
                <H1>～ 織 ～</H1>
            </Div>
            <H3>このテーマに決まった理由などを書く</H3>
        </>
    )
}

export default ThemeTOHO;

const Div = styled.div`
    
`;
const H1 = styled.h1`
    font-size:10vw;
    text-align: center
`;
const H3 = styled.h3`
    text-align: center
`;
const H4 = styled.h4`
    text-align: center
`;