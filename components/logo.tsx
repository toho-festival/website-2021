import styled from "styled-components";
import { FC } from 'react';

const LogoTOHO:FC = () => {
    return(
        <>
            <h2>今年のロゴ・大垂幕のデザイン</h2>
            <Div>
                <Img src="/logo2.jpg" />
                <Img src="/logo2.jpg" />
            </Div>
            <H3>デザイン考案者　装飾委員会委員長　内山麗央</H3>
            <H3>今回のロゴと大垂幕のデザイン感に関してコメントを書く</H3>
        </>
    )
}

export default LogoTOHO;

const Div = styled.div`
    display:flex;
    gap:15vw;
    margin-left:15vw;
`;
const Img = styled.img`
    width:25vw;
`;
const H3 = styled.h3`
    margin-left:5vw;
`;