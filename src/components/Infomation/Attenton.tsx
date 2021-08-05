import { FC } from "react";
import styled from "styled-components";

const Attention: FC = () => {
  return(
    <AttentionWrap>
      <Paragraph color="1">「総合案内所」を高校昇降口に設置しております。目的地までの道順など各種お困りごとの対応をさせて頂きます。</Paragraph>
      <Paragraph color="2">女子トイレ、男子トイレは各階にございます。多機能トイレは高校棟一階ホール横、教科教室棟一階にございます。</Paragraph>
      <Paragraph color="3">桐朋祭スタッフはオリジナルのTシャツを着ています。親身になって対応させていただきますので、お気軽にお声掛け下さい。</Paragraph>
      <Paragraph color="4">感染症対策の為、ゴミの持ち帰りをお願い致します。校外から持ち込まれたゴミは、必ずお持ち帰り下さい。</Paragraph>
      <Paragraph color="5">ご高齢の方、お身体が不自由な方以外のエレベーターの使用はご遠慮下さい。</Paragraph>
      <Paragraph color="6">校舎内は土足厳禁です。</Paragraph>
      <Paragraph color="7">校内は全面禁煙です。</Paragraph>
      <Paragraph color="8">気分が悪くなった場合、おむつの交換、授乳などを希望される方は高校棟1階保健室にお越し頂くか、桐朋祭スタッフまでお声掛け下さい。</Paragraph>
      <Paragraph color="9">本日は第70回桐朋祭にご来場頂き誠にありがとうございます。</Paragraph>
      <Paragraph color="10">毎年多くのお客様にご来場して頂いており、校内は大変混雑することが予想されます。</Paragraph>
      <Paragraph color="11">災害・事故等の発生時には皆様一人ひとりに落ち着いて行動して頂く事が、お客様の安全を確保することにも繋がりますので、下記の注意書きによく目を通して頂き、ご協力頂きますようお願い致します。</Paragraph>
    </AttentionWrap>
  );
}

export default Attention;

const AttentionWrap = styled.div`

`;

const Paragraph = styled.p`
  padding: 10px;
  margin: 0 5% 0 5%;
  width: 30%;
  @media screen and (max-width: 1230px) {
    font-size: 14px;
    width: 45%;
  }

  &[color='1'] {
    margin-top: 10vw;
    margin-left: 60%;
    border-radius: 10px;
    background-color: #E3364A;
    @media screen and (max-width: 1230px) {
      margin-left: 47.5%;
    }
  }
  &[color='2'] {
    margin-top: 4vw;
    margin-left: 10%;
    border-radius: 10px;
    background-color: #9BCA54;
    @media screen and (max-width: 1230px) {
      margin-left: 2.5%;
    }
  }
  &[color='3'] {
    margin-top: 4vw;
    margin-left: 60%;
    border-radius: 10px;
    background-color: #FFE350;
    @media screen and (max-width: 1230px) {
      margin-left: 47.5%;
    }
  }
  &[color='4'] {
    margin-top: 4vw;
    margin-left: 10%;
    border-radius: 10px;
    background-color: #61B0E2;
    @media screen and (max-width: 1230px) {
      margin-left: 2.5%;
    }
  }
  &[color='5'] {
    margin-top: 4vw;
    margin-left: 60%;
    border-radius: 10px;
    background-color: #AC75B0;
    @media screen and (max-width: 1230px) {
      margin-left: 47.5%;
    }
  }
  &[color='6'] {
    margin-top: 4vw;
    margin-left: 10%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: #E15097;
    @media screen and (max-width: 1230px) {
      margin-left: 2.5%;
    }
  }
  &[color='7'] {
    margin-left: 10%;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: #E15097;
    @media screen and (max-width: 1230px) {
      margin-left: 2.5%;
    }
  }
  &[color='8'] {
    margin-top: 4vw;
    margin-left: 60%;
    border-radius: 10px;
    background-color: #7C5341;
    @media screen and (max-width: 1230px) {
      margin-left: 47.5%;
    }
  }
  &[color='9'] {
    margin-top: 8vw;
    margin-left: 35%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: #bf9d6d;
    @media screen and (max-width: 1230px) {
      margin-left: 27.5%;
    }
  }
  &[color='10'] {
    margin-left: 35%;
    background-color: #bf9d6d;
    @media screen and (max-width: 1230px) {
      margin-left: 27.5%;
    }
  }
  &[color='11'] {
    margin-left: 35%;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color:#bf9d6d;
    @media screen and (max-width: 1230px) {
      margin-left: 27.5%;
    }
  }
`;