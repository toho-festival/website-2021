import styled from 'styled-components';
import { useRouter } from "next/router";

const QuizClub = () => {
  const router = useRouter();
  return(
    <>
      <Button onClick={() => router.back()}>＜元のページに戻る</Button>
      <Name>クイズ研究会</Name>
      <Theme>桐朋祭での活動</Theme>
      <Info>
        <span>
          <Content>ペーパークイズ</Content>
          <Text>75問のペーパークイズです。友達や家族とどっちがより多く取れるか勝負しよう。</Text>
        </span>
        <MidBox>
          <Content>早押し対決</Content>
          <Text>実際に早押しクイズをすることができます。部員がつくった1問1問を是非お楽しみください。</Text>
        </MidBox>
        <span>
          <Content>練習試合</Content>
          <Text>国立高校、立川高校等の他校との練習試合を予定しています。</Text>
        </span>
      </Info>
      <Drive>普段の活動</Drive>
      <Text>
        普段は早押しクイズをしています。コロナ禍で対面で出来なかった時にはオンラインでクイズをしていました。
        他校との合同部活もよくしました。たま〜に誰かが小さい大会をすることもあります。ここで得た知識を大会に活かします。
        大会には関東の開成高校や早稲田高校などの高校が主催してくれるabc、STUなどがあります。そこで成績を残すために部活で練習をしています。
      </Text>
      <Question>最後に一問</Question>
      <QuestionText>Q.パンの袋などを留める際に用いる、これの名称は？</QuestionText>
      <Img src={process.env.basePath + "/images/bagclosure.png"} alt="バッグ・クロージャーの写真" />
    </>
  );
}

const Name = styled.h1`
  text-align:center;
  color: white;
`;

const Theme = styled.h2`
  text-align:center;
  color: white;
`;

const Info = styled.div`
  display: flex;
  list-style: none;
  padding: 3%;
`;

const MidBox = styled.div`
  border-right: solid 3px white;
  border-left: solid 3px white;
  float: left;
`;

const Content = styled.span`
  color: white;
`;

const Text = styled.p`
  color: white;
  padding: 3%;
`;

const Drive = styled.h2`
  clear: both;
  text-align:center;
  color: white;
`;

const Question = styled.h2`
  text-align:center;
  color: white;
`;

const QuestionText = styled.p`
  color: white;
  float: left;
  margin-left: 10%;
`;

const Img = styled.img`
  width: 30%;
`;

const Button = styled.a`
  border: 4px solid #ffffff;
  margin-top: 4px;
  border-radius: 150px;
  background: #fff;
  color: black;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  padding: 6px;

  :hover {
    color: #fff;
    background: #1a1a1a;
  }
  @media screen and (max-width: 767px) {
    padding: 2px;
  }
`;

export default QuizClub;