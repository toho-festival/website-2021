import { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import { firestore } from '~/firebase/client';
import ReactMarkdown from 'react-markdown';

type Props = {
  author: string,
  content: string,
  release: Date,
  title: string,
 }

const News: FC<Props> = (props) => {
  return (
    <Wrap>
      {/* <Grid>
        <Center><Title>{props.title}</Title></Center>
      </Grid>
      <Adjustment>
      </Adjustment>
      <Author>&emsp;著者:{props.author}</Author>
      <Box>
        <ReactMarkdown children={props.content} />
      </Box> */}
      <Center>現在記事を作成中です！</Center>
    </Wrap>
  )
}

const Wrap = styled.div`
  color:white;
`;

const Author = styled.p`
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

const Title = styled.h1`
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

const Creating = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%)translateY(-50%);
`;

export default News;