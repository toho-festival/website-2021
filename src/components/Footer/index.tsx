import styled from 'styled-components';
import Sitemap from '~/src/components/Footer/sitemap';

const backGroundImageUrl = process.env.basePath + '/images/tesukiwashi-pattern-04.jpg';

export const Footer = styled(props => <footer { ...props }>
  <h2>TOHO Festival 70th</h2>
  <nav>
    <Sitemap />
  </nav>
  <p>制作：第70回桐朋祭プログラム委員会</p>
</footer>)`
  padding-top: 1.5rem;
  background-color: white;
  background-size: cover;
  text-align: center;

  > h2 {
    font-size: 1.5rem;
    line-height: 1;
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-decoration-skip-ink: none;
    text-underline-offset: 4px;
    text-decoration-color: #bf9d6d;
  }

  > nav {
    margin-block: 1rem;
  }

  > p {
    font-size: .8rem;
  }
`;

export default Footer;

