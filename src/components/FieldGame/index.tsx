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
    <>
      <Title>総務企画　〜陣地取りゲーム〜</Title>
      <Rules>
        <RuleTitle>ルール説明</RuleTitle>
        <Explain>
          <Paragraph>各参加団体で最も来場者の割合が大きかったグループがその陣地(団体)を獲得することができます。</Paragraph>
          <Paragraph>最終的に獲得した陣地の数が最も多いグループの勝利となります。</Paragraph>
          <StepNumber>STEPⅠ</StepNumber>
          <Content>ホームページ、入場時の案内で自分のグループの色を確認します 。</Content>
          <StepNumber>STEPⅡ</StepNumber>
          <Content>
            <Paragraph>各参加団体の出口にある台紙に自分のグループの色のペンでマークして下さい。これを訪れた全ての参加団体で行います。</Paragraph>
            <Paragraph>途中結果を確認するには…</Paragraph>
            <Paragraph>① 昇降口での結果速報</Paragraph>
            <Paragraph>② 第70回桐朋祭ホームページでの結果速報 </Paragraph>
            <Paragraph>最終的に取得した陣地の数が最も多いグループの勝利となります</Paragraph>
            <Paragraph>＜補足＞</Paragraph>
            <Paragraph>結果の更新頻度は1時間を予定しています。</Paragraph>
          </Content>
        </Explain>
      </Rules>
      <DataTitle>参加団体ごとの団体割合</DataTitle>
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
    </>
  )
}

const Title = styled.h1`
  color: white;
  text-align: center;
`;

const Rules = styled.div``;

const RuleTitle = styled.h2`
  color: white;
`;

const Explain = styled.div`
  color: white;
`;

const StepNumber = styled.h2`

`;

const Content = styled.div`

`;

const Paragraph = styled.p`

`;

const DataTitle = styled.h2`
  color: white;
  text-align: center;
`;

const Data = styled.div`
  margin-bottom: 10vw;
  height: 29%;
`;

const Wrap = styled.div``;

export default FieldGame;