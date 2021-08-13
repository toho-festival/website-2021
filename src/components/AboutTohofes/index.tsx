import type { FC } from 'react';
import AboutTOHO from '~/src/components/AboutTohofes/entrance';
import GreetingTOHO from '~/src/components/AboutTohofes/greeting';
import ThemeTOHO from '~/src/components/AboutTohofes/theme';
import LogoTOHO from '~/src/components/AboutTohofes/logo';

const AboutIndex: FC = () => <>
  <AboutTOHO />
  <GreetingTOHO />
  <ThemeTOHO />
  <LogoTOHO />
</>;

export default AboutIndex;