import type { FC } from 'react';
import Link        from 'next/link';
import styled      from 'styled-components';
import { footerRoutes }  from '~/scripts/footerRoutes';

const Footer: FC = () => <>
  <Div>
    {
      footerRoutes.map(
      ({ sikiKey }) => <span key={ sikiKey }>{ sikiKey }</span>,
      )
    }
    {
      footerRoutes.map(
      ({ sightmapKey }) => <Span key={ sightmapKey }>{ sightmapKey }</Span>,
      )
    }
  </Div>
</>;



const Div = styled.div`
  background-color: #0f233c;
  color:white;
  display:flex;
  flex-direction: column;
`;

const Span = styled.span`
  margin: 3rem 4rem
`;
export default Footer;

