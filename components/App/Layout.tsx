import type { FC }           from 'react';
import { createGlobalStyle } from 'styled-components';
import Header                from '~/components/Header';
import Footer                from '~/components/Footer';

const Layout: FC = ({ children }) => <div>
  <Header/>
  { children }
  <Footer/>
  <GlobalStyle/>
</div>;

const GlobalStyle = createGlobalStyle`
  body {
    background: linear-gradient(#d4fffd, #ffe4bf);
    background-repeat: no-repeat;
    min-height: 100vh;
  }
  * {
    margin: 0;
  }
  a {
    color: unset;
    text-decoration: none;
  }
`;

export default Layout;

