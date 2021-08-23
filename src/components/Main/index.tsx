import { FC }                             from 'react';
import styled                             from 'styled-components';
import SubContent                         from '~/src/components/Main/subContents';
import MainContent                        from './mainContent';
import Dating                             from '~/src/components/Main/date';
import {imageAlignMain ,imageAlignSub}    from '~/src/scripts/projectCategoly';

const backGroundImageUrl = process.env.basePath + "/images/tesukiwashi-pattern-04.jpg";

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
          {imageAlignMain.map(({id,side,right,left,categoly,name,num,marginLeft}) => 
            <MainContent id={id} side={side} right={right} left={left} categoly={categoly} name={name} num={num} marginLeft={marginLeft} />
          )}
        </MainContents>

        <SubContents>
          <h2>－SUB CONTENTS－</h2>
          {imageAlignSub.map(({side,top,subSrc,link,num}) => 
            <SubContent side={side}  top={top}  subSrc={subSrc} link={link} num={num}/>
          )}
        </SubContents>
      </Categories>
    </Layout>
  );
}

const Layout = styled.div`

`;

const Date = styled.div`
  background-image: url(${backGroundImageUrl});
  background-size: cover;
  color: #1a1a1a;
  padding-top: 5vw;
  padding-bottom: 10vw;
  h2{
    text-align: center;
    font-size: 3vw;
    padding-bottom: 2vw;
  }
`;

const Categories = styled.div`
  background-color: #1a1a1a;
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