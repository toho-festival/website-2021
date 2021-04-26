import type { FC } from 'react';
import { StyledBurger } from '~/scripts/hamburger'

interface Props {
  open: boolean
  isOpen: (open: boolean) => void
}

const Hamburger: FC<Props> = ({ isOpen,open }) => {
  return (
    <StyledBurger open={open} onClick={() => isOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
);
}

export default Hamburger;