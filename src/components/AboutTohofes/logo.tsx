import styled from "styled-components";
import { FC } from 'react';

const LogoTOHO:FC = () => {
  return(
    <>
      <Center><CategolyTitle>今年の大垂幕・ロゴのデザイン</CategolyTitle></Center>
      <ImgWrap>
        <Img1 src="/95839.png" />
        <Img2 src={ process.env.basePath + "/images/logo.png"} alt="" />
      </ImgWrap>
      <Creater>デザイン考案者：　装飾委員会委員長　内山麗央</Creater>
      <Flex>
        <ContentArticle>
          <Discription>
            第 70 回桐朋祭の大垂れ幕のモチーフは錦鯉です。登竜門をイメージし
            て、龍のように巨大で鮮やかな天を翔ける鯉を描きました。錦鯉には住
            む環境や成長によって模様を変え、色々な姿に変わるという特徴があり、
            桐朋生の個性の豊かさを表しています。また、鯉には生命力という意味
            があり、諦めずに粘り強く食らいついていく強い意志を表現しました。
          </Discription>
        </ContentArticle>
        <ContentAside>
          <Discription>
            今年の桐朋祭のテーマは ｢ 織 ｣ です。この漢字には ｢ 機織り ｣ や ｢ 織物
            ｣ と言った意味の他に ｢ 組み立てる ｣ という意味があります。みんなで一
            丸となってこの桐朋祭を作り上げていくという意味を込めました。また、
            ロゴのモチーフは ｢70｣ という数字のデザイン化、帯のようなデザインで
            の ｢ 織 ｣ という字、そして、多様な色を用いて十人十色な桐朋生らしさを
            表現しました。
          </Discription>
        </ContentAside>
      </Flex>
    </>
  )
}

export default LogoTOHO;

const Center = styled.div`
  text-align: center;
`;

const CategolyTitle = styled.h2`
  color: white;
  margin-bottom: 5vw;
  border-bottom: #bf9d6d 5px solid;
  display: inline-block;
`;

const ImgWrap = styled.div`
  display:flex;
  gap:15vw;
  margin-left:15vw;
`;

const Img2 = styled.img`
  max-width:25vw;
`;

const Img1 = styled.img`
  width:35vw;
  margin-left:-7vw;
`;

const Creater = styled.h3`
  margin-top: 1vw;
  margin-bottom: 3vw;
  color: white;
  text-align: center;
  @media screen and (max-width:767px) { 
    font-size: 15px;
  }
`;

const Discription = styled.h3`
  margin-left:5vw;
  text-align:center;
  margin-bottom:3vw;
  border-bottom: 1px #ddd solid;
  border-top: 1px #ddd solid;
  padding: 10px;
  @media screen and (max-width:767px) { 
    font-size: 12px;
  }
`;

const Flex = styled.div`
  display:flex;
  color: white;
`;

const ContentArticle = styled.article`

`;

const ContentAside = styled.aside`

`;