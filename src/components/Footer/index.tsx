import type { FC }      from 'react';
import Link             from 'next/link';
import styled           from 'styled-components';
import { footerRoutes } from '~/src/scripts/footerRoutes';

const backGroundImageUrl = process.env.basePath + "/images/tesukiwashi-pattern-04.jpg"

const Footer: FC = () => <Wrap>
  <FooterContent>
    <Theme>TOHO Festival 70th</Theme>
    <Author>製作/デザイン：第70回桐朋祭プログラム委員会</Author>
      <CopyRight>
        &copy; 2021 TOHOFES70th-committee built this page.
      </CopyRight>
    {/* {
      footerRoutes.map(
        (sitemap) => <Sitemap key={ sitemap.toString() }>{ sitemap }</Sitemap>,
      )
    } */}
  </FooterContent>
</Wrap>;

const Wrap = styled.div`
  margin-top: 6%;
`;

const FooterContent = styled.footer`
  background-image: url(${backGroundImageUrl});
  background-size: cover;
  color: black;
  display: flex;
  flex-direction: column;
  width: 100%;
  bottom: 0;
  /* > nav {
    margin: 3rem 4rem
  } */
  position: absolute;
  bottom: 0;
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

