import type { FC } from 'react';
import AboutTOHO from '../components/about';
import GreetingTOHO from '../components/greeting';
import ThemeTOHO from '../components/theme';
import LogoTOHO from '../components/logo';

const About: FC = () => <>
  <AboutTOHO />
  <GreetingTOHO />
  <ThemeTOHO />
  <LogoTOHO />
</>;

export default About;