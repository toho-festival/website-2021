import styled from 'styled-components'

interface Props {
  open: boolean
}

export const StyledBurger = styled.button<Props>`
  width: 3rem;
  height: 3rem;

  @media screen and (max-width: 768px) {
    width: 1.5rem;
    height: 1.5rem;
    top: 15px;
  }

  position: fixed;
  top: 3px;
  right: 20px;
  z-index: 10;
  display: none;
  border: none;
  cursor: pointer;
  background: transparent;
  &:focus {
    outline: none;
  }
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  div {

    @media screen and (max-width: 768px) {
      width: 1.5rem;
      height: 0.25rem;
    }

    width: 3rem;
    height: 0.5rem;
    background-color: ${({ open }) => open ? '#030303' : '#030303'};
    border-radius: 10px;
    transform-origin: left center;//1px
    transition: all 0.3s linear;
    position: relative;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;