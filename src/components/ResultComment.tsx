import styled,{ keyframes } from "styled-components";
import { Content } from "~/src/scripts/result-categoly";


const ResultComment = ({contents}:{contents:Content[]}) => <Wrap>
  {contents.map(({ com1, com2, com3, com4, com5, com6 }) => <div>
      <p>{com1}</p>
      <p>{com2}</p>
      <p>{com3}</p>
      <p>{com4}</p>
      <p>{com5}</p>
      <p>{com6}</p>
  </div>)}
</Wrap>
;
  
const Wrap = styled.div`
  position: relative;
  > div{
    :nth-child(n) {
      position: absolute;
    }
  }
  
  //・・・

`;

export default ResultComment;