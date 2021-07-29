import { FC } from 'react';
import styled from 'styled-components';

const Member:FC = () => (
  <Wrap>
    <Div>
        <MemberWrap>
            <SubTitle>メンバー</SubTitle>
            <MemberName>a</MemberName>
            <MemberName>b</MemberName>
            <MemberName>c</MemberName>
            <MemberName>d</MemberName>
        </MemberWrap>
        <MemberPicture>
            <Img src="entrance-backgrund-1.jpg" alt="" />
        </MemberPicture>
    </Div>
  </Wrap>
)
export default Member; 


const Wrap = styled.div`
    background-color:#ffcc00;
    padding: 3vw 0 2vw 0;
`;

const Div = styled.div`
    display:flex;
    margin-left: 15vw;
`;

const MemberWrap = styled.article`

`;

const SubTitle = styled.h3`
    font-size:5vw;
    text-align:center;
    border-bottom: 2px solid black;
`;

const MemberName = styled.h4`
    border-bottom: 2px solid black;
    padding: 5px 0 5px 0;
`;

const MemberPicture = styled.aside`

`;

const Img = styled.img`
    width:30vw;
    margin-left:20vw;
`;