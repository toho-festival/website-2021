import type { FC } from 'react';
import Link        from 'next/link';
import styled      from 'styled-components';
import { routes }  from '~/scripts/routes';

const Header: FC = () => <Layout>
  {
    routes.map(
      ({ key, path }) => <span key={ key }><Link href={ path } passHref><Anchor>{ key }</Anchor></Link></span>,
    )
  }
</Layout>;

const Layout = styled.nav`
  text-align: center;

  > span {
    margin: 0 1rem;
  }
`;

const Anchor = styled.a`
  font-size: 1rem;
  line-height: 3rem;
`;

export default Header;

