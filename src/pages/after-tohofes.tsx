import { FC } from "react";
import styled from "styled-components";
import { resultCategoly } from "~/src/scripts/result-categoly";
import ResultSlideShow from "~/src/components/ResultSlideShow";
import ResultComment from "~/src/components/ResultComment";

const AfterTohofes = styled( props => <div {...props}>
  <h1>第70回桐朋祭の様子</h1>
  <h3>ゆっくりスクロールしてご覧ください</h3>
  <h2>おしながき</h2>
  <ul>
    {resultCategoly.map(({ id }) => <>
      <li>{id}</li>
    </>
    )}
  </ul>
  <div>
    {resultCategoly.map(({id, contents}) => <>
      <h2>{id}</h2>
      <ResultComment contents={contents}/>
      <ResultSlideShow contents={contents}/>
    </>
    )}
  </div>
  <h1>Thank you!!</h1>
  <h1>桐朋祭は永遠・・・</h1>
</div>)`
  color: white;

  > h2{
    ::before, ::after {
      content: '－';
    }
  }

  > ul{
    list-style: none;
  }
`;

export default AfterTohofes;