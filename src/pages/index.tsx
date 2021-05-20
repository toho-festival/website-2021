import type { FC }   from 'react';
import AutoSlideehow from '~/src/components/AutoSlideShow';
import Main          from '~/src/components/Main';
import Head          from 'next/head';

const Entrance: FC = () => <div>
  <Head>
    <link rel="icon" type="image/x-icon" href="/fabicon.png" />
    <title>第70回桐朋祭</title>
    <script dangerouslySetInnerHTML={{__html:`
      (function(d) {
        var config = {
          kitId: 'pbg7ecu',
          scriptTimeout: 3000,
          async: true
        },
        h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
      })(document);
    `}}/>
  </Head>
  <AutoSlideehow/>
  <Main/>
</div>;

export default Entrance;

