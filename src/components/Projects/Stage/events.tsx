import { FC } from 'react';
import styled from 'styled-components';



const Events:FC = () => (
  <>
    <Div>
      <A href=""><Img src="entrance-backgrund-1.jpg" /><P>Sample</P></A>
      <A href=""><Img src="entrance-backgrund-1.jpg" /><P>Sample</P></A>
      <A href=""><Img src="entrance-backgrund-1.jpg" /><P>Sample</P></A>
      <A href=""><Img src="entrance-backgrund-1.jpg" /><P>Sample</P></A>
    </Div>
  </>
)
export default Events;

const Div = styled.div`
  margin: 0 auto;
  overflow: hidden;
  display:grid;
  grid-template-columns:repeat(2, 1fr);
  gap: 1vw;
`;

const A = styled.a`
  :hover{
    opacity: 0.6;
    transition-duration: 0.3s;
  }
  position: relative;
`;

const Img = styled.img`
  width: 100%;
  cursor: pointer;
  transition-duration: 0.3s;
`;

const P = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%,-50%);
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  margin:0;
  padding:0;
  color: black;
`;