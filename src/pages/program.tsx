import { FC } from 'react';
import styled from 'styled-components';

const Program:FC = ()  => {

  return (
    <Box>
      <iframe src="https://firebasestorage.googleapis.com/v0/b/toho-festival.appspot.com/o/program2021.pdf?alt=media&token=a92c0bce-d118-461b-b86d-5dd316e75e3c" width="100%" height="100%"></iframe>   
    </Box>
  );
}
export default Program;

const Box = styled.div`
  width:100vw;
  height:100vh;
`;