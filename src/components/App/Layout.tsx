import type { FC }           from 'react';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import Header                from '~/src/components/Header';
import Footer                from '~/src/components/Footer';
import Head          from 'next/head';

const Layout: FC = ({ children }) => <AllWrap>
    <Head>
    <link rel='icon' href={process.env.basePath + '/favicon70th.ico'} type='image/x-icon'/>
    <title>第70回桐朋祭</title>
    <script dangerouslySetInnerHTML={{__html:`
      (function(d) {
        var config = {
          kitId: 'pbg7ecu',
          scriptTimeout: 3000,
          async: true
        },
        h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
      })(document);
    `}}/>
  </Head>
  <Header/>
  <div className='page-root'>
    { children }
  </div>
  <Footer/>
  <GlobalStyle/>
</AllWrap>;

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
    color: #1a1a1a;
    @media screen and (min-width: 768px) {
      font-size: 24px;
    }
  }

  body {
    background: #1a1a1a;
    min-height: 100vh;
    font-family: dnp-shuei-shogomincho-std,sans-serif;
    font-weight: 700;
    font-style: normal;
  }

  * {
    margin: 0;
  }

  a {
    color: unset;
    text-decoration: none;
  }

  .page-root {
    padding-top: 3rem;
  }
`;

const AllWrap = styled.div`
  min-height: 100vh; /* ←コンテンツの高さの最小値＝ブラウザの高さに指定 */
  position: relative;/* ←相対位置 */
  padding-bottom: 100px; /* ←フッターの高さを指定 */
  box-sizing: border-box;
  /* ↑ヘッダーやフッターを含むすべての要素の高さ＝min-height:100vhになるように指定 */ 
`;

export default Layout;

