import { FC } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

const Denshiken = () => {
  const router = useRouter();
  return(
    <>
      <Button onClick={() => router.back()}>＜元のページに戻る</Button>
      <Img src={process.env.basePath + "/images/denshiken1.jpg"} alt="電子研の個別ページ1" />
      <Img src={process.env.basePath + "/images/denshiken2.jpg"} alt="電子研の個別ページ2" />
      <Img src={process.env.basePath + "/images/denshiken3.jpg"} alt="電子研の個別ページ3" />
      <Location>高校教室棟 3階 2-Gにて</Location>
    </>
  );
}

export default Denshiken;

const Img = styled.img`
  width: 100%;
`;

const Button = styled.a`
  border: 4px solid #ffffff;
  margin-top: 4px;
  border-radius: 150px;
  background: #fff;
  color: black;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  padding: 6px;

  :hover {
    color: #fff;
    background: #1a1a1a;
  }
  @media screen and (max-width: 767px) {
    padding: 2px;
  }
`;

const Location = styled.div`
  text-align: center;
  color: white;
`;