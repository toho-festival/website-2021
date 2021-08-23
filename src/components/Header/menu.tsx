import type { FC } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { routes } from '~/src/scripts/routes';

const Menu: FC<{ display: boolean, toggle: () => void }> = ({ display, toggle }) => <Layout open={display}>
  <Box>
    {
      routes.map(
        ({ key, logo, path }) =>
          <Align>
            <Link href={path}>
              <a>
                <Flex>
                  <Image src={logo} alt="メニューのロゴ" />
                  <span key={key.toString()}><a onClick={toggle}><Anchor>{key}</Anchor></a></span>
                </Flex>
              </a>
            </Link>
          </Align>
      )
    }
  </Box>
</Layout>;

const Box = styled.div`
  margin-top: 3vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const Flex = styled.div`
  display: inline;
  flex-flow: column wrap;
`;

const Align = styled.div`
  text-align: center;
  margin-top: 2vw;
`;

const Image = styled.img`
  width: 70px;
  height: auto;
  border-radius: 100px;
`;

const Anchor = styled.p`
  font-size: 1.5rem;
  line-height: 3rem;
  @media screen and (max-width: 730px) {
    font-size: 0.8rem;
  }
`;


const Layout = styled.nav<{ open: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  color: rgba(255,255,255, 0.8);

  display: block;
  flex-flow: column wrap;
  align-items: center;
  overflow: hidden;

  padding-top: 1rem;

  background-color: rgba(0,0,0, 0.7);
  transform: ${({ open }) => open ? 'translateY(0%)' : 'translateY(-100%)'};
  transition: transform 0.3s ease-in-out;
`;

const Attention = styled.p`
  text-align: center;
  margin-left:7%;
  margin-right:7%;
`;

export default Menu;