import type { FC } from 'react';
import AboutTOHO from '~/components/AboutTohofes/entrance';
import GreetingTOHO from '~/components/AboutTohofes/greeting';
import ThemeTOHO from '~/components/AboutTohofes/theme';
import LogoTOHO from '~/components/AboutTohofes/logo';

const AboutIndex: FC = () => <>
  <AboutTOHO />
  <GreetingTOHO />
  <ThemeTOHO />
  <LogoTOHO />
</>;

export default AboutIndex;