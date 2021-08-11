import styled from "styled-components";
import { FC } from 'react';
import {greeting} from "~/src/scripts/about";

const GreetingTOHO:FC = () => {
    return(
        <>
            <H2>委員長挨拶</H2>
            <Div>
                {
                    greeting.map(
                    ({ role, name, img, greet }) =><Greeting>
                
                        <Role>{role}</Role>
                        <Name>{name}</Name>
                        <Img src={img}/>
                        <Greet key={ greet }>{ greet }</Greet>
                     
                    </Greeting>
                    )
                }
            </Div>
        </>
    )
}

export default GreetingTOHO;

const H2 = styled.h2`
    margin-left:3vw;
`;

const Div = styled.div`
    display:grid;
    gap:5vw;
    grid-template-columns: 1fr 1fr 1fr;
`;
const Greeting = styled.div`
    margin-left:3vw;
`;

const Role = styled.h3`
    font-size:0.8rem;
`;
const Name = styled.h3`
    font-size:0.8rem;
`;
const Img = styled.img`
    max-width: 25vw;
    height:15vw;
`;
const Greet = styled.h3`
    margin-bottom:1vw;
`;

