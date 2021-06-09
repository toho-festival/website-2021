import { FC } from 'react';
import styled from 'styled-components';

import Title from './meisfolder/title';
import Remarkable from './meisfolder/remarkable';
import Greeting from './meisfolder/greeting';


const Meis:FC = () => <Wrap>
    <Title />
    <Remarkable />
    <Greeting />
</Wrap>;

export default Meis; 

const Wrap = styled.div`
  background-color: #47763c;
`;