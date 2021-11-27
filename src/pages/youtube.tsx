import styled from "styled-components";
import { MovieInfo, youtubeMovies } from "~/src/scripts/youtube-contents";

const transformed = youtubeMovies.reduce((p, c)=> {
  const last = p[p.length - 1];
  if (last.length < 2) last.push(c);
  else p.push([c]);
  return p;
},[[]] as unknown as MovieInfo[][])

//youtubeの追加
const Youtube = styled( props => <div { ...props }>
  <h1>桐朋祭の動画</h1>
  {/* <p><a href="">第70回桐朋祭の動画はここをクリック！</a></p> */}
  <table>
  { transformed
      .map(movies  =>
        <tr key={ movies.map(m => m.id).join('+') }>
          {
            movies.map(({ id, url, name}) => <td>
              <a key={id} href={url}>{name}</a>
              </td>)
          }
        </tr>,
      )
    }
  </table>
</div>)`
  color: white;

  > h1{
    text-align: center;
    margin-top: 5%;
  }

  > table{
    margin: auto;
    >tr {
      > td{
        text-align: center;
        > a{
          :hover{
            color: #0bd;
          }  
        }  
      }
    }
  }
`;

export default Youtube
