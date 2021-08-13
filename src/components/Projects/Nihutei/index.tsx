import { FC } from "react";
import styled from "styled-components";

const Nihutei:FC = () => {
  return (
    <Wrap>
      <Name>〜〜〜二歩亭〜〜〜</Name>
      <Main>
        <Img src={process.env.basePath + "/images/nihutei1.jpeg" } alt="二歩亭の写真" />
        <h2>◎概要</h2>
        <Subject>・実施場所</Subject>
        <p>　特別教室棟2階</p>
        <Subject>・実施時間</Subject>
        <p>　桐朋祭開始時間中</p>
        <Subject>・実施内容</Subject>
        <p>　1.部員との対局</p>
        <p>　2.友人同士での対局</p>
      </Main>
      <Title>◎良くある質問</Title>
      <Conversation>
        <Left><Icon src={process.env.basePath + "/images/nihuteiQuestion.png"} alt="質問者" />将棋はあまりうまくないのですが部員の方とさせますか？</Left>
        <Right>勿論です。初心者から上級者の方まで大歓迎です。</Right>
        <Left><Icon src={process.env.basePath + "/images/nihuteiQuestion.png"} alt="質問者" />連続して部員の方と対局してもいいですか？</Left>
        <Right>基本的に大丈夫です。他の方が待機されている場合は変わっていただきます。</Right>
        <Left><Icon src={process.env.basePath + "/images/nihuteiQuestion.png"} alt="質問者" />感染対策がなされているか気になります。</Left>
        <Right>対局状の換気・対局者の手の消毒ともに十分に行っています。</Right>
        <Left><Icon src={process.env.basePath + "/images/nihuteiQuestion.png"} alt="質問者" />部員の方に圧勝して落ち込まないか心配です。</Left>
        <Right>上等です。返り討ちにさせて頂きますので全力で来てください。</Right>
      </Conversation>
      <Title>◎部員よりひとこと</Title>
      <Comment>
        二歩亭に興味を持っていただきありがとうございます。二歩亭では幅広い戦術・気力の部員んを揃えていますので、ご希望があれば受付時に仰っていただれば対応します。また、喚起を行っているため室内が冷えることが予想されますゆえ、暖かい格好でご来場ください。わたしたちは　自信をもって将棋を指しています。皆さんもぜひ、大きな自信を携えてご来場ください！
      </Comment>
    </Wrap>
  );
}

export default Nihutei;

const Wrap = styled.div`
  background-color: white;
`;

const Main = styled.div`
  text-align: center;
`;

const Img = styled.img`
  width: 100%;
  @media screen and (min-width: 630px) {
    padding-left: 3%;
    width:30%;
    float:left;
  }
`;

const Name = styled.h1`
  text-align: center;
`;

const Title = styled.h2`
  clear: both;
`;

const Subject = styled.p`

`;

const Conversation = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 10px 0;
  background: #769ece;
  font-family: "ヒラギノ角ゴ Pro W3","Hiragino Kaku Gothic Pro","Helvetica Neue", "Lucida Sans Unicode", "Arial";
  font-size: 16px;
  color: #333;
  line-height: 1.4;
  overflow: hidden;
`;

const Right = styled.div`
  position: relative;
  display: inline-block;
  max-width: 192px;
  margin: 8px 0 0;
  padding: 9px 14px;
  border-radius: 19px;
  overflow-wrap: break-word;
  clear: both;
  box-sizing: content-box;
  float: right;
  margin-right: 12px;
  background: #7adc40;
  ::after {
    position: absolute;
    content: "";
    width: 24px;
    height: 36px;
    top: -21px;
    right: -10px;
    border-radius: 0 18px 18px 6px/0 18px 18px 1px;
    box-shadow: inset 3px -15px 0 -5px #7adc40;
  }
`;

const Left = styled.div`
  position: relative;
  display: inline-block;
  max-width: 192px;
  margin: 8px 0 0;
  padding: 9px 14px;
  border-radius: 19px;
  overflow-wrap: break-word;
  clear: both;
  box-sizing: content-box;
  float: left;
  margin-left: 62px;
  background: white;
  ::after {
    position: absolute;
    content: "";
    width: 24px;
    height: 36px;
    top: -21px;
    left: -10px;
    border-radius: 18px 0 6px 18px/18px 0 1px 18px;
    box-shadow: -3px -15px 0 -5px white inset;
  }

`;

const Icon = styled.img`
  position: absolute;
  width: 40px;
  height: 40px;
  left: -54px;
  top: -2px; 
  border-radius: 20px;
`;

const Comment = styled.div`

`;