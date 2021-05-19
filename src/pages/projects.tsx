import type { FC }   from 'react';
import Events      from '~/src/components/Projects/index';
import General       from '~/src/components/Projects/General/General';
import Stage         from '~/src/components/Projects/Stage/Stage';
import styled from 'styled-components';

const Projects: FC = () => <Wrap>
  <Events
    title={['参加団体企画', 'ステージ企画']}
    content={[
      <General title={'参加団体企画'} />,
      <Stage title={'ステージ企画'} />
    ]}
  />
</Wrap>;

export default Projects;

const Wrap = styled.div`
  max-width: 1000px;
  margin: auto;
  padding: 30px;
`;

