import { FC } from 'react';
import styled from 'styled-components';
import Title from './booksfolder/title';
import Contents from './booksfolder/contents';
import Greeting from './booksfolder/greeting';

const Books:FC = () => <Wrap>
    <Title />
    <Contents />
    <Greeting />
</Wrap>;

export default Books; 

const Wrap = styled.div`

`;