import { FC }                             from 'react';
import styled                             from 'styled-components';
import { projectsComment, projectsTitle } from '~/src/scripts/projects-comment';
import SubContents                        from '~/src/components/Main/subContents';

interface MarginProps {
  right: number;
  left: number;
}

type Side = { side: 'right' | 'left'; };
type Margin = {
  marginLeft?: number;
}

const Main: FC = () =>
  <>
    <Project right={ 0 } left={ 10 }><Band src='/band808080.png' side='left'/><Experience src='/experience.png'
                                                                                          side='left'/><ProjectTitle
      side='left'>{ projectsTitle[0] }</ProjectTitle><ProjectComment marginLeft={ 45 }>{ projectsComment[0] }</ProjectComment></Project>
    <Reset/><Project right={ 10 } left={ 0 }><Band src='/band808080.png' side='right'/><Exhibit src='/exhibit.png'
                                                                                                side='right'/><ProjectTitle
    side='right'>{ projectsTitle[1] }</ProjectTitle><ProjectComment marginLeft={ 35 }>{ projectsComment[1] }</ProjectComment></Project>
    <Reset/><Project right={ 0 } left={ 10 }><Band src='/band808080.png' side='left'/><Music src='/music.png'
                                                                                             side='left'/><ProjectTitle
    side='left'>{ projectsTitle[2] }</ProjectTitle><ProjectComment marginLeft={ 45 }>{ projectsComment[2] }</ProjectComment></Project>
    <Reset/>
    <SubContents/>
  </>;

const Project = styled.section<MarginProps>`
  position: relative;
  margin-top: 5%;
  margin-bottom: -5%;

  img:nth-child(1) {
    margin-top: calc(30% / 6);
  }

  img:nth-child(2) {
    margin-right: ${ (props) => props.right }%;
    margin-left: ${ (props) => props.left }%;
  }
`;

const Experience = styled.img<Side>`
  float: ${ (props) => props.side };
  width: 30%;
`;

const Band = styled.img<Side>`
  z-index: -1;
  position: absolute;
  right: ${ (props) => props.side === 'right' ? 0 : null };
  left: ${ (props) => props.side === 'right' ? null : 0 };
  width: 90%;
`;

const ProjectTitle = styled.div<Side>`
  position: absolute;
  margin-top: calc(30% / 4);
  color: #FBB03B;
  margin-left: ${ (props) => props.side === 'right' ? 30 : 41 }%;
  opacity: .8;
  @media screen and (max-width: 1200px) {
    font-size: calc(24 / 1200 * 100vw);
  }
`;

const ProjectComment = styled.p<Margin>`
  position: absolute;
  margin-top: calc(30% / 2);
  color: white;
  margin-left: ${ (props) => props.marginLeft }%;
  opacity: .8;
  @media screen and (max-width: 1200px) {
    font-size: calc(20 / 1200 * 100vw);
  }
`;

const Reset = styled.div`
  clear: both;
`;

const Exhibit = Experience.withComponent('img');

const Music = Experience.withComponent('img');

export default Main;