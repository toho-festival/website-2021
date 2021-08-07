import { FC } from 'react';
import styled from 'styled-components';

const Neetles: FC = () => {
  return (
    <>
      <BandName>〜THE NEETLES〜</BandName>
      <Member src="" />
      <AboutBand></AboutBand>
      <SubTitle><Icon src=""/>見どころ</SubTitle>
      <Member src ="" />
      <MusicList>
        <Music>曲</Music>
        <Music></Music>
        <Music></Music>
      </MusicList>
      <Explain><p>名曲続々・・・</p><p>誰もがきいいたことのある</p><p>あの曲まで</p></Explain>
      <Comment>＜ひとこと＞</Comment>
    </>
  );
}

export default Neetles;

const BandName = styled.h1`
  text-align:center;
`;

const Member = styled.img`
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

`;

const MusicList = styled.ul`
  list-style:none;
`;

const Music = styled.li`

`;

const Explain = styled.div`

`;

const Comment = styled.h2`

`;