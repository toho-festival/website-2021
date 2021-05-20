import type { FC }   from 'react';
import AutoSlideehow from '~/src/components/AutoSlideShow';
import Main          from '~/src/components/Main';
import Head from 'next/head';

const Entrance: FC = () => <div>
  <Head>
    <link rel="icon" type="image/x-icon" href="/fabicon.png" />
    <title>第70回桐朋祭</title>
  </Head>
  <AutoSlideehow/>
  <Main/>
</div>;

export default Entrance;

