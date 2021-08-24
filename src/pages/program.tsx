import { FC } from 'react';
import styled from 'styled-components';

const Program:FC = ()  => {

  return (
    <Box>
      <iframe src={process.env.basePath + "/program2021.pdf"} width="100%" height="100%"></iframe>   
    </Box>
  );
}
export default Program;

const Box = styled.div`
  width:100vw;
  height:100vh;
`;