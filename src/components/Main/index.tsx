import type { FC } from 'react';
import styled      from 'styled-components';
import Date        from '~/src/components/Main/date';
import Project     from '~/src/components/Main/project';
import SubContent  from '~/src/components/Main/sub-content';

const Main: FC = () =>
  <Layout>
    <Date/>
    <Attention>※開発中のため、どのページもまだ飛ぶことができません。ご了承ください。</Attention>
    <Project/>
    <SubContent/>
  </Layout>;

const Layout = styled.div`

`;

const Attention = styled.p`
  margin: 0 15% 0 15%;
  text-align: center;
  color: white;
  @media screen and (max-width: 1230px) {
    font-size: calc(28 / 1230 * 100vw);
  }
`;

export default Main;