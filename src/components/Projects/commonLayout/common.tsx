import {FC} from 'react';
import styled           from 'styled-components';
import Image                              from 'next/image';

const Common:FC = () => <>
    <Flex>
        <Symbol>
            <Image src="/images/newExperience.png" width={20} height={20} layout='responsive' alt="シンボルロゴ"/>
        </Symbol>
        <Text>
          <Center>
            <Subject>企画の名前！！</Subject>
          </Center>
          <Explain></Explain>
          <Explain>説明！！！</Explain>
          <Explain>こんな感じで行ごとに区切ると</Explain>
          <Explain>ボーダーが映えていい感じに見やすく</Explain>
          <Explain>なると思います</Explain>
        </Text>
    </Flex>

    <SecondFlex>
        <Picture>
            <Image src="/images/newEntrance-background-1.jpg" width={20} height={20} layout='responsive' alt="宣材写真"/>
        </Picture>
        <MoreText>
            <MoreSubject>補足・追加説明</MoreSubject>
            <MoreExplain>名前とか</MoreExplain>
            <MoreExplain>場所とか</MoreExplain>
            <MoreExplain>時間とか</MoreExplain>
            <MoreExplain>そんな感じ。</MoreExplain>
        </MoreText>
    </SecondFlex>
</>

const Flex = styled.div`
  background-color: black;
  display: flex;
  justify-content: space-between;
  padding-top: 7vw;
  padding-bottom: 10vw;
  @media screen and (max-width: 1230px) {
    display: block;
  }
`;

const SecondFlex = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  padding-top: 2vw;
  padding-bottom: 10vw;
  @media screen and (max-width: 1230px) {
    display: block;
  }
  border-bottom: 5px solid #000;
`;

const Symbol = styled.article`
    width: 30%;
    margin:0 auto;
`;

const Picture = styled.article`
    width: 40%;
    order: 2;
    margin:0 auto;
`;

const Text = styled.aside`
  margin-top: 5vw;
  width: 60%;
  @media screen and (max-width: 1230px) {
    width: 100%;
  }
`;

const MoreText = styled.aside`
  margin-left: 2%;
  width: 50%;
  order: 1;
  @media screen and (max-width: 1230px) {
    margin-left: 0%;
    width: 100%;
  }
`;

const Center = styled.div`
  text-align: center;
`;

const Subject = styled.h1`
  border-bottom: 10px solid #bf9d6d;
  color: white;
  display: inline-block;
  @media screen and (max-width: 1230px) {
    border-bottom: 7px solid #bf9d6d;
  }
`;

const MoreSubject = styled.h1`
    border-bottom: 5px black solid;
    color: black;
    display: inline-block;
`;

const Explain = styled.h3`
  border-bottom: 1px white solid;
  color: white;
  padding: 10px;
  @media screen and (max-width: 1230px) {
    font-size: 12px;
  }
`;

const MoreExplain = styled.h3`
    border-bottom: 1px black solid;
    color: black;
    margin-left: 5%;
    padding: 10px;
`;

export default Common;