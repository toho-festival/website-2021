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
  * {
    margin: 0;
  }
  a {
    color: unset;
    text-decoration: none;
  }
`;

export default Layout;

