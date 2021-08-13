import { FC } from 'react';
import styled from 'styled-components';
import { useCollection } from 'react-firebase-hooks/firestore';
import { firestore } from '~/firebase/client';
import ReactMarkdown from 'react-markdown';

const Blog:FC = () => {
  const [blog, blogLoading, blogError] = useCollection(
    firestore.collection('documentClass/blog/published')
  );

  return (
    <>
      {blogError && <strong>Error: {JSON.stringify(blogError)}</strong>}
      {blogLoading && <span>Document: Loading...</span>}
      {
        blog?.docs.map((doc) =>      
            <div key={doc.id}>
              <Grid>
                <Center><Title>{doc.data().published}</Title></Center>
              </Grid>
              <Adjustment>
              </Adjustment>
              <SubTitle>{doc.data().title}</SubTitle>
              <Date>&emsp;著者:{doc.data().author}</Date>
              <Box>
                <ReactMarkdown children={doc.data().content} />
              </Box>
            </div>
        )
      }
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

export default Blog;