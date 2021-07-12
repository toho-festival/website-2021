import styled from 'styled-components';

const QuizClub = () => {
  return(
    <>
      <Name>クイズ研究会</Name>
      <Theme>桐朋祭での活動</Theme>
      <Info>
        <Content>ペーパークイズ</Content>
        <Text>75問のペーパークイズです．友達や家族とどっちがより多く取れるか勝負しよう．</Text>
        <Content>早押し対決</Content>
        <Text>実際に早押しクイズをすることができます．部員がつくった1問1問を是非お楽しみください．</Text>
        <Content>練習試合</Content>
        <Text>国立高校，立川高校等の他校との練習試合を予定しています．</Text>
      </Info>
      <Drive>普段の活動</Drive>
      <Text>普段は早押しクイズをしています．コロナ禍で対面で出来なかった時にはオンラインでクイズをしていました．
        他校との合同部活もよくしました．たま〜に誰かが小さい大会をすることもあります．ここで得た知識を大会に活かします．
        大会には関東の開成高校や早稲田高校などの高校が主催してくれるabc,STUなどがあります．そこで成績を残すために部活で練習をしています．
      </Text>
      <Problem>最後に一問</Problem>
      <Text>この絵画の作品名，そして作者名を答えよ</Text>
      <img src="../waterfall.jpg" alt="マウリッツエッシャー作『滝』" title="解答"></img>
    </>
  );
}

const Name　= styled.h1`
  text-align:center;
  color: white;
`;

const Theme = styled.h2`
  text-align:center;
  color: white;
`;

const Info = styled.ul`
  display: flex;
`;

const Content = styled.li`
  text-align:center;
  width: calc(33.33% - 13px);
  color: white;
`;

const Text = styled.p`
  text-align:center;
  width: calc(33.33% - 13px);
  color: white;
  padding:10%;
`;

const Drive = styled.h2`
  text-align:center;
  color: white;
`;

const Problem = styled.h2`
  text-align:center;
  color: white;
`;

export default QuizClub;