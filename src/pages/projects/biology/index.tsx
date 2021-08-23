import { FC } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

const BiologyClub: FC = () => {
  const router = useRouter();

  return (
    <Wrap>
      <Button onClick={() => router.back()}>＜元のページに戻る</Button>
      <Main>
        <Title>生物部</Title>
        <Description>
          <p>この1年は生物部にとっては厳しい一年でした。</p>
          <p>活動も調査も満足にできず、生き物を飼ったり研究したりするのが桐朋生物部のポリシーですが、それすら崩れそうになりました。</p>
          <p>それでも目一杯努力しました。</p>
          <p>努力のつまった展示です。</p>
        </Description>
        <Space>　</Space>
      </Main>
        <SubTitle>展示内容</SubTitle>
        <MainContent>
          <Content>
            <DisplayList>
              <Legend>例年通り</Legend>
              <DisplayContent>両生類・爬虫類の生体</DisplayContent>
              <DisplayContent>淡水魚の生体</DisplayContent>
              <DisplayContent>海水魚の生体</DisplayContent>
              <DisplayContent>鳥類班の研究</DisplayContent>
              <DisplayContent>昆虫の生体、昆虫班の研究</DisplayContent>
              <DisplayContent>雲の生態</DisplayContent>
              <Legend>例年と異なる点</Legend>
              <DisplayContent>クイズがありません。</DisplayContent>
              {/* <DisplayContent>入場制限があります。</DisplayContent> */}
            </DisplayList>
          </Content>
          <ImgContent>
            <ImgLegend>昨年の様子</ImgLegend>
            <div>
              <Img src={process.env.basePath + "/images/biologyClub2.jpg"} />
              <Img src={process.env.basePath + "/images/biologyClub3.jpg"} />
            </div>
            <div>
              <Img src={process.env.basePath + "/images/biologyClub4.jpg"} />
              <Img src={process.env.basePath + "/images/biologyClub1.jpg"} />
            </div>
          </ImgContent>
        </MainContent>
      <Comment>全力で準備するので是非来て下さい</Comment>
    </Wrap>
  );
}

export default BiologyClub

const backgroundUrl = process.env.basePath + "/images/biologyClub1.jpg"

const Wrap = styled.div`
  font-family: 'ＭＳ 明朝','ヒラギノ明朝 ProN W3';
  background-color: white;
`;

const Main = styled.div`
  background-image: url(${backgroundUrl});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Title = styled.h1`
  text-align: center;
  color: #FFFF99;
`;

const Description = styled.div`
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 10%;
  border: solid #DBFFDB;
  color: white;
  background-color: rgba(0,0,0, 0.8);
;
`;

const Space = styled.span`
  margin-top: 10px;
`;

const MainContent = styled.div`
  @media screen and (min-width: 890px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-grow: 1;
  }
`;

const Content = styled.div`
  width:100%;
`;

const SubTitle = styled.h2`

`;

const DisplayList = styled.ul`

`;

const Legend = styled.p`
  text-decoration: underline;
`;

const DisplayContent = styled.li`

`;

const ImgContent = styled.div`
  @media screen and (min-width: 890px) {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
`;

const ImgLegend = styled.p`
  text-decoration: underline;
`;

const Img = styled.img`
  @media screen and (max-width: 890px) {
    width: 40%;
  }
  width: 30%;
`;

const Comment = styled.h1`
  padding: 5% 0 5% 0;
  font-family: 'ＭＳ 明朝','ヒラギノ明朝 ProN W5';
  font-weight: bold;
  text-align: center;
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