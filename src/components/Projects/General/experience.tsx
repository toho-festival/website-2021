import { FC } from 'react';
import styled from 'styled-components';



const Experience:FC = () => (
  <>
    <Div1>
      <article>
        <Experienceimg src="experience.png" alt="体験型企画の画像" />
      </article>
      <Aside>
        <H2>　体験型企画</H2>
        <h2>　　　最高の</h2>
        <h2>　　　エンターテイメント</h2>
        <H4>体験企画について</H4>
        <h4>あああああああああああああああああああああああ</h4>
      </Aside>
    </Div1>
    <Div2>
      <A href=""><Img src="entrance-backgrund-1.jpg" /><P>Sample</P></A>
      <A href=""><Img src="entrance-backgrund-1.jpg" /><P>Sample</P></A>
      <A href=""><Img src="entrance-backgrund-1.jpg" /><P>Sample</P></A>
      <A href=""><Img src="entrance-backgrund-1.jpg" /><P>Sample</P></A>
      <A href=""><Img src="entrance-backgrund-1.jpg" /><P>Sample</P></A>
      <A href=""><Img src="entrance-backgrund-1.jpg" /><P>Sample</P></A>
      <A href=""><Img src="entrance-backgrund-1.jpg" /><P>Sample</P></A>
      <A href=""><Img src="entrance-backgrund-1.jpg" /><P>Sample</P></A>
      <A href=""><Img src="entrance-backgrund-1.jpg" /><P>Sample</P></A>
    </Div2>
  </>
)
export default Experience;

const Div1 = styled.div`
    display:flex;
    margin-top: 10vw;
`;

const Experienceimg = styled.img`
    width: 20vw;
    @media screen and (max-width: 767px) {
    width:30vw;
    }
`;

const Aside = styled.aside`
    margin-top:5vw;
`;

const H2 = styled.h2`
    color:orange;
`;

const H4 = styled.h4`
    margin-top:2vw;
`;

const Div2 = styled.div`
  margin: 0 auto;
  overflow: hidden;
  display:grid;
  grid-template-columns:repeat(3, 1fr);
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