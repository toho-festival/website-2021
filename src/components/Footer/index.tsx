import type { FC }      from 'react';
import Link             from 'next/link';
import styled           from 'styled-components';
import { footerRoutes } from '~/src/scripts/footerRoutes';

const Footer: FC = () => <>
  <FooterContent>
    <Theme>TohoFes 70th</Theme>
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
  margin-left:1rem;
  /* font-weight: bold; */
`;

const Sitemap = styled.nav`
`;
export default Footer;

