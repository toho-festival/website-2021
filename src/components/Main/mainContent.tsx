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
      <Wrap><Anchor>
        <Project>
          <Categoly side={props.side} right={props.right} left={props.left}><div><Image src={process.env.basePath + props.categoly} width={20} height={20} layout='responsive' alt={"pictute of" + props.name}/></div></Categoly>
          <ProjectTitle side={props.side}>{ projectsTitle[props.num] }</ProjectTitle>
          <ProjectComment marginLeft={props.marginLeft}>{ projectsComment[props.num] }</ProjectComment>
        </Project>
      </Anchor></Wrap>
      <Reset/>
    </>
  );
}

const Categoly = styled.div<Side>`
  float: ${ (props) => props.side };
  margin-right: ${ (props) => props.right }%;
  margin-left: ${ (props) => props.left }%;
  width: 25%;
  div{
    transition-duration: 0.3s;
    :hover{
      transform: scale(1.05);
      transition-duration: 0.3s;
    }
  }
`;

const Project = styled.section`
  position: relative;
  margin-top: 5%;
  margin-bottom: -5%;
`;

const Wrap = styled.div`
  border-radius: 0.5rem;
`;

const Anchor = styled.a`
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  text-align: center;
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



const ProjectTitle = styled.div<Side>`
  position: absolute;
  margin-top: calc(30% / 4);
  color: #FBB03B;
  margin-left: ${ (props) => props.side === 'right' ? 52 : 38 }%;
  opacity: .8;
  background: -webkit-linear-gradient(bottom, #ffffdb, #a16422);
  background: linear-gradient(to top, #ffffdb, #a16422);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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