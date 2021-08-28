import { FC } from 'react';
import styled from 'styled-components';
import { useRouter } from "next/router";

const Title:FC = () => {
  const router = useRouter();
  return(
    <Wrap>
      <Button onClick={() => router.back()}>＜元のページに戻る</Button>
      <SchoolName>桐朋中学・高等学校</SchoolName>
      <Name>図書委員会</Name>
      <Location>於　2-F</Location>
    </Wrap>
  )
}

export default Title;

const Wrap = styled.div`
  padding-top: 3%;
`;

const SchoolName = styled.h3`
  padding-top: 3%;
  font-size: 3vw;
  text-align:center;
`;

const Name = styled.h1`
  font-size:10vw;
  text-align:center;
`;

const Location = styled.h2`
  color:red;
  font-size:6vw;
  text-align:center;
  margin-top: 5vw;
  :first-letter{
    color:black;
  }
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