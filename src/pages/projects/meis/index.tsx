import { FC } from 'react';
import styled from 'styled-components';

import Title from './title';
import Remarkable from './remarkable';
import Greeting from './greeting';

const Meis:FC = () => <Wrap>
    <Title />
    <Remarkable />
    <Greeting />
</Wrap>;

export default Meis; 

const Wrap = styled.div`
  background-color: #47763c;
  padding-top: 3%;
  padding-left: 3%;
  padding-right: 3%;
`;