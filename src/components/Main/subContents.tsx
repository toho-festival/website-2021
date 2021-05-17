import { FC } from 'react';
import styled from 'styled-components';

type SubSide = {
  side: 'right' | 'left';
}

const SubContents: FC = () =>
  <>
    <SubContent><Greetings src='greetings.png' side='left'></Greetings></SubContent><Reset/>
    <SubContent><Schedule src='schedule.png' side='right'></Schedule></SubContent><Reset/>
    <SubContent><Pamphlet src='pamphlet.png' side='left'></Pamphlet></SubContent><Reset/>
    <SubContent><Covid19 src='covid19.png' side='right'></Covid19></SubContent><Reset/>
    <SubContent><Blog src='blog.png' side='left'></Blog></SubContent><Reset/>
  </>;

export default SubContents;

const SubContent = styled.section`

`;

const Greetings = styled.img<SubSide>`
  float: ${ (props) => props.side === 'right' ? 'right' : 'left' };
  width: 25%;
  margin-right: ${ (props) => props.side === 'left' ? null : 15 }%;
  margin-left: ${ (props) => props.side === 'left' ? 15 : null }%;
`;

const Reset = styled.div`
  clear: both;
`;

const Schedule = Greetings.withComponent('img');
const Pamphlet = Greetings.withComponent('img');
const Covid19  = Greetings.withComponent('img');
const Blog     = Greetings.withComponent('img');