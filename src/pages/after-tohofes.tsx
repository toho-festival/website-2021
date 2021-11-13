import { FC } from "react";
import styled from "styled-components";
import { resultCategoly } from "~/src/scripts/result-categoly";
import ResultSlideShow from "~/src/components/ResultSlideShow";
import ResultComment from "~/src/components/ResultComment";
import Head                        from 'next/head';

const AfterTohofes = styled( props => <div {...props}>
  <Head>
  <script dangerouslySetInnerHTML={ {
      __html: `
      (function(d) {
        var config = {
        kitId: 'pbg7ecu',
        scriptTimeout: 3000,
        async: true
        },
        h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
        })(document);
    `,
  } }/>
  </Head>
  <div color="title">
    <h1>第70回桐朋祭の様子</h1>
  </div> 
  <h3>ゆっくりスクロールしてご覧ください</h3>
  <div color="table">
    <h2>おしながき</h2>
    {resultCategoly.map(({ id }) => <>
      <h4>{id}</h4>
    </>
    )}
  </div>
  <div color="slide">
    {resultCategoly.map(({id, contents}) => <>
      <h2>{id}</h2>
      <ResultComment contents={contents}/>
      <ResultSlideShow contents={contents}/>
    </>
    )}
  </div>
  <h1 color="thx">Thank you!!</h1>
  <h1 color="forever">桐朋祭は永遠に・・・</h1>
</div>)`
  color: white;
  text-align: center;
  >div{
    &[color="title"]{
    @keyframes border_anim {
      0%{
        width: 0%;
      }
      100%{
        width: 100%;
      }
    }
    display: inline-block;
    position: relative;
    :before{
      content: '';
      position: absolute;
      left: 50%;
      bottom: 0;
      width: 0;
      transform: translateX(-50%);
      border-bottom: solid 10px #bf9d6d;
      animation: border_anim 2s forwards ease-in;
      }
    > h1{
      font-size: 80px;
      display: inline-block;
      @media screen and (max-width:767px) { 
        font-size: 40px;
      }
    }
  }
  }

  > h3{
    border: 2px solid #bf9d6d;
    margin: 5% 0;
  }

  >div{
    &[color="table"]{
      width: 22%;
      margin: 5% 30%;
      display: inline-block;
      @media screen and (max-width: 1230px) {
        width: 50%;
      }
      > h2{
        padding: 0 8px 8px;
        border-bottom: 2px #bf9d6d solid;
        font-weight: normal;
        ::before, ::after {
          content: '－';
        }
      }

      
      > h4{
        border-bottom: 1px #ddd solid;
        padding: 10px;          text-align: initial;
        display: block;
      }
    }
  }

  > div{
    &[color="slide"]{
      > h2{
        margin: 5% 0 0 0;
      }
    }
  }

  > h1{
    &[color="thx"]{
      font-family: memoriampro, sans-serif;
      font-weight: 400;
      font-style: normal;
      background: repeating-linear-gradient(0deg, #B67B03 0.1em, #DAAF08 0.2em, #FEE9A0 0.3em, #DAAF08 0.4em, #B67B03 0.5em);
      -webkit-background-clip: text;
      color: transparent;
      font-size: 120px;
      margin: 45% 0 0 0;
      @media screen and (max-width:767px) { 
        font-size: 50px;
      }
    }
    &[color="forever"]{
      margin: 0 0 45% 0;
    }
  }
`;

export default AfterTohofes;