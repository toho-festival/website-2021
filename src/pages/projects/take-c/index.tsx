import { FC } from 'react';
import styled from 'styled-components';
import Greeting from './greeting';
import List from './list';
import Member from './member';

const Takec:FC = () => <div>
    <Greeting />
    <List />
    <Member />
</div>;

export default Takec; 