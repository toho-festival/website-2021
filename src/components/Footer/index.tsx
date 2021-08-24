import styled from 'styled-components';

const backGroundImageUrl = process.env.basePath + '/images/tesukiwashi-pattern-04.jpg';

export const Footer = styled(props => <footer { ...props }>
  <h2>TOHO Festival 70th</h2>
  <nav>
    {/* sitemap */ }
  </nav>
  <p>制作：第70回桐朋祭プログラム委員会</p>
</footer>)`
  padding-top: 1.5rem;
  background-image: url(${ backGroundImageUrl });
  background-size: cover;
  text-align: center;

  > h2 {
    font-size: 1.5rem;
    line-height: 1;
  }

  > nav {
    margin-block: 1rem;
  }

  > p {
    font-size: .8rem;
  }
`;

export default Footer;

