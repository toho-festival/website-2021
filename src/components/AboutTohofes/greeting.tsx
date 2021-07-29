import styled from "styled-components";
import { FC } from 'react';
import {greeting} from "~/scripts/about";

const GreetingTOHO:FC = () => {
    return(
      <>
        <Title>委員長挨拶</Title>
        <Wrap>
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
        </Wrap>
      </>
    )
}

export default GreetingTOHO;

const Title = styled.h2`
  margin-left:3vw;
`;

const Wrap = styled.div`
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

