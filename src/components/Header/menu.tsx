import type { FC } from 'react';
import Link        from 'next/link';
import styled      from 'styled-components';
import { routes }  from '~/src/scripts/routes';

const Menu: FC<{ display: boolean }> = ({ display }) => <Layout open={ display }>
  <Attention>※開発中のため、各ページに飛ぶことができません。ご了承ください。</Attention>
  
  {
    // routes.map(
    //   ({ key, path }) => <span key={ key }><Link href={ path } passHref><Anchor>{ key }</Anchor></Link></span>,
    // )
    routes.map(
      ({ key }) => <span key={ key }><Anchor>{ key }</Anchor></span>,
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
  width: 100vw;
  height: 100vh;
  color: rgba(255,255,255, 0.8);

  display: flex;
  flex-flow: column wrap;
  align-items: center;
  overflow: hidden;

  padding-top: 1rem;

  background-color: rgba(0,0,0, 0.7);
  transform: ${ ({ open }) => open ? 'translateY(0%)' : 'translateY(-100%)' };
  transition: transform 0.3s ease-in-out;
`;

const Attention = styled.p`
  margin-bottom: 3%;
  margin-left:7%;
  margin-right:7%;
`;

export default Menu;