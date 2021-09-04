import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
// import { useBlogCollection } from '~/src/scripts/blog'

const Blog = () => {
  // const returned = useBlogCollection();
  // if (returned[1]) return <Wrap>Loading...</Wrap>;
  // if (returned[2] != null) return <Wrap>{ `Error: ${ returned[2].message }` }</Wrap>;
  // const [events] = returned;
  
  return<>
    <Wrap>
      {/* {events.map(event => {
        const { author, title, content } = event;
        return <Wrap key={title}>
          <Grid>
            <Center><Title>{title}</Title></Center>
          </Grid>
          <Adjustment>
          </Adjustment>
          <Author>&emsp;著者:{author}</Author>
          <Box>
            <ReactMarkdown children={content} />
          </Box>
        </Wrap>
      })} */}
      <Center>現在記事を作成中です！</Center>
    </Wrap>
  </>
}
  
export default Blog;

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


const Grid = styled.div`
  text-align: center;
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

// const Creating = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translateX(-50%)translateY(-50%);
// `;

