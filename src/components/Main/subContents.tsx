import { FC } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

type SubSideAndMarginTop = {
  side: 'right' | 'left';
  top: number;
}

type SubContentProps = {
  side: 'right' | 'left';
  top:number;
  subSrc:string;
}

const SubContent: FC<SubContentProps> = (props) =>
  <>
    <SubCategoly side={props.side} top={props.top}><Image src={ process.env.basePath + props.subSrc } width={17} height={17} layout='responsive'/></SubCategoly><Reset/>
  </>;

export default SubContent;

const SubCategoly = styled.div<SubSideAndMarginTop>`
  margin-top:${(props) => props.top}%;
  float: ${ (props) => props.side === 'right' ? 'right' : 'left' };
  width: 30%;
  margin-right: ${ (props) => props.side === 'left' ? null : 15 }%;
  margin-left: ${ (props) => props.side === 'left' ? 15 : null }%;
`;

const Reset = styled.div`
  clear: both;
`;