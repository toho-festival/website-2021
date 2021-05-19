import { FC } from 'react';
import styled from 'styled-components';
import Definition from './definition';
import Events from './events'


const Stage:FC<{title: string}> = ({title}) => (
  <>
    <H1>{title}</H1>
    <Definition />
    <Events />
  </>
)

export default Stage;

const H1 = styled.h1`
  //a
`;