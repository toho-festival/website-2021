import { FC } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

const Kurineo = () => {
  const router = useRouter();
  return (
    <Wrap>
      <Button onClick={() => router.back()}>＜元のページに戻る</Button>
      <Center href="https://urutoragood.wixsite.com/cryneo">＞クリネオ公式のホームページ</Center>
    </Wrap>
  );
}

export default Kurineo;

const Wrap = styled.div`
  padding: 3%;
`;

const Center = styled.a`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%)translateY(-50%);
  color: white;
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
