import type { FC }      from 'react';
import Link             from 'next/link';
import styled           from 'styled-components';
import { footerRoutes } from '~/src/scripts/footerRoutes';

const Footer: FC = () => <>
  <FooterContent>
    <Theme>～織～70th 桐朋祭</Theme>
    {
      footerRoutes.map(
        (sitemap) => <Sitemap key={ sitemap.toString() }>{ sitemap }</Sitemap>,
      )
    }
  </FooterContent>
</>;


const FooterContent = styled.footer`
  background-color: #0f233c;
  color: white;
  display: flex;
  flex-direction: column;

  > nav {
    margin: 3rem 4rem
  }
`;

const Theme = styled.h2`
  /* font-weight: bold; */
`;

const Sitemap = styled.nav`
`;
export default Footer;

