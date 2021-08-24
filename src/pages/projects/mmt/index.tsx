import { FC } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

const Mmt: FC = () => {
  const router = useRouter();
  return (
    <Wrap>
      <Button onClick={() => router.back()}>＜元のページに戻る</Button>
      <GroupName>-MMT-</GroupName>
      <Center><Logo src={process.env.basePath + "/images/mmtLogo.jpg"} /></Center>
      <SubTitle>メンバー</SubTitle>
      <MemberImage src={process.env.basePath + "/images/mmtMember.jpg"} />
      <MemberList>
        <Member>古山　円造</Member>
        <Member>橋本　結</Member>
        <Member>天野　赳瑠</Member>
        <Member>堀口　晃維</Member>
      </MemberList>
      <SubTitle>曲</SubTitle>
      <Music>令人震惊的打击<Link href="https://www.youtube.com/watch?v=TgxOMybZ_o0">リンク</Link></Music>
      <Music>خيال<Link href="https://www.youtube.com/watch?v=ZFoJYI7Q4iA">リンク</Link></Music>
      <Music>šialenstvo Hej!deti!<Link href="https://www.youtube.com/watch?v=C-o8pTi6vd8">リンク</Link></Music>
    </Wrap>
  );
}

export default Mmt

const Wrap = styled.div`
  background-color: white;
  padding-left: 5%;
`;

const GroupName = styled.h1`
  text-align: center;
`;

const Center = styled.div`
  text-align: center;
`;

const Logo = styled.img`
  width: 50%;
`;

const SubTitle = styled.h2`
  clear: both;
`;

const MemberImage = styled.img`
  float: left;
  width: 40%;
`;

const MemberList = styled.ul`
  list-style: none;
`;

const Member = styled.li`
`;

const Link = styled.a`
  :link {
    color: #0000EE;
    text-decoration: underline;
  }

  :visited {
    color: #551A8B;
    text-decoration: underline;
  }

  :active {
    color: #FF0000;
    text-decoration: underline;
  }
`;

const Music = styled.div`
  text-align: center;
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