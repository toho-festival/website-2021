import { FC } from "react";
import styled from "styled-components";
import { YoutubeContents } from "~/src/scripts/youtube-contents";
//youtubeの追加
const Youtube = styled( props => <div { ...props }>
  <h1>桐朋祭の動画</h1>
  {/* <p><a href="">第70回桐朋祭の動画はここをクリック！</a></p> */}
  <div><a href="https://www.youtube.com/watch?v=qMCiJH6psqs&list=PLRkV8zc8KGlPNnnomtva6bydpdfl84qMP" target="_blank" rel="noopener noreferrer">参加団体の再生リストはこちらから</a></div>
  <div><a href="https://www.youtube.com/watch?v=4Y03Nmle-2w&list=PLRkV8zc8KGlNbO7gogB91Xl9PFwDKwIhw" target="_blank" rel="noopener noreferrer">音響団体の再生リストはこちらから</a></div>
  <table>
    { YoutubeContents
        .map(({name1, name2, id, url1, url2}) =>
      
          <tr key={ id }>
            <td><a href={url1}>{name1}</a></td>
            <td><a href={url2}>{name2}</a></td>
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

  > div{
    text-align: center;
    :hover{
      color: #0bd;
    }
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