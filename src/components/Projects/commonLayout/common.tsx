import {FC} from 'react';
import styled           from 'styled-components';
import {groups} from "~/src/scripts/common";
import Image                              from 'next/image';
import { useRouter } from 'next/router';
import {useState} from 'react';

const Common:FC = () => {
  
    // const router = useRouter();
    // const {
    //   query: { group }
    // } = router

  return(
  <>{
    groups.map(
      ({title,photo, logo, textup, textdown}) =><>
    <Flex>
      <Symbol>
        <Image src={logo} width={20} height={20} layout='responsive' alt="シンボルロゴ"/>
      </Symbol>
      <Text>
        <Center>
          <Subject>{title}</Subject>
        </Center>
        <Explain>{textup}</Explain>
      </Text>
    </Flex>

    <SecondFlex>
      <Picture>
        <Img src={photo} width={20} height={20} layout='responsive' alt="宣材写真"/>
      </Picture>
      <MoreText>
        <MoreSubject>{textdown}</MoreSubject>
      </MoreText>
    </SecondFlex>
</>)}
  </>
  );
}

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

const Img = styled.img`
  width: 100%;
  height: auto;
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
  padding-top: 20px;
  display: inline;
  background: linear-gradient(#000 95%, #fff 100%) ; 
  line-height: 2px;
  text-decoration: none;
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