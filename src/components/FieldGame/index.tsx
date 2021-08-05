import { FC } from 'react';
import styled from 'styled-components';
import { allProjects } from '~/src/scripts/all-projects';
import { PiePlot } from './data';
import { firebase } from '~/firebase/client';
import { useCollection } from 'react-firebase-hooks/firestore';

const FieldGame: FC = () => {

  const [field, fieldLoading, fieldError] = useCollection(
    firebase.firestore().collection('field-game')
  )
  
  return(
    <Wrap>
      <Center>
        <Title>総務企画　〜陣地取りゲーム〜</Title>
      </Center>
      <Rules>
        <Center>
          <RuleTitle>ルール説明</RuleTitle>
        </Center>
        <Explain>
          <RuleParagraph>各参加団体で最も<Strong>来場者の割合</Strong>が大きかったグループがその陣地(団体)を獲得することができます。</RuleParagraph>
          <RuleParagraph>最終的に獲得した陣地の数が最も多いグループの勝利となります。</RuleParagraph>
          <RuleParagraph>グループは桐朋生、保護者の方々、外部のお客様の三種類です。</RuleParagraph>
          <Flex>
            <Border>
              <Center>
                <StepNumber>STEP<Color color="blue">Ⅰ</Color></StepNumber>
              </Center>
              <Content>ホームページ、入場時の案内で自分のグループの色を確認します 。</Content>
              <Center><Image  src={process.env.basePath + "/images/airport-counter.png"}/></Center>
            </Border>
            <Border>
              <Center><StepNumber>STEP<Color color="red">Ⅱ</Color></StepNumber></Center>
              <Content>各参加団体の出口にある台紙に自分のグループの色のペンでマークして下さい。これを訪れた全ての参加団体で行います。</Content>
              <Center><Image  src={process.env.basePath + "/images/writing-human.png"}/></Center>
            </Border>
          </Flex>
          <Center>
            <MoreInfo>
              <ParagraphTitle>途中結果を確認するには…</ParagraphTitle>
              <Frame>
                <Paragraph>① 昇降口での結果速報</Paragraph>
                <Paragraph>② 第70回桐朋祭ホームページでの結果速報 </Paragraph>
                <Paragraph>最終的に取得した陣地の数が最も多いグループの勝利となります</Paragraph>
                <Paragraph>＜補足＞</Paragraph>
                <Paragraph>結果の更新頻度は1時間を予定しています。</Paragraph>
              </Frame>
            </MoreInfo>
          </Center>
        </Explain>
      </Rules>
      <Center>
        <DataTitle>参加団体ごとの団体割合</DataTitle>
      </Center>
      <Data>
        {
          field?.docs.map(( doc ) => 
            <PiePlot  
              key={doc.id}
              blue={doc.data().blue} 
              red={doc.data().red} 
              yellow={doc.data().yellow}
              name={doc.data().name} 
            />
          )
        }
      </Data>
    </Wrap>
  )
}

const Center = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  margin-top: 3vw;
  font-size: 50px;
  color: black;
  display: inline-block;
  text-align: center;
  border-bottom: 7px solid #bf9d6d;
  @media screen and (max-width: 1230px) {
    font-size: 25px;
    border-bottom: 7px solid #bf9d6d;
  }
`;

const Rules = styled.div`
  margin-top: 10vw;
`;

const RuleTitle = styled.h2`
  margin-bottom: 2vw;
  color: black;
  display: inline-block;
  text-align: center;
  border-bottom: 4px solid #bf9d6d;
`;

const Explain = styled.div`
  color: black;
`;

const Flex = styled.div`
  display: flex;
  margin-top: 5vw;
  justify-content: space-between;
`;

const Border = styled.div`
  width: 45%;
`;

const StepNumber = styled.h2`
  display: inline-block;
  text-align: center;
  border-bottom: 4px solid #bf9d6d;
`;

const Color = styled.strong`
  &[color='blue'] {
        color: #3b82c4;
  }
  &[color='red'] {
        color: #de4d4d;
    }
`;

const Content = styled.div`
  text-align: center;
  margin-top: 1.5vw;
  @media screen and (max-width: 1230px) {
    font-size: 15px;
  }
`;

const Image = styled.img`
  margin-top: 2vw;
  width: 80%;
`;

const RuleParagraph = styled.p`
  margin-right: 10%;
  margin-left: 10%;
  text-align: center;
  @media screen and (max-width: 1230px) {
    font-size: 15px;
  }
`;

const MoreInfo = styled.div`
  margin-top: 5vw;
  display: inline-block;
`;

const ParagraphTitle = styled.h2`
  margin-bottom: 2vw;
  border: 0px 0px 5px 2px;
  border-style: none none solid dashed;
  border-color: #bf9d6d;
  display: inline-block;
  text-align: initial;
`;

const Frame = styled.div`
  border: dashed 2px #bf9d6d;
`;

const Paragraph = styled.p`
  text-align: initial;
  @media screen and (max-width: 1230px) {
    font-size: 15px;
  }
`;

const Strong = styled.strong`

`;

const DataTitle = styled.h2`
  margin-top: 10vw;
  margin-bottom: 3vw;
  color: black;
  display: inline-block;
  border-bottom: 10px solid #bf9d6d;
  @media screen and (max-width: 1230px) {
    border-bottom: 7px solid #bf9d6d;
  }
`;

const Data = styled.div`
  margin-bottom: 10vw;
  height: 29%;
`;

const Wrap = styled.div`
  background-color: white;
`;

export default FieldGame;