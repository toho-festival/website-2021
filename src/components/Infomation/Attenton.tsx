import { FC } from "react";
import styled from "styled-components";

const Attention: FC = () => {
  return(
    <AttentionWrap>
      <Title>ご案内</Title>
      <Paragraph>「総合案内所」を高校昇降口に設置しております。目的地までの道順など各種お困りごとの対応をさせて頂きます。</Paragraph>
      <Paragraph>女子トイレ、男子トイレは各階にございます。多機能トイレは高校棟一階ホール横、教科教室棟一階にございます。</Paragraph>
      <Paragraph>桐朋祭スタッフは右図のTシャツを着ています。親身になって対応させていただきますので、お気軽にお声掛け下さい。</Paragraph>
      <Paragraph>感染症対策の為、ゴミの持ち帰りをお願い致します。校外から持ち込まれたゴミは、必ずお持ち帰り下さい。</Paragraph>
      <Paragraph>ご高齢の方、お身体が不自由な方以外のエレベーターの使用はご遠慮下さい。</Paragraph>
      <Paragraph>校舎内は土足厳禁です。</Paragraph>
      <Paragraph>校内は全面禁煙です。</Paragraph>
      <Paragraph>気分が悪くなった場合、おむつの交換、授乳などを希望される方は高校棟1階保健室にお越し頂くか、桐朋祭スタッフまでお声掛け下さい。</Paragraph>
      <Paragraph>本日は第70回桐朋祭にご来場頂き誠にありがとうございます。</Paragraph>
      <Paragraph>毎年多くのお客様にご来場して頂いており、校内は大変混雑することが予想されます。</Paragraph>
      <Paragraph>災害・事故等の発生時には皆様一人ひとりに落ち着いて行動して頂く事が、お客様の安全を確保することにも繋がりますので、下記の注意書きによく目を通して頂き、ご協力頂きますようお願い致します。</Paragraph>
    </AttentionWrap>
  );
}

export default Attention;

const AttentionWrap = styled.div`

`;

const Title = styled.h1`
  text-align: center;
`;

const Paragraph = styled.p`

`;