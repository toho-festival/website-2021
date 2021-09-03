import { FC } from 'react';
import styled from 'styled-components';

const num:string[] = ["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36"];

const Program:FC = ()  => <>
  {num.map((num) => <Box>
      <img src={process.env.basePath + "/program/program2021_page-00" + num + ".jpg"} alt={num + "ページのプログラムの画像"} />
    </Box>
  )}
    {/*<Box>
    <a href={process.env.basePath + "/pdf/program2021.pdf"} download>ここをクリックでダウンロード(46.1MB)</a>
     {/* <iframe src="https://firebasestorage.googleapis.com/v0/b/toho-festival.appspot.com/o/program2021.pdf?alt=media&token=a92c0bce-d118-461b-b86d-5dd316e75e3c" width="100%" height="100%"></iframe>    
    </Box> 
    */}
</>
export default Program;

const Box = styled.div`
  padding: 5%;
  text-align: center;
  color: white;
  > img {
    width: 70%;
  }
`;

