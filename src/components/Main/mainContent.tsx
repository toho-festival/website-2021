import { FC }                             from 'react';
import styled                             from 'styled-components';
import { projectsComment, projectsTitle } from '~/src/scripts/projects-comment';
import Link                               from 'next/link';

type Side = { 
  side: 'right' | 'left'; 
  right?: number;
  left?: number;
};

type Margin = {
  marginLeft?: number;
}

type ProjectProps = {
  id:string;
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
      <Wrap>
        <Link href={"/projects/" + props.id}>
          <a>
            <Project>
              <Categoly side={props.side} right={props.right} left={props.left}><div><Image src={process.env.basePath + props.categoly} width={25} height={25}  alt={"pictute of" + props.name}/></div></Categoly>
              <ProjectTitle side={props.side}>{ projectsTitle[props.num] }</ProjectTitle>
              <ProjectComment marginLeft={props.marginLeft}>{ projectsComment[props.num] }</ProjectComment>
            </Project>
          </a>
      </Link>
      </Wrap>
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

const Image = styled.img`
  width: 30vw;
  height: auto;
`;

const Project = styled.section`
  position: relative;
  margin-top: 5%;
  margin-bottom: -5%;
`;

const Wrap = styled.div`
  border-radius: 0.5rem;
`;

const ProjectTitle = styled.div<Side>`
  font-size: 36px;
  position: absolute;
  margin-top: calc(30% / 4);
  color: #FBB03B;
  margin-left: ${ (props) => props.side === 'right' ? 42 : 45 }%;
  opacity: .8;
  background: -webkit-linear-gradient(bottom, #bf9d6d, #bf9d6d);
  background: linear-gradient(to top, #bf9d6d, #bf9d6d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media screen and (max-width: 1230px) {
    font-size: calc(42 / 1230 * 100vw);
  }
`;

const ProjectComment = styled.p<Margin>`
  position: absolute;
  margin-top: calc(30% / 2);
  color: white;
  margin-left: ${ (props) => props.marginLeft }%;
  opacity: .8;
  @media screen and (max-width: 1230px) {
    font-size: calc(38 / 1230 * 100vw);
  }
`;

const Reset = styled.div`
  clear: both;
`;

export default MainContent;