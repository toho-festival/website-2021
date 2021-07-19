import { FC } from 'react';
import styled from 'styled-components';

const MusicClub = () => {
  return(
    <>
      <Title>〜桐朋学園男子部吹奏楽団〜</Title>
      <SubTitle>アンサンブル</SubTitle>
      <Explain>アンサンブルとは、少人数で行う演奏のことで、パート毎のアンサンブルや、学年毎のアンサンブルなど、様々なアンサンブルがあります。土曜日は全日、日曜日は午前に教科教室棟2階の音楽室で行っております。途中の出入りは自由です。是非お越しください！</Explain>
      
      <SubTitle>校内演奏会</SubTitle>
      <Explain>校内演奏会は小学校講堂で、日曜日の午後に開催します。皆さんが楽しめる曲を演奏します！部員全員による演奏で、アンサンブル迫力のある桐朋サウンドが待っております！13:30開場、14:00開演です。是非お越しください！</Explain>
        <SubTitle>アンサンブルタイムテーブル<TimeTable src=""/></SubTitle>
      <SubTitle>第49回定期演奏会のお知らせ</SubTitle>
      <Explain>
        当楽団は、11月26日にたましんRISURUホールにて、定期演奏会を開催いたします。一年間の集大成となる演奏会、こちらもお誘い合わせの上、是非お越しください！
        会場
        たましんRISURUホール
        <Access>アクセス</Access>
          <li>JR中央線立川駅南口より、徒歩13分。</li>
          <li>JR南武線西国立駅より、徒歩7分。</li>
          <li>多摩モノレール立川南駅より、立川南通りを直進。徒歩12分。</li>
        </Explain>
      <Url href="">定期演奏会公式ホームページ</Url>
    </>
  );
} 

export default MusicClub;

const Title = styled.h1`

`;

const SubTitle = styled.h2`

`;

const Schedule = styled.h2`

`;

const TimeTable = styled.img`

`;

const Explain = styled.div`

`;

const Access = styled.ul`

`;

const Url = styled.a`

`;