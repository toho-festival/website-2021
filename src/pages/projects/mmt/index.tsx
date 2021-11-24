import { FC } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

const Mmt: FC = () => {
  const router = useRouter();
  return (
    <Wrap>
      <Button onClick={() => router.back()}>＜元のページに戻る</Button>
      <GroupName>-MMT-</GroupName>
      <YoutubePlayer>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/J_VFa7SJvTo" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </YoutubePlayer>
      <YoutubePlayer>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/DYc-gJnw3BA" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </YoutubePlayer>
      <Center><Logo src={process.env.basePath + "/images/mmtLogo.jpg"} /></Center>
      <SubTitle>メンバー</SubTitle>
      <MemberImage src={process.env.basePath + "/images/mmtMember.jpg"} />
      <MemberList>
        <li>古山　円造</li>
        <li>橋本　結</li>
        <li>天野　赳瑠</li>
        <li>堀口　晃維</li>
      </MemberList>
      <SubTitle>曲</SubTitle>
      <Center>
        <div>令人震惊的打击<Link href="https://www.youtube.com/watch?v=TgxOMybZ_o0">リンク</Link></div>
        <div>خيال<Link href="https://www.youtube.com/watch?v=ZFoJYI7Q4iA">リンク</Link></div>
        <div>šialenstvo Hej!deti!<Link href="https://www.youtube.com/watch?v=C-o8pTi6vd8">リンク</Link></div>
      </Center>
    </Wrap>
  );
}

export default Mmt

const Wrap = styled.div`
  background-color: white;
  padding-left: 5%;
  padding-top: 3%;
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

const YoutubePlayer = styled.div`
  margin: 0px auto;
  width: 70%;
  aspect-ratio: 16 / 9;
  > iframe {
    width: 100%;
    height: 100%;
  }
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