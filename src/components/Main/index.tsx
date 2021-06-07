import { FC }                             from 'react';
import styled                             from 'styled-components';
import SubContent                         from '~/src/components/Main/subContents';
import MainContent                        from './mainContent';

const Main: FC = () =>{
  return(
    <>
      <MainContents>
        <MainContent side='left'  right={0}  left={10} categoly="/images/experience.png" name="ExperienceProject" num={0} marginLeft={42} />
        <MainContent side='right' right={10} left={0}  categoly="/images/exhibit.png"    name="ExhibitProject"    num={1} marginLeft={35} />
        <MainContent side='left'  right={0}  left={10} categoly="/images/music.png"      name="MusicProject"      num={2} marginLeft={42} />
      </MainContents>

      <SubContents>
        <SubContent side='left'  top={10}  subSrc="/images/greetings.png"/>
        <SubContent side='right' top={-5}  subSrc="/images/schedule.png"/>
        <SubContent side='left'  top={-5}  subSrc="/images/pamphlet.png"/>
        <SubContent side='right' top={-5}  subSrc="/images/covid19.png"/>
        <SubContent side='left'  top={-5}  subSrc="/images/blog.png"/>
      </SubContents>
    </>
  );
}

const MainContents = styled.section`
`;

const SubContents = styled.section`
`;

export default Main;