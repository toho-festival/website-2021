import { FC } from "react";
import styled from "styled-components";

const Mmt = () => {
  return (
    <>
      <GroupName>MMT</GroupName>
      <SubTitle>メンバー</SubTitle>
      <MemberList>
        <Member>古山　円造</Member>
        <Member>橋本　結</Member>
        <Member>天野　赳瑠</Member>
        <Member>堀口　晃維</Member>
      </MemberList>
      <SubTitle>曲</SubTitle>
      <Music>令人震惊的打击<a href="https://www.youtube.com/watch?v=TgxOMybZ_o0">リンク</a></Music>
      <Music>خيال<a href="https://www.youtube.com/watch?v=ZFoJYI7Q4iA">リンク</a></Music>
      <Music>狂乱Hey!kids!<a href="https://www.youtube.com/watch?v=C-o8pTi6vd8">リンク</a></Music>
    </>
  );
}

export default Mmt

const SubTitle = styled.h2`

`;

const MemberList = styled.ul`
  list-style: none;
`;

const Member = styled.li`

`;

const Music = styled.div`
  text-align: center;
`;