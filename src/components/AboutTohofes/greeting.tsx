import styled from "styled-components";
import { FC } from 'react';
import {greeting} from "~/src/scripts/about";

const GreetingTOHO:FC = () => {
    return(
      <>
        <Center><Title id="greeting">委員長挨拶</Title></Center>
        <Wrap>
          {
            greeting.map(
              ({ order, role, name, img, greet }) =><Greeting color={order}>
                <Role key={role}>{role}</Role>
                <Name>{name}</Name>
                <Img src={process.env.basePath + img}/>
                <Greet key={ greet }>{ greet }</Greet>   
              </Greeting>
            )
          }
        </Wrap>
      </>
    )
}

export default GreetingTOHO;

const Center = styled.div`
  text-align: center;
`;

const Title = styled.h2`
  margin-top: 10vw;
  margin-bottom: 4vw;
  padding-top: 70px;
  color: white;
  border-bottom: solid 5px #bf9d6d;
  display: inline-block;
`;

const Wrap = styled.div`
  display:grid;
  gap:3vw;
  grid-template-columns: 1fr 1fr 1fr;
  @media screen and (max-width:767px) { 
    grid-template-columns: 1fr 1fr ;
  }
`;
const Greeting = styled.div`
  margin-left:1vw;
  margin-right: 1vw;
  text-align: center;
  border-radius: 40px;
  @media screen and (max-width:767px) { 
    border-radius: 10px;
  }
  &[color="1"]{
    background-color: #BD8A55;
  }
  &[color="2"]{
    background-color: #61B0E2;
  }
  &[color="3"]{
    background-color: #AC75B0;
  }
  &[color="4"]{
    background-color: #FFE350;
  }
  &[color="5"]{
    background-color: #92cb97;
  }
  &[color="6"]{
    background-color: #f5a500;
  }
  &[color="7"]{
    background-color: #E3364A;
  }
  &[color="8"]{
    background-color: #9BCA54;
  }
  &[color="9"]{
    background-color: #E15097;
  }
  &[color="10"]{
    background-color: #499149;
  }
  &[color="11"]{
    background-color: #de3400;
  }
  &[color="12"]{
    background-color: #00aaff;
  }
`;

const Role = styled.h3`
  color: black;
  margin-top: 0.5vw;
  font-size:20px;
  border-bottom: 2px solid white;
  display: inline-block;
  @media screen and (max-width:767px) { 
    font-size: 13px;
  }
`;
const Name = styled.h3`
  color: black;
  margin-top: 0.5vw;
  margin-bottom: 0.5vw;
  font-size:40px;
  @media screen and (max-width:767px) { 
    font-size: 20px;
  }
`;
const Img = styled.img`
  max-width: 25vw;
  height:15vw;
  border-radius: 40px;
  @media screen and (max-width:767px) { 
    border-radius: 10px;
  }
`;
const Greet = styled.h3`
  margin-bottom:1vw;
  color: black;
  @media screen and (max-width:767px) { 
    font-size: 12px;
  }
`;

