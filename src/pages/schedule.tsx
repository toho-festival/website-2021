import { FC } from 'react';
import styled from 'styled-components';

const Schedule: FC = () => {
  return (
    <Wrap>
      <Center>
        <Title>開催日時</Title>
      </Center>
      <article>
      <Center><section>今年度の桐朋祭はコロナウイルス蔓延防止のため<Important>開催日時が例年と異なって</Important>います。<p>具体的な日時は以下の通りです。よくご確認の上でご来場ください</p></section></Center>
        <Center>
          <Date>
            <Frame>
              <p>９<Weaken>月</Weaken>11<Weaken>日</Weaken>(<Color color="blue">土</Color>) {/*13:00~17:00*/}
              ９<Weaken>月</Weaken>12<Weaken>日</Weaken>(<Color color="red">日</Color>) {/*09:30～12:00　13:00～17:00*/}
              ９<Weaken>月</Weaken>13<Weaken>日</Weaken>(<Color color="black">月</Color>) {/*09:30～13:00*/}</p>
            </Frame>
          </Date>
        </Center>
        <Center>
          <Attentions>
            {/* <p>※日曜日は午前と午後のⅡ部制となっています。</p> */}
            <p>※今年度の桐朋祭は生徒のみとなります</p>
          </Attentions>
        </Center>
      </article>
      <Center>
        <Image src={process.env.basePath + "/images/rainy-cool-guy.png"} />
      </Center>
    </Wrap>
  );
}

export default Schedule;

const Center = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  margin-top: 5vw;
  margin-bottom: 5vw;
  display: inline-block;
  font-size: 50px;
  border-bottom: 10px solid #bf9d6d;
  @media screen and (max-width: 1230px) {
    font-size: 25px;
    border-bottom: 7px solid #bf9d6d;
  }
`;

const Wrap = styled.div`
  background-color: white;
  border-bottom: 5px black solid;
  @media screen and (max-width: 1230px) {
    
  }
`;

const Important = styled.i`
  color: #de4d4d;
`;

const Date = styled.section`
  margin-top: 10vw;
  margin-bottom: 5vw;
  font-size: 30px;
  display: inline-block;
  @media screen and (max-width: 1230px) {
    font-size: 15px;
  }
`;

const Frame = styled.div`
  border: dashed 2px #bf9d6d;
  text-align: initial;
`;

const Weaken = styled.strong`
  font-size: 25px;
  @media screen and (max-width: 1230px) {
    font-size: 10px;
  }
`;

const Color = styled.strong`
  &[color='blue'] {
    color: #3b82c4;
  }
  &[color='red'] {
    color: #de4d4d;
  }
  &[color='black'] {
        color: #000;
  }
`;

const Image = styled.img`
  @media screen and (max-width: 1230px) {
    width: 80%;
  }
`;

const Attentions = styled.section`
  margin-bottom: 10vw;
  list-style:none;
  font-size:0.8rem;
  display: inline-block;
  text-align: initial;
  :nth-child(2n) {
    font-size:1rem;
  }
`;