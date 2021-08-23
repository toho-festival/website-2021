import { FC } from "react";
import styled from "styled-components";

const Denshiken = () => {
  return(
    <>
      <Img src={process.env.basePath + "/images/denshiken1.jpg"} alt="電子研の個別ページ1" />
      <Img src={process.env.basePath + "/images/denshiken2.jpg"} alt="電子研の個別ページ2" />
      <Img src={process.env.basePath + "/images/denshiken3.jpg"} alt="電子研の個別ページ3" />
    </>
  );
}

export default Denshiken;

const Img = styled.img`
  width: 100%;
`;