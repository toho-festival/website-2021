import { FC } from 'react';
import styled from 'styled-components';
import { allProjects } from '~/src/scripts/all-projects';
import { PiePlot } from './data';
import { firebase } from '~/firebase/client';
import { useCollection } from 'react-firebase-hooks/firestore';

const FieldGame: FC = () => {

  // const [field, fieldLoading, fieldError] = useCollection(
  //   firebase.firestore().collection('field-game')
  // )
  
  return(
    <>
      <Title>総務企画　〜陣地取りゲーム〜</Title>
      <div>
        <RuleTitle>ルール説明</RuleTitle>
        <Explain>
          <p>各参加団体で最も来場者の割合が大きかったグループがその陣地(団体)を獲得することができます。</p>
          <p>最終的に獲得した陣地の数が最も多いグループの勝利となります。</p>
          <h2>STEPⅠ</h2>
          <div>ホームページ、入場時の案内で自分のグループの色を確認します 。</div>
          <h2>STEPⅡ</h2>
          <div>
            <p>各参加団体の出口にある台紙に自分のグループの色のペンでマークして下さい。これを訪れた全ての参加団体で行います。</p>
            <p>途中結果を確認するには…</p>
            <p>① 昇降口での結果速報</p>
            <p>② 第70回桐朋祭ホームページでの結果速報 </p>
            <p>最終的に取得した陣地の数が最も多いグループの勝利となります</p>
            <p>＜補足＞</p>
            <p>結果の更新頻度は1時間を予定しています。</p>
          </div>
        </Explain>
      </div>
      <DataTitle>参加団体ごとの団体割合</DataTitle>
      {/* <Data>
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
      </Data> */}
    </>
  )
}

const Title = styled.h1`
  color: white;
  text-align: center;
`;

const RuleTitle = styled.h2`
  color: white;
`;

const Explain = styled.div`
  color: white;
`;

const DataTitle = styled.h2`
  color: white;
  text-align: center;
`;

const Data = styled.div`
  margin-bottom: 10vw;
  height: 29%;
`;

export default FieldGame;