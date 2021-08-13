import { FC } from 'react';
import styled from 'styled-components';
import Title from './title';
import Contents from './contents';
import Greeting from './greeting';

const Books:FC = () => <Wrap>
    <Title />
    <Contents />
    <Greeting />
</Wrap>;

export default Books; 

const Wrap = styled.div`
  background-color: white;
  font-family: 'MS Mincho';
`;