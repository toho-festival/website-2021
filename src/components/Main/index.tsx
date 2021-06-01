import { FC }                             from 'react';
import styled                             from 'styled-components';
import { projectsComment, projectsTitle } from '~/src/scripts/projects-comment';
import SubContents                        from '~/src/components/Main/subContents';
import Image                              from 'next/image';

interface MarginProps {
  right: number;
  left: number;
}

type Side = { 
  side: 'right' | 'left'; 
  right?: number;
  left?: number;
};
type Margin = {
  marginLeft?: number;
}

const Main: FC = () =>
  <>
    <Project>
      <Band side='left'>
        <Image src='/images/band808080.png' width={800} height={200} layout='responsive' />
      </Band>
      <Experience side='left' right={ 0 } left={ 10 }><Image src='/images/experience.png' width={17} height={20} layout='responsive' /></Experience><ProjectTitle side='left'>{ projectsTitle[0] }</ProjectTitle>
      <ProjectComment marginLeft={ 42 }>{ projectsComment[0] }</ProjectComment>
    </Project>
    
    <Reset/>

    <Project>
      <Band side='right'>
        <Image src='/images/band808080.png' width={800} height={200} layout='responsive' />
      </Band>
      <Exhibit side='right' right={ 10 } left={ 0 }><Image src='/images/exhibit.png' width={17} height={20} layout='responsive' /></Exhibit><ProjectTitle side='right'>{ projectsTitle[1] }</ProjectTitle>
      <ProjectComment marginLeft={ 35 }>{ projectsComment[1] }</ProjectComment>
    </Project>

    <Reset/>
    
    <Project>
      <Band side='left'>
        <Image src='/images/band808080.png' width={800} height={200} layout='responsive' />
      </Band>
      <Music side='left' right={ 0 } left={ 10 }><Image src='/images/music.png' width={17} height={20} layout='responsive' /></Music><ProjectTitle side='left'>{ projectsTitle[2] }</ProjectTitle>
      <ProjectComment marginLeft={ 42 }>{ projectsComment[2] }</ProjectComment>
    </Project>

    <Reset/>

    <SubContents/>
  </>;

const Project = styled.section`
  position: relative;
  margin-top: 5%;
  margin-bottom: -5%;
`;

const Experience = styled.div<Side>`
  float: ${ (props) => props.side };
  margin-right: ${ (props) => props.right }%;
  margin-left: ${ (props) => props.left }%;
  width: 25%;
`;

const Band = styled.div<Side>`
  z-index: -1;
  position: absolute;
  margin-top: 5%;
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

const Exhibit = styled.div<Side>`
  float: ${ (props) => props.side };
  margin-right: ${ (props) => props.right }%;
  margin-left: ${ (props) => props.left }%;
  width: 25%;
`;

const Music = styled.div<Side>`
  float: ${ (props) => props.side };
  margin-right: ${ (props) => props.right }%;
  margin-left: ${ (props) => props.left }%;
  width: 25%;
`;

export default Main;