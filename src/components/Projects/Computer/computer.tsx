import { FC } from 'react';
import styled from 'styled-components';


const Computer:FC = () => <Wrap>
    <ClubName>～コンピューター部～</ClubName>
    <TCC src="entrance-backgrund-1.jpg" alt="" />
    <TCC src="entrance-backgrund-1.jpg" alt="" />
    <TCC src="entrance-backgrund-1.jpg" alt="" />
    <SubTitle>部員が製作した絵</SubTitle>
    <TCC src="entrance-backgrund-1.jpg" alt="" />
</Wrap>;

export default Computer; 

const Wrap = styled.div`
  
`;

const ClubName = styled.h1`

`;

const SubTitle = styled.h2`

`;

const TCC = styled.img`

`;