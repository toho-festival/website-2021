import { FC } from 'react';
import styled from 'styled-components';
import Definition from './definition';
import Music from './music';
import Exhibition from './exhibition';
import Experience from './experience';

const General:FC<{title: string}> = ({title}) => (
  <>
    <p hidden>{title}</p>
    <Definition />
    <Music />
    <Exhibition />
    <Experience />
  </>
)

export default General;