import type { FC }     from 'react';
import styled, { css } from 'styled-components';

const Hamburger: FC<{ open: boolean, toggle: () => void }> = ({ open, toggle }) =>
  <Layout open={ open } onClick={ toggle }>
    <div/>
    <div/>
    <div/>
  </Layout>;

export const Layout = styled.button<{ open: boolean }>`
  display: block;
  width: 1.5rem;
  height: 1.5rem;
  border: none;
  padding: 0;
  background: transparent;
  cursor: pointer;

  //&:focus {
  //  outline: none;
  //}

  > div {
    position: absolute;
    width: 1.5rem;
    height: 0.25rem;
    border-radius: .5rem;
    background-color: #030303;
    transform-origin: center center;
    transition: all 0.3s linear;

    ${ ({ open }) => open ? opened : closed };
  }
`;

const closed = css`
  &:first-child {
    transform: translateY(-.5rem);
  }

  &:last-child {
    transform: translateY(.5rem);
  }
`;
const opened = css`
  &:first-child {
    transform: rotate(45deg);
  }

  &:nth-child(2) {
    transform: translateX(150%);
    opacity: 0;
  }

  &:last-child {
    transform: rotate(-45deg);
  }
`;

export default Hamburger;