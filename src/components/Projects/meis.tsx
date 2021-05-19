import { FC } from 'react';
import styled from 'styled-components';
import Title from './meis/title';
import Remarkable from './meis/remarkable';
import Greeting from './meis/greeting';

const Meis:FC = () => <Wrap>
    <Title />
    <Remarkable />
    <Greeting />
</Wrap>;

export default Meis; 

const Wrap = styled.div`
  background-color: #47763c;
`;