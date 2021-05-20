import type { FC }           from 'react';
import { createGlobalStyle } from 'styled-components';
import Header                from '~/src/components/Header';
import Footer                from '~/src/components/Footer';

const Layout: FC = ({ children }) => <div>
  <Header/>
  <div className='page-root'>
    { children }
  </div>
  <Footer/>
  <GlobalStyle/>
</div>;

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
    @media screen and (min-width: 768px) {
      font-size: 24px;
    }
  }

  body {
    background: linear-gradient(#d4fffd, #ffe4bf) no-repeat;
    min-height: 100vh;
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

export default Layout;

