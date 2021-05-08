import {FC} from 'react';
import styled from 'styled-components';
import {blogContent, blogTitle} from '../scripts/blog'
const Blog:FC = () => {
    return(
        <div>
        <Title><Title1>ブ</Title1><Title2>ログ</Title2></Title>
        <Position>
            <SubTitle>{blogTitle}</SubTitle>
            <Hexagon></Hexagon>
        </Position>
        <Box>{blogContent}</Box>
        </div>
    )
}

const SubTitle = styled.nav`
position:absolute;
font-size:30px;
margin-left: 50px;
`
const Position = styled.div`
position:relative;
margin: 10px 400px 10px 20px;
`

const Hexagon = styled.div`
position:relative;
transform:rotate(10deg);
background-color: black;
width: 40px;
height:40px;
clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
&::before{
content:'';
display: block;
position:absolute;
background-color: white;
width: 24px;
height:24px;
margin: 8px 8px 8px 8px;
clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
 }
`

const Title1 = styled.span `
margin-left:10px;
color: orange;
font-size: 60px; 
`

const Title2 = styled(Title1) `
color:black;
font-size: 40px;
`

const Title = styled.h1 `
&::after {
    content: "";
    display: block;
    margin-top: -10px;
    margin:left;
    width: 400px; 
    border-bottom: 10px solid #85d1d0; 
}
`
const Box = styled.p`
border-radius:20px;
border: solid 10px white;
background-color: white;
margin: 0 50px 10px 70px;
`

export default Blog;