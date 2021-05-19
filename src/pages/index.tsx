import type { FC }   from 'react';
import AutoSlideehow from '~/src/components/AutoSlideShow';
import Main          from '~/src/components/Main';
import Head from 'next/head';

const Entrance: FC = () => <div>
  <Head>
  </Head>
  <AutoSlideehow/>
  <Main/>
</div>;

export default Entrance;

