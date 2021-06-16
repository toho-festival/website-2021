import type { FC }      from 'react';
import Link             from 'next/link';
import styled           from 'styled-components';
import { footerRoutes } from '~/src/scripts/footerRoutes';

const Footer: FC = () => <>
  <FooterContent>
    <Theme>Toho Festival 70th</Theme>
    <Author>製作/デザイン：桐朋高校２年プログラム委員会</Author>
      <CopyRight>
        &copy; 2021 Toho70th-committee built this page.
      </CopyRight>
    {/* {
      footerRoutes.map(
        (sitemap) => <Sitemap key={ sitemap.toString() }>{ sitemap }</Sitemap>,
      )
    } */}
  </FooterContent>
</>;


const FooterContent = styled.footer`
  background-color: white;
  color: black;
  display: flex;
  flex-direction: column;
  /* > nav {
    margin: 3rem 4rem
  } */
`;

const Theme = styled.h2`
  margin-top: 2%;
  text-align: center;
`;

const Author = styled.small`
  margin-top: 2%;
  text-align: center;
  font-size: 0.5rem;
`;

const Sitemap = styled.nav`
`;

const CopyRight = styled.small`
  text-align: center;
  font-size: 0.5rem;
  margin-bottom: 1%;
`;
export default Footer;

