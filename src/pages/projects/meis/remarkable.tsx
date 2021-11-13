import { FC } from 'react';
import styled from 'styled-components';



const Remarkable:FC = () => 
  <>
    <Wrap>
      <Article>
        <SubTitle>見どころ</SubTitle>
        <Discription>ただの迷路じゃない！様々なトラップもあるかも！？</Discription>
        <div>
            <Img src={process.env.basePath + "/images/trap.png"} alt="罠にひっかかるウサギ" />
        </div>
      </Article>
      <aside>
        <ContentTitle>企画内容</ContentTitle>
        <Discription>からくり仕掛けの要素がたっぷり詰め込まれた迷路！！</Discription>
      </aside>
    </Wrap>
  </>
  
export default Remarkable; 

const Article = styled.article`
  background-color:#ccffff;
`;

const SubTitle = styled.h2`
  margin-bottom:2vw;
  text-decoration:underline;
  text-decoration-color:#0066cc;
  text-align: center;
`;
 
const ContentTitle = styled.h2`
  font-weight: bold;
  color: #6091d3;
  background: #FFF;
  border: solid 3px #6091d3;
  border-radius: 10px;
  text-align: center;
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