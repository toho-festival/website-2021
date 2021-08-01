import styled from "styled-components";
import { FC } from 'react';
import {explain1} from "~/src/scripts/about"

const AboutTOHO:FC = () => {
    return(
        <>
        <H1>桐朋祭について</H1>
        <Constraction>
          <Article>
             <H2>桐朋祭とは</H2>
             <Img>写真</Img>
          </Article>
          <Aside>
            {
                explain1.map(
                ({ title }) => <H2 key={ title }>{ title }</H2>,
                )
            }
            {
                explain1.map(
                ({ info }) => <H3 key={ info }>{ info }</H3>,
                )
            }
          </Aside>
        </Constraction>
        </>
    )
}

export default AboutTOHO

const H1 = styled.h1`
    font-size: 50px;
    :first-letter{
        font-size:80px;
        color:orange;
    }
    border-bottom: 4px solid #0e4e62;
    @media screen and (max-width:767px) { 
        :first-letter{
            font-size: 15vw;
            color:orange;
        }
    }
`;

const Constraction = styled.div`
    @media screen and (min-width:768px) {
        display: flex;
        margin-bottom:32.5vh;
    }
    @media screen and (max-width:767px) { 
        margin-bottom:32.5vh;
    }
`;

const Article = styled.article`
    margin-top: 5vh;
    margin-left: 5vh;
    width: 44%;
    @media screen and (max-width:767px) { 
        
    }
`;

const H2 = styled.h2`

`;

const Img = styled.div`
    background-color:black;
    height:200%;
    width:100%;
    color: white;
    @media screen and (max-width:767px) { 
        
    }
`;

const Aside = styled.aside`
    margin-top: 10vh;
    margin-left: 5vh;
    width: 56%;
    @media screen and (max-width:767px) { 
        
    }
`;

const H3 = styled.h3`

`;