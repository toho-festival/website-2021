import { FC } from 'react';
import styled from 'styled-components';
import Definition from './definition';
import Events from './events'


const Stage:FC<{title: string}> = ({title}) => 
  <Wrap>
    <Center><Title>{title}</Title></Center>
    <Definition />
    <Events />
  </Wrap>

export default Stage;

const Wrap = styled.div`
  margin-top: 10vw;
  margin-bottom: 30vw;
  text-align: center;
`;

const Center = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  display: inline-block;
  border-bottom: #bf9d6d 6px solid;
  //a
`;