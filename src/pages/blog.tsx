import {FC} from 'react';
import styled from 'styled-components';
import {blog, blogContent, blogTitle, writer ,date} from '../scripts/blog'
import Image  from 'next/image';
const Blog:FC = () => {
    return(
        <div>
        <Grid>
          <Title><Title1>{blog.substr(0,1)}</Title1><Title2>{blog.substr(1)}</Title2></Title>
        </Grid>
        <Border>
          <SubTitle>{blogTitle}</SubTitle>
          <Date>作成日{date[0]}/{date[1]}/{date[2]}&emsp;著者:{writer}</Date>
          {/* <Image src="" width={100} height={100} />　写真を入れる時のために */}
          <Box>{blogContent}</Box>
        </Border>
        </div>
    )
}

const Date = styled.p`
text-align:right;
margin:0 10rem 0 0;
`

const SubTitle = styled.h2`
font-size:30px;
margin-left: 50px;
`

const Grid = styled.div`
  background-color: black;
`;

const Border = styled.div`
  border: 2px black solid;
`;


const Title1 = styled.span `
/* margin-left:10px;
color: orange;
font-size: 60px;  */
`

const Title2 = styled(Title1) `
/* color:black; */
font-size: 40px;
`

const Title = styled.h1 `
text-align: center;
color: white;
background-color: black;
padding: 3vw 0 3vw 0; 
display: center;
&::after {
    content: "";
    /* display: block; */
    margin-top: -10px;
    margin:left;
    width: 400px; 
    /* border-bottom: 10px solid #85d1d0;  */
}
`
const Box = styled.p`
border-radius:20px;
border: solid 10px white;
background-color: white;
margin: 0 50px 10px 70px;
padding: 3px 3px 3px 3px;
word-wrap: break-word;
`

export default Blog;