import { FC } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

const Otaku:FC = () => {
  const router = useRouter();
  return (
    <Wrap>
      <Button onClick={() => router.back()}>＜元のページに戻る</Button>
      <Center>
        <Icon src={process.env.basePath + "/images/otakuIcon.png"} />
      </Center>
      <Name>団体名:スマホ系ヲタク</Name>
      <SubTitle>展示企画</SubTitle>
      <Content>
        スマートフォンの歴史や、新製品の傾向など、スマートフォンに関してのレポートを展示する予定です。また、展示内容とは関係ありませんが、スマートフォンに関してのアンケートを行う予定です。なお、桐朋祭の会場に来れない人にも展示を見てもらうため、展示内容をこのWebサイトでも見れるようにします！是非、見てください！
      </Content>
      <SubTitle>場所</SubTitle>
      <Content>場所: 個別展示教室 (中学棟 3階 2-5教室) または 桐朋祭Webサイト上</Content>
      <SubTitle>レポート本文</SubTitle>
      <Content>桐朋祭当日をお楽しみに！</Content>
    </Wrap>
  );
}

export default Otaku;

const Wrap = styled.div`
  padding-left: 3%;
  color: white;
`;

const Center = styled.div`
  text-align: center;
`;

const Icon = styled.img`

`;

const Name = styled.h1`
  text-align: center;
`;

const SubTitle = styled.h2`

`;

const Content = styled.div`

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