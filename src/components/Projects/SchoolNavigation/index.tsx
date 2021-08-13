import { FC } from "react";
import styled from "styled-components";

const SchoolNavigation:FC = () => {
  return (
    <Wrap>
      <Title>校内案内</Title>
      <Logo src={process.env.basePath + "/images/schoolNavigationLogo.png"}/>
      <Description>
        この企画は桐朋の生徒会主催の企画で、桐朋生が桐朋に興味がある人、
        受験を考えている人を対象に校内を案内するものです。
      </Description>
      <Location>＜受付＞:高校昇降口前のテント</Location>
      <h2>＜受付時間＞</h2>
      <Center>
        <TimeSchedule>
          <Saturday>
            <p>土曜日</p>
            <p>13:00~14:00</p>
            <p>14:00~15:00</p>
            <p>15:00~16:00</p>
            <p>16:00~17:00</p>
          </Saturday>
          <Sunday>
            <p>日曜日</p>      
            <p>10:00~11:00</p>
            <p>11:00~12:00</p>
            <p>13:00~14:00</p>
            <p>14:00~15:00</p>
            <p>15:00~16:00</p>
            <p>16:00~17:00</p>
          </Sunday>
        </TimeSchedule>
      </Center>
      <Attentions>
        <h2>＜注意事項＞</h2>
        <AttentionList>
          この企画は<Strong>予約制</Strong>となっております。ご希望の時間の<Strong>10分前</Strong>までには予約をお願いします。
        </AttentionList>
        <AttentionList>
          ご予約された時間の<Strong>5分前</Strong>までには受付周辺までにお越しください。
        </AttentionList>
      </Attentions>
    </Wrap>
  );
}

export default SchoolNavigation

const Wrap = styled.div`
  background-color: white;
  font-family: 'ヒラギノ丸ゴ ProN W4', 'ＭＳ 明朝';
  padding-left: 3%;
  padding-right: 3%;
`;

const Title = styled.h1`
  text-align: center;
  border: 4px solid #82636b;
  border-radius: 240px 15px 185px 15px / 15px 200px 15px 185px;
  font-family: 'ヒラギノ明朝 ProN W3','ＭＳ 明朝';
  
`;

const Logo = styled.img`
  float: left;
  width: 40%;
`;

const Description = styled.div`

`;

const Location = styled.h2`
  clear: both;
`;

const Center = styled.div`
`;

const TimeSchedule = styled.div`
  justify-content: center;
  text-align: center;
  display: flex;
`;

const Saturday = styled.span`
  border-right: 3px;
  margin-right:2%;
`;

const Sunday = styled.span`
`;

const Attentions = styled.ul`

`;

const AttentionList = styled.li`

`;

const Strong = styled.span`
  font-family: 'ヒラギノ丸ゴ ProN W6';
  font-weight: bold;
  text-decoration:underline wavy #000000;
  color: red;
`;