import { FC } from 'react';
import styled from 'styled-components';
import { subComment, subTitle } from '~/src/scripts/projects-comment';
import Image from 'next/image';
import Link from 'next/link';

type SubSideAndMarginTop = {
  side: 'right' | 'left';
  top: number;
}

type SubTexts = {
  textside: 'right' | 'left';
}

type SubContentProps = {
  side: 'right' | 'left';
  top:number;
  subSrc:string;
  num:number;
  link:string;
}

const SubContent: FC<SubContentProps> = (props) =>
  <>
    <Wrap>
      <Link href={props.link}>
        <Anchor>
        <SubCategoly side={props.side} top={props.top}><div><Image src={ process.env.basePath + props.subSrc } width={17} height={17} layout='responsive'/></div>
        <SubjectTitle textside={props.side}>{ subTitle[props.num] }</SubjectTitle>
        <SubComment textside={props.side}>{ subComment[props.num] }</SubComment>
        </SubCategoly>
        </Anchor>
      </Link>
    </Wrap>
    <Reset/>
  </>;

export default SubContent;


const SubCategoly = styled.div<SubSideAndMarginTop>`
  margin-top:${(props) => props.top}%;
  float: ${ (props) => props.side === 'right' ? 'right' : 'left' };
  width: 30%;
  margin-right: ${ (props) => props.side === 'left' ? null : 15 }%;
  margin-left: ${ (props) => props.side === 'left' ? 15 : null }%;
  div{
    transition-duration: 0.3s;
    :hover{
      transform: scale(1.05);
      transition-duration: 0.3s;
    }
  }
`;

const Reset = styled.div`
  clear: both;
`;

const SubjectTitle = styled.h3<SubTexts>`
  position: absolute;
  margin-top: calc(30% / 10);
  float: ${ (props) => props.textside === 'right' ? 'right' : 'left' };
  width: 30%;
  color: white;
  background: -webkit-linear-gradient(bottom, #ffffdb, #a16422);
  background: linear-gradient(to top, #ffffdb, #a16422);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media screen and (max-width: 1230px) {
    font-size: calc(28 / 1230 * 100vw);
  }
`;

const SubComment = styled.p<SubTexts>`
  position: absolute;
  margin-top: calc(30% / 4);
  float: ${ (props) => props.textside === 'right' ? 'right' : 'left' };
  width: 30%;
  color: white;
  @media screen and (max-width: 1230px) {
    font-size: calc(28 / 1230 * 100vw);
  }
`;

const Wrap = styled.div`
  border-radius: 0.5rem;
  text-align: center;
`;

const Anchor = styled.a`
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  vertical-align: middle;
  text-decoration: none;
  letter-spacing: 0.1em;
  color: #212529;
  border-radius: 0.5rem;
  :hover{
    text-shadow: 0 0 15px rgba(250, 250, 214, 0.5),
    0 0 15px rgba(250, 250, 214, 0.5), 0 0 15px rgba(250, 250, 214, 0.5),
    0 0 15px rgba(250, 250, 214, 0.5);
  }
`;