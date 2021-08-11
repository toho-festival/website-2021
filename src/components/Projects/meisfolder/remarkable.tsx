import { FC } from 'react';
import styled from 'styled-components';



const Remarkable:FC = () => (
  <>
    <Div>
        <Article>
            <H2>見どころ</H2>
            <H3>ただの迷路じゃない！<br /> 様々なトラップもあるかも！？</H3>
            <Div>
                <Img src="entrance-backgrund-1.jpg" alt="" />
                <Img src="entrance-backgrund-1.jpg" alt="" />
            </Div>
        </Article>
        <aside>
            <H2content>企画内容</H2content>
            <h3>からくり仕掛けの要素がたっぷり詰め込まれた迷路！！</h3>
        </aside>
    </Div>
  </>
)
export default Remarkable; 

const Article = styled.article`
    background-color:#ccffff;
`;

const H2 = styled.h2`
    margin-bottom:2vw;
    border-bottom: 3px solid #0066cc;
    text-align: center
`;

const H2content = styled.h2`
    text-align: center
`;

const Div = styled.div`
    display:flex;
    gap : 1vw;
    padding: 0 1vw 1vw 1vw;
`;

const Img = styled.img`
    width: 20vw;
`;

const H3 = styled.h3`
    text-align: center
`;