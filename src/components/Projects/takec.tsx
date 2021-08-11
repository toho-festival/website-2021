import { FC } from 'react';
import styled from 'styled-components';
import Greeting from './takeCfolder/greeting';
import List from './takeCfolder/list';
import Member from './takeCfolder/member';

const Takec:FC = () => <Wrap>
    <Greeting />
    <List />
    <Member />
</Wrap>;

export default Takec; 

const Wrap = styled.div`

`;