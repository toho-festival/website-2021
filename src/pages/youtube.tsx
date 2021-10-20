import { FC } from "react";
import styled from "styled-components";

const Youtube = styled( props => <div { ...props }>
  <h1>桐朋祭の動画</h1>
  <p><a href="">第70回桐朋祭の動画はここをクリック！</a></p>
</div>)`
  color: white;

  > h1{
    text-align: center;
    margin-top: 5%;
  }

  > p{
    text-align: center;
    margin-top: 5%;
    margin-bottom: 5%;

    > a{
      :hover{
        color: #0bd;
      }
    }

  }
`;

export default Youtube