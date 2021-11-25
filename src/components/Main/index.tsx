import type { FC }    from 'react';
import Date           from '~/src/components/Main/date';
import MainInfomation from '~/src/components/Main/main-infomation';
import Project        from '~/src/components/Main/project';
import SubContent     from '~/src/components/Main/sub-content';

const Main: FC = () =>
  <div>
    <Date/>
    <MainInfomation />
    <Project/>
    <SubContent/>
  </div>;

export default Main;