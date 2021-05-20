import type { FC } from 'react';
import Link        from 'next/link';
import styled      from 'styled-components';
import { routes }  from '~/src/scripts/routes';

const Menu: FC<{ display: boolean }> = ({ display }) => <Layout open={ display }>
  <DownwardTriangle/>
  <UpwardTriangle/>
  <Attention>※開発中のため、各ページに飛ぶことができません。ご了承ください</Attention>
  {
    // routes.map(
    //   ({ key, path }) => <span key={ key }><Link href={ path } passHref><Anchor>{ key }</Anchor></Link></span>,
    // )
    routes.map(
      ({key}) => <span key = { key }><Anchor>{ key }</Anchor></span>,
    )
  }
</Layout>;

// const Anchor = styled.a`
//   font-size: 1.5rem;
//   line-height: 3rem;
// `;

const Anchor = styled.p`
  font-size: 1.5rem;
  line-height: 3rem;
`;

const Layout = styled.nav<{ open: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;

  display: flex;
  flex-flow: column wrap;
  align-items: center;
  overflow: hidden;

  padding-top: 3.5rem;

  background-color: rgba(255, 198, 116, .9);
  transform: ${ ({ open }) => open ? 'translateY(0%)' : 'translateY(-100%)' };
  transition: transform 0.3s ease-in-out;
`;

const DownwardTriangle = styled.div`
  margin: 30% 0 -30% -100%;
  width: 200%;
  height: 4px;
  opacity: .5;
  z-index: -1;
  background-color: white;
  transform: skewY(15deg);
`;

const UpwardTriangle = styled.div`
  margin: 50% 0 -50% -100%;
  width: 200%;
  height: 8px;
  opacity: .5;
  z-index: -1;
  background-color: white;
  transform: skewY(120deg);
`;

const Attention = styled.p`
  margin-bottom: 3%;
`;

export default Menu;