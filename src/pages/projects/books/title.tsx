import { FC } from 'react';
import styled from 'styled-components';

const Title:FC = () => 
  <Wrap>
    <SchoolName>桐朋中学・高等学校</SchoolName>
    <Name>図書委員会</Name>
    <Location>於　2-F</Location>
  </Wrap>

export default Title;

const Wrap = styled.div`

`;

const SchoolName = styled.h3`
  font-size: 3vw;
  text-align:center;
`;

const Name = styled.h1`
  font-size:10vw;
  text-align:center;
`;

const Location = styled.h2`
  color:red;
  font-size:6vw;
  text-align:center;
  margin-top: 5vw;
  :first-letter{
    color:black;
  }
`;
