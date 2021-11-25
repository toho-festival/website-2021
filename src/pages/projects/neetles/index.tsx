import { FC } from 'react';
import styled from 'styled-components';
import { useRouter } from "next/router";

const Neetles: FC = () => {
  const router = useRouter();
  return (
    <Wrap>
      <Button onClick={() => router.back()}>＜元のページに戻る</Button>
      <BandName>〜THE NEETLES〜</BandName>
      <Member src={process.env.basePath + "/images/neetlesLogo.jpg"} />
      <AboutBand>
        こんにちは。THE NEETLESです。
        もしかすると題字を見た方はわかってしまったかもしれませんが、僕たちはTHE BEATLESの曲を演奏するバンドです。
        ところで皆さんはTHE BEATLESの曲を知っていますか？
        YESTERDAY、LET IT BEあたりはご存じかもしれませんが実は他にもたくさんの有名な曲たちを世に送り出しています。
        そのような曲たちを僕たちは紹介したいのです。
      <ListName>主なセットリスト</ListName>
      <MusicList>
        <li>1.A HARD DAY’S NIGHT</li>
        <li>2.I’M A LOSER</li>
        <li>3.PAPERBACK WRITER</li>
        <li>4.YESTERDAY</li>
        <li>5.BLACK BIRD</li>
      </MusicList>
      <p>ほかの曲ももしかしたらやるかもしれません…</p>
      </AboutBand>
      <SubTitle><Icon src={process.env.basePath + "/images/fishSakeKirimi.png"}/>見どころ</SubTitle>
      <Member src ="" />
      <div><p>名曲続々・・・　誰もがきいいたことのある　あの曲まで</p></div>
    </Wrap>
  );
}

export default Neetles;

const Wrap = styled.div`
  background-color: white;
  padding-left: 5%;
  padding-top: 3%;
`;

const BandName = styled.h1`
  text-align:center;
`;

const Member = styled.img`
  width: 40%;
  float:left;
`;

const AboutBand = styled.div`
  ::first-letter{
    font-size:1.5rem;
  }
`;

const SubTitle = styled.h2`
  text-decoration:underline;
`;

const Icon = styled.img`
  width: 5%;
`;

const ListName = styled.h2`
  clear: both;
`;

const MusicList = styled.ul`
  list-style:none;
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