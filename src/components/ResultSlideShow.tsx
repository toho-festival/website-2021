import styled, { keyframes } from "styled-components";
import { Content } from "~/src/scripts/result-categoly";

const ResultSlideShow = ({contents}:{contents:Content[]}) => <Wrap>
  <div>
    {contents.map(({ img }) => <SlideShow url={img} />)}
  </div>
</Wrap>
;

const bgSlideShow = keyframes`
  0% {
    opacity: 1;
  }
  33% {
    opacity: 1;
  }
  34% {
    opacity: 0;
  }
  99% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }

`;


const SlideShow = styled.div<{url:string}>`
  position: absolute;
  width: 100%;
  height: 100%;
  animation: 30s linear infinite ${bgSlideShow};

  :nth-child(1) {
    background: url(${ ({url}) => process.env.basePath + url}) center / cover;
  }

  :nth-child(2) {
    background: url(${ ({url}) => process.env.basePath + url}) center / cover;
    animation-delay: -10s;
  }

  :nth-child(3) {
    background: url(${ ({url}) => process.env.basePath + url}) center / cover;
    animation-delay: -20s;
  }

`;

const Wrap = styled.div`
  position: relative;
  width: 50%;
  margin: 0 auto;
  ::before {
    content: '';
    padding-top: 66.6666%;
    display: block;
  }

  > div{
    top: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    
  }
`;

export default ResultSlideShow;