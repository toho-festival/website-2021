import { FC } from 'react';
import styled from 'styled-components';



const Remarkable:FC = () => 
  <>
    <Wrap>
      <Article>
        <SubTitle>見どころ</SubTitle>
        <Discription>ただの迷路じゃない！様々なトラップもあるかも！？</Discription>
        <ImgWrap>
            <Img src="entrance-backgrund-1.jpg" alt="" />
            <Img src="entrance-backgrund-1.jpg" alt="" />
        </ImgWrap>
      </Article>
      <Content>
        <ContentTitle>企画内容</ContentTitle>
        <Discription>からくり仕掛けの要素がたっぷり詰め込まれた迷路！！</Discription>
      </Content>
    </Wrap>
  </>
  
export default Remarkable; 

const Article = styled.article`
  background-color:#ccffff;
`;

const SubTitle = styled.h2`
  margin-bottom:2vw;
  border-bottom: 3px solid #0066cc;
  text-align: center
`;

const Content = styled.aside`

`;
 
const ContentTitle = styled.h2`
    text-align: center
`;

const Wrap = styled.div`
  display:flex;
  gap : 1vw;
  padding: 0 1vw 1vw 1vw;
`;

const Img = styled.img`
  width: 20vw;
`;

const Discription = styled.h3`
  text-align: center
`;

const ImgWrap = styled.div`

`;