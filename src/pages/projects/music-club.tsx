import { FC } from 'react';
import styled from 'styled-components';
import { useRouter } from "next/router";

const MusicClub = () => {
  const router = useRouter();
  return(
    <Wrap>
      <Button onClick={() => router.back()}>＜元のページに戻る</Button>
      <p>コロナウイルス蔓延防止のため今回は音楽部の桐朋祭での発表ができなくなりました。ご了承ください。</p>
      <h1>〜桐朋学園男子部吹奏楽団〜</h1>
      <h2>アンサンブル</h2>
      <div>アンサンブルとは、少人数で行う演奏のことで、パート毎のアンサンブルや、学年毎のアンサンブルなど、様々なアンサンブルがあります。土曜日は全日、日曜日は午前に教科教室棟2階の音楽室で行っております。途中の出入りは自由です。是非お越しください！</div>
      
      <h2>校内演奏会</h2>
      <div>校内演奏会は小学校講堂で、日曜日の午後に開催します。皆さんが楽しめる曲を演奏します！部員全員による演奏で、アンサンブル迫力のある桐朋サウンドが待っております！13:30開場、14:00開演です。是非お越しください！</div>
        <h2>アンサンブルタイムテーブル<TimeTable src={process.env.basePath + "/images/musicClubSchedule.png"}/></h2>
      <h2>第49回定期演奏会のお知らせ</h2>
      <div>
        当楽団は、11月26日にたましんRISURUホールにて、定期演奏会を開催いたします。一年間の集大成となる演奏会、こちらもお誘い合わせの上、是非お越しください！
        会場
        たましんRISURUホール
        <ul>アクセス</ul>
          <li>JR中央線立川駅南口より、徒歩13分。</li>
          <li>JR南武線西国立駅より、徒歩7分。</li>
          <li>多摩モノレール立川南駅より、立川南通りを直進。徒歩12分。</li>
        </div>
      <a href="">定期演奏会公式ホームページ</a>
    </Wrap>
  );
} 

export default MusicClub;

const Wrap = styled.div`
  background-color: white;
  padding-left: 2%;
  padding-top: 3%;
`;

const TimeTable = styled.img`
  width: 100%;
`;

const Button = styled.a`
  border: 4px solid #1a1a1a;
  margin-top: 4px;
  border-radius: 150px;
  background: #1a1a1a;
  color: #fff;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  padding: 6px;

  :hover {
    color: #1a1a1a;
    background: #fff;
  }
  @media screen and (max-width: 767px) {
    padding: 2px;
  }
`;