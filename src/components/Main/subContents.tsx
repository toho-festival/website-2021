import { FC } from 'react';
import styled from 'styled-components';
import Image from 'next/image'

type SubSideAndMarginTop = {
  side: 'right' | 'left';
  top: number;
}

const SubContents: FC = () =>
  <>
    <SubContent><Greetings side='left' top={ 10 }><Image src='/images/greetings.png' width={17} height={17} layout='responsive'/></Greetings></SubContent><Reset/>
    <SubContent><Schedule side='right' top={ -5 }><Image src='/images/schedule.png' width={17} height={17} layout='responsive'/></Schedule></SubContent><Reset/>
    <SubContent><Pamphlet side='left' top={ -5 }><Image src='/images/pamphlet.png' width={17} height={17} layout='responsive'/></Pamphlet></SubContent><Reset/>
    <SubContent><Covid19 side='right' top={ -5 }><Image src='/images/covid19.png' width={17} height={17} layout='responsive'/></Covid19></SubContent><Reset/>
    <SubContent><Blog side='left' top={ -5 }><Image src='/images/blog.png' width={17} height={17} layout='responsive'/></Blog></SubContent><Reset/>
  </>;

export default SubContents;

const SubContent = styled.section`

`;

const Greetings = styled.div<SubSideAndMarginTop>`
  margin-top:${(props) => props.top}%;
  float: ${ (props) => props.side === 'right' ? 'right' : 'left' };
  width: 30%;
  margin-right: ${ (props) => props.side === 'left' ? null : 15 }%;
  margin-left: ${ (props) => props.side === 'left' ? 15 : null }%;
`;

const Reset = styled.div`
  clear: both;
`;

const Schedule = styled.div<SubSideAndMarginTop>`
  margin-top:${(props) => props.top}%;
  float: ${ (props) => props.side === 'right' ? 'right' : 'left' };
  width: 30%;
  margin-right: ${ (props) => props.side === 'left' ? null : 15 }%;
  margin-left: ${ (props) => props.side === 'left' ? 15 : null }%;
`;

const Pamphlet = styled.div<SubSideAndMarginTop>`
  margin-top:${(props) => props.top}%;
  float: ${ (props) => props.side === 'right' ? 'right' : 'left' };
  width: 30%;
  margin-right: ${ (props) => props.side === 'left' ? null : 15 }%;
  margin-left: ${ (props) => props.side === 'left' ? 15 : null }%;
`;

const Covid19  = styled.div<SubSideAndMarginTop>`
  margin-top:${(props) => props.top}%;
  float: ${ (props) => props.side === 'right' ? 'right' : 'left' };
  width: 30%;
  margin-right: ${ (props) => props.side === 'left' ? null : 15 }%;
  margin-left: ${ (props) => props.side === 'left' ? 15 : null }%;
`;

const Blog     = styled.div<SubSideAndMarginTop>`
  margin-top:${(props) => props.top}%;
  float: ${ (props) => props.side === 'right' ? 'right' : 'left' };
  width: 30%;
  margin-right: ${ (props) => props.side === 'left' ? null : 15 }%;
  margin-left: ${ (props) => props.side === 'left' ? 15 : null }%;
`;