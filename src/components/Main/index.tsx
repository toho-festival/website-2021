import { FC }                             from 'react';
import styled                             from 'styled-components';
import SubContent                         from '~/src/components/Main/subContents';
import MainContent                        from './mainContent';
import Dating                             from '~/src/components/Main/date'

const Main: FC = () =>{
  return(
    <Layout>
      <Date>
        <h2>－DATE－</h2>
        <Dating />
      </Date>
      <Categories>
        <h2>－PROJECT－</h2>
        <MainContents>
          <MainContent side='left'  right={0}  left={10} categoly="/images/newExperience.png" name="ExperienceProject" num={0} marginLeft={42} />
          <MainContent side='right' right={10} left={0}  categoly="/images/newExhibit.png"    name="ExhibitProject"    num={1} marginLeft={44} />
          <MainContent side='left'  right={0}  left={10} categoly="/images/newMusic.png"      name="MusicProject"      num={2} marginLeft={42} />
        </MainContents>

        <SubContents>
          <h2>－SUB CONTENTS－</h2>
          <SubContent side='left'  top={10}  subSrc="/images/newGreetings.png" num={0}/>
          <SubContent side='right' top={-5}  subSrc="/images/newSchedule.png"  num={1}/>
          <SubContent side='left'  top={-5}  subSrc="/images/newPamphlet.png"  num={2}/>
          <SubContent side='right' top={-5}  subSrc="/images/newCovid19.png"   num={3}/> 
          <SubContent side='left'  top={-5}  subSrc="/images/newBlog.png"      num={4}/>
        </SubContents>
      </Categories>
    </Layout>
  );
}

const Layout = styled.div`

`;

const Date = styled.div`
  background-color: white;
  padding-top: 5vw;
  padding-bottom: 10vw;
  h2{
    text-align: center;
    font-size: 3vw;
    padding-bottom: 2vw;
  }
`;

const Categories = styled.div`
  background-color: black;
  padding-top: 2vw;
  padding-bottom: 25vw;
  h2{
    margin-top: 7vw;
    text-align: center;
    font-size: 3vw;
    color: white;
  }
`;

const MainContents = styled.section`
  padding-top: 5vw;
  padding-bottom: 4vw;
`;

const SubContents = styled.section`
`;

export default Main;