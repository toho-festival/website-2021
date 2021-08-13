import { FC } from 'react';
import styled from 'styled-components';
import Greeting from './greeting';
import List from './list';
import Member from './member';

const Takec:FC = () => <Wrap>
    <Greeting />
    <List />
    <Member />
</Wrap>;

export default Takec; 

const Wrap = styled.div`

`;