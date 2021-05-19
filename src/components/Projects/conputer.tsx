import { FC } from 'react';
import styled from 'styled-components';


const Meis:FC = () => <Wrap>
    <H1>～コンピューター部～</H1>
    <TCC src="entrance-backgrund-1.jpg" alt="" />
    <TCC src="entrance-backgrund-1.jpg" alt="" />
    <TCC src="entrance-backgrund-1.jpg" alt="" />
    <H2>部員が製作した絵</H2>
    <TCC src="entrance-backgrund-1.jpg" alt="" />
</Wrap>;

export default Meis; 

const Wrap = styled.div`
  
`;

const H1 = styled.h1`

`;

const H2 = styled.h2`

`;

const TCC = styled.img`

`;