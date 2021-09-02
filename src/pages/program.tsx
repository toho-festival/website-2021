import { FC } from 'react';
import styled from 'styled-components';

const Program:FC = ()  => {
  return (
    <Box>
      <a href={process.env.basePath + "/pdf/program2021.pdf"} download>ここをクリックでダウンロード(46.1MB)</a>
      {/* <iframe src="https://firebasestorage.googleapis.com/v0/b/toho-festival.appspot.com/o/program2021.pdf?alt=media&token=a92c0bce-d118-461b-b86d-5dd316e75e3c" width="100%" height="100%"></iframe>    */}
    </Box>
  );
}
export default Program;

const Box = styled.div`
  padding: 5%;
  text-align: center;
  color: white;
`;

