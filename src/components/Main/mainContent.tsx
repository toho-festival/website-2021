import { FC }                             from 'react';
import styled                             from 'styled-components';
import { projectsComment, projectsTitle } from '~/src/scripts/projects-comment';
import SubContents                        from '~/src/components/Main/subContents';
import Image                              from 'next/image';

type Side = { 
  side: 'right' | 'left'; 
  right?: number;
  left?: number;
};

type Margin = {
  marginLeft?: number;
}

type ProjectProps = {
  side: 'right' | 'left';
  right:number;
  left:number;
  categoly:string;
  name:string;
  marginLeft:number;
  num:number;
}

const MainContent: FC<ProjectProps> = (props) =>{
  return(
    <>
      <Project>
        <Band side={props.side}>
          <Image src={process.env.basePath + '/images/band808080.png'} width={800} height={200} layout='responsive' />
        </Band>
        <Categoly side={props.side} right={props.right} left={props.left}><Image src={process.env.basePath + props.categoly} width={17} height={20} layout='responsive' alt={"pictute of" + props.name}/></Categoly><ProjectTitle side={props.side}>{ projectsTitle[props.num] }</ProjectTitle>
        <ProjectComment marginLeft={props.marginLeft}>{ projectsComment[props.num] }</ProjectComment>
      </Project>
      
      <Reset/>
    </>
  );
}

const Categoly = styled.div<Side>`
  float: ${ (props) => props.side };
  margin-right: ${ (props) => props.right }%;
  margin-left: ${ (props) => props.left }%;
  width: 25%;
`;

const Project = styled.section`
  position: relative;
  margin-top: 5%;
  margin-bottom: -5%;
`;


const Band = styled.div<Side>`
  z-index: -1;
  position: absolute;
  margin-top: 4%;
  right: ${ (props) => props.side === 'right' ? 0 : null };
  left: ${ (props) => props.side === 'right' ? null : 0 };
  width:85%;
  height:40%;
`;

const ProjectTitle = styled.div<Side>`
  position: absolute;
  margin-top: calc(30% / 4);
  color: #FBB03B;
  margin-left: ${ (props) => props.side === 'right' ? 30 : 38 }%;
  opacity: .8;
  @media screen and (max-width: 1230px) {
    font-size: calc(24 / 1230 * 100vw);
  }
`;

const ProjectComment = styled.p<Margin>`
  position: absolute;
  margin-top: calc(30% / 2);
  color: white;
  margin-left: ${ (props) => props.marginLeft }%;
  opacity: .8;
  @media screen and (max-width: 1230px) {
    font-size: calc(20 / 1230 * 100vw);
  }
`;

const Reset = styled.div`
  clear: both;
`;

export default MainContent;