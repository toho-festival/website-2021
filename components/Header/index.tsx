import { FC, useState } from 'react';
import styled      from 'styled-components';
import Image from 'next/image';
import Hamburger from '~/components/Header/hamburger';
import Menu from './menu'
import MediaQuery from "react-responsive";

const Header: FC = () =>{
  const [open, isOpen]= useState(false);

  return(
    <Layout>
      <ImgLayout>
        <MediaQuery query="(max-width: 767px)">
          <Image
            src="/logo2.jpg"
            width="50px"
            height="50px"
          />
        </MediaQuery>
        <MediaQuery query="(min-width: 767px)">
          <Image
            src="/logo2.jpg"
            width="60px"
            height="60px"
          />
        </MediaQuery>
    </ImgLayout>
    <Title>桐朋祭</Title>
    <Hamburger open={open} isOpen={isOpen}/>
    <Menu open={open} /> 
    </Layout>
  );
}

const Layout = styled.nav`
  position: fixed;
`;

const ImgLayout = styled.div`
  display: inline;
`;

const Title = styled.a`
  position: relative;  
  margin-left: 15px;
  top: -14px;
  font-weight: bold;
  font-size: 40px;
  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`;

export default Header;