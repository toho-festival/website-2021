import type { FC }   from 'react';
import Tabs from '~/src/components/Projects/index';
import styled from 'styled-components';

const Projects: FC = () => <Wrap>
  <Tabs />
</Wrap>;

export default Projects;

const Wrap = styled.div`
  max-width: 1000px;
  margin: auto;
  padding: 30px;
`;

