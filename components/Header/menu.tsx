import type { FC } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { routes } from '~/scripts/routes';
import { StyledMenu, DownwardTriangle, UpwardTriangle} from '~/scripts/Menu'

interface Props {
    open: boolean,
}

const Menu: FC<Props> = ({open}) => <StyledMenu open={open}>
<DownwardTriangle></DownwardTriangle>
<UpwardTriangle></UpwardTriangle>
{
    routes.map(
        ({ key, path }) => <span key={key}><Link href={path} passHref><Anchor>{key}</Anchor></Link></span>,
    )
}
</StyledMenu>;

const MenuLayout = styled.nav`
  

  > span {
    margin: 0 1rem;
  }
`;

const Anchor = styled.a`
  text-align: center;
  font-size: 1.5rem;
  line-height: 3rem;
  z-index: 20;
`;


export default Menu;