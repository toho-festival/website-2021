import {FC} from 'react';
import styled from 'styled-components';
import {blog, blogContent, blogTitle, writer ,date ,photo} from '../scripts/blog'

const Blog:FC = () => {
    return(
        <>
        <Grid>
          <Center><Title>{blog}</Title></Center>
        </Grid>
        <Adjustment>
          <Image src={process.env.basePath + {photo}} alt="blogの写真"/> {/*ここは普通の写真を入れる*/}
        </Adjustment>
          <SubTitle>{blogTitle}</SubTitle>
          <Date>作成日{date[0]}/{date[1]}/{date[2]}&emsp;著者:{writer}</Date>
          <Box>{blogContent}</Box>
        </>
    )
}

const Date = styled.p`
color: white;
margin-left: 70px;
margin-top: 1vw;
margin-bottom: 1vw;
`;

const Center = styled.div`
  text-align: center;
`;

const Adjustment = styled.div`
  text-align: center;
  width: 100%;
`;

const SubTitle = styled.h2`
color: white;
font-size:60px;
margin-left: 70px;
display: inline-block;
border-bottom: 3px solid #bf9d6d;
`;

const Grid = styled.div`
  text-align: center;
`;

const Image = styled.img`
  text-align: center;
  width: 50%;
`;

const Title = styled.h1 `
display: inline-block;
color: white;
margin-top: 5vw;
margin-bottom: 10vw;
border-bottom: 8px solid #bf9d6d;
display: center;
&::after {
    content: "";
    /* display: block; */
    margin-top: -10px;
    margin:left;
    width: 400px; 
    /* border-bottom: 10px solid #85d1d0;  */
}
`;

const Box = styled.p`
border-radius:20px;
border: solid 10px white;
background-color: white;
margin: 0 50px 10vw 70px;
padding: 3px 3px 3px 3px;
word-wrap: break-word;
`;

export default Blog;