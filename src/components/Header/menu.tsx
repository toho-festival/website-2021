import type { FC } from 'react';
import Link        from 'next/link';
import styled      from 'styled-components';
import { routes }  from '~/src/scripts/routes';

const Menu: FC<{ display: boolean }> = ({ display }) => <Layout open={ display }>
  <LinkList>
    { routes.map(({ key, logo, path }) =>
      <Link href={path} passHref key={ path }><a>
        <img src={ logo } alt="メニューのロゴ"/>
        <span>{ key }</span>
      </a></Link>)
    }
  </LinkList>
</Layout>;

const LinkList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;

  height: 100%;
  
  overflow-y: auto;

  > a {
    display: block;
    width: 9rem;
    text-align: center;
    padding: 1rem;
    flex-shrink: 0;
    min-height: 0;

    > img {
      display: block;
      width: 3rem;
      height: 3rem;
      margin-inline: auto;
      object-fit: cover;
      border-radius: 100px;
    }

    > span {
      font-size: 1.25rem;
      line-height: 2;
    }
  }
`;


const Layout = styled.nav<{ open: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  color: rgba(255, 255, 255, 0.8);

  background-color: rgba(0, 0, 0, 0.7);
  transform: ${ ({ open }) => open ? 'translateY(0%)' : 'translateY(-100%)' };
  transition: transform 0.3s ease-in-out;
`;

const Attention = styled.p`
  position: absolute;
  text-align: center;
  padding-inline: 3rem;
`;

export default Menu;