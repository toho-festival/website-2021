import { FC } from 'react';
import React from "react";
import styled from 'styled-components';
import { getSortedPostsData } from '~/src/scripts/projects';
import { useRouter } from "next/router";
import Link from 'next/link';
import Tabs from '~/src/components/Projects/index';

type TabProps = {
  selected: boolean;
}

type AllPropsDataType = {
  id: string
  categoly: number;
  title: string
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
const CommonProjects: FC = ({ allPostsData }) => {
  const router = useRouter();
  const {
    query: { tab }
  } = router

  const isTabOne = tab === "1" || tab == null
  const isTabTwo = tab === "2"

  return (
    <Wrap>
      <TabContainer>
        <TabHead>
          <Tab selected={isTabOne}>
            <Link href="">
              <a>一般参加団体</a>
            </Link>
          </Tab>
          <Tab selected={isTabTwo}>
            <Link href={{ pathname: "/projects", query: { tab: "2" } }}>
              <a>ステージ企画</a>
            </Link>
          </Tab>
        </TabHead>
        <TabBody>
          {isTabOne && 
          <>
            <Title>
              <Colmn>
                <div><Musicimg src={ process.env.basePath + "/images/newExperience.png"} alt="体験型企画の画像" /></div>
              </Colmn>
              <Categoly>
                <CategolyName>　体験型企画</CategolyName>
                <OnePoint>　最高の</OnePoint>
                <OnePoint>　エンターテイメント</OnePoint>
              </Categoly>
            </Title>
            <Description>
              <Center><CategolyDiscriptionTitle>体験型企画について</CategolyDiscriptionTitle></Center>
              <Arrangement>
                <Sentence>{/*ここに文字を入れてはいけない。29文字を超えないように。*/}</Sentence>
                <Sentence>あああああああああああああああああああああああああああああ</Sentence>
                <Sentence>あああああああああああああああああああああああああああああ</Sentence>
              </Arrangement>
            </Description>
            <Contents>
            {allPostsData.map(({ id, title, categoly }: AllPropsDataType) => (
                categoly == 1 ?
                  <ProjectContent key={id}>
                    
                    <Link href={"/projects/" + id}>
                      <a>
                        <Img src={process.env.basePath + "/images/photo-" + id + ".jpg"} alt={title + "のアイコン"}/>
                        <Name>{title}</Name>
                      </a>
                    </Link>
                  </ProjectContent>
                  : null
            ))}
            </Contents>
            {/* <---ここから展示企画---> */}
            <Title>
              <Colmn>
                <div><Musicimg src={ process.env.basePath + "/images/newExperience.png"} alt="体験型企画の画像" /></div>
              </Colmn>
              <Categoly>
                <CategolyName>　展示企画</CategolyName>
                <OnePoint>　個性の爆発</OnePoint>
              </Categoly>
            </Title>
            <Description>
              <Center><CategolyDiscriptionTitle>展示企画について</CategolyDiscriptionTitle></Center>
              <Arrangement>
                <Sentence>{/*ここに文字を入れてはいけない。29文字を超えないように。*/}</Sentence>
                <Sentence>あああああああああああああああああああああああああああああ</Sentence>
                <Sentence>あああああああああああああああああああああああああああああ</Sentence>
              </Arrangement>
            </Description>
            <Contents>
            {allPostsData.map(({ id, title, categoly }: AllPropsDataType) => (
                categoly == 2 ?
                  <ProjectContent key={id}>
                    
                    <Link href={"/projects/" + id}>
                      <a>
                        <Img src={process.env.basePath + "/images/photo-" + id + ".jpg"} alt={title + "のアイコン"}/>
                        <Name>{title}</Name>
                      </a>
                    </Link>
                  </ProjectContent>
                  : null
            ))}
            </Contents>
            {/* <---ここから音響---> */}
            <Title>
              <Colmn>
                <div><Musicimg src={process.env.basePath + "/images/newMusic.png"} alt="音楽企画の画像" /></div>
              </Colmn>
              <Categoly>
                <CategolyName>　音楽企画</CategolyName>
                <OnePoint>　桐朋生の奏でる</OnePoint>
                <OnePoint>　最高のMUSIC</OnePoint>
              </Categoly>
            </Title>
            <Description>
              <Center><CategolyDiscriptionTitle>音楽企画について</CategolyDiscriptionTitle></Center>
              <Arrangement>
                <Sentence>{/*ここに文字を入れてはいけない。29文字を超えないように。*/}</Sentence>
                <Sentence>あああああああああああああああああああああああああああああ</Sentence>
                <Sentence>あああああああああああああああああああああああああああああ</Sentence>
              </Arrangement>
            </Description>
            <Contents>
              {allPostsData.map(({ id, title, categoly }: AllPropsDataType) => (
                categoly == 3 ?
                  <ProjectContent key={id}>
                    
                    <Link href={"/projects/" + id}>
                      <a>
                        <Img src={process.env.basePath + "/images/" + id + ".jpg"} alt={title + "のアイコン"} />
                        <Name>{title}</Name>
                      </a>
                    </Link>
                  </ProjectContent>
                  : null
              ))}
            </Contents>
            {/* <---ここからその他---> */}
            <Title>
              <Colmn>
              </Colmn>
              <Categoly>
                <CategolyName>　その他の企画</CategolyName>
              </Categoly>
            </Title>
            <Contents>
              {allPostsData.map(({ id, title, categoly }: AllPropsDataType) => (
                categoly == 4 ?
                  <ProjectContent key={id}>
                    
                    <Link href={"/projects/" + id}>
                      <a>
                        <Img src={process.env.basePath + "/images/" + id + ".jpg"} alt={title + "のアイコン"} />
                        <Name>{title}</Name>
                      </a>
                    </Link>
                  </ProjectContent>
                  : null
              ))}
            </Contents>

          </>
          }

          {isTabTwo && <>あ</>}

        </TabBody>
      </TabContainer>
    </Wrap>
  )
}

export default CommonProjects;

const Wrap = styled.div`
  color: white;
`;
const TabHead = styled.div`
  border-bottom: 1px solid gray;
  display: flex;
  background: black;
`;

const TabContainer = styled.div`
  width: 100%;
  height: 100%;
  webkit-box-shadow: -1px 0px 5px 0px rgba(184, 184, 184, 1);
  -moz-box-shadow: -1px 0px 5px 0px rgba(184, 184, 184, 1);
  box-shadow: -1px 0px 5px 0px rgba(184, 184, 184, 1);

  @keyframes border_anim {
	0%{
		width: 0%;
	}
	100%{
		width: 100%;
	}
}
`;

const TabBody = styled.div`
  height: 100%;
  color: white;
`;

const Tab = styled.div<TabProps>`
  width: 50%;
  padding: 1em;
  text-align: center;
  a {
    display: inline-block;
    position: relative;
    :before{
      content: '';
      position: absolute;
      left: 50%;
      bottom: 0;
      width: 0;
      transform: translateX(-50%);
      border-bottom: solid 3px ${({ selected }) => (selected ? "#4169e1" : "none")};
      animation: border_anim 0.9s linear forwards;
      }
    }
  background: ${({ selected }) => (selected ? "white" : "#f0f0f0")};
  color: ${({ selected }) => (selected ? "#4169e1" : "black")};
`;

const Musicimg = styled.img`
  width: 20vw;
  @media screen and (max-width: 767px) {
  width:30vw;
  }
`;

const Title = styled.div`
  display:flex;
  margin-top: 10vw;
  margin-right: 5vw;
  justify-content: center;
`;

const CategolyName = styled.h2`
  color: #FBB03B;
  opacity: .8;
  background: -webkit-linear-gradient(bottom, #ffffdb, #a16422);
  background: linear-gradient(to top, #ffffdb, #a16422);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  :hover{
    text-shadow: 0 0 15px rgba(250, 250, 214, 0.3),
    0 0 15px rgba(250, 250, 214, 0.3), 0 0 15px rgba(250, 250, 214, 0.3),
    0 0 15px rgba(250, 250, 214, 0.3);
  }
`;

const OnePoint = styled.h2`
  @media screen and (max-width: 767px) {
    font-size:20px;
  }
`;

const Arrangement = styled.div`
  margin-bottom: 3vw;
  display: inline-block;
`;

const Sentence = styled.div`
  border-bottom: 1px #ddd solid;
  padding: 10px;
  text-align: center;
  @media screen and (max-width: 767px) {
    font-size:10px;
  }
`;

const Colmn = styled.article`
  margin-right: 2vw;
  div{
    transition-duration: 0.3s;
    :hover{
      transform: scale(1.05);
      transition-duration: 0.3s;
    }
  }
  @media screen and (max-width: 767px) {
    margin-right: 0vw;
    div{
      transition-duration: 0s;
      :hover{
        transform: scale(1);
        transition-duration: 0s;
      }
    }
  }
`;

const Categoly = styled.aside`
  margin-top:5vw;
`;

const Description = styled.div`
  margin-top:10vw;
  text-align: center;
`;

const Center = styled.div`
  text-align: center;
`;

const CategolyDiscriptionTitle = styled.h4`
  margin-bottom: 1.5vw;
  border-bottom: #bf9d6d 2px solid;
  display: inline-block;
`;

const Contents = styled.div`
  margin-top: 30%;
  margin: 0 auto;
  overflow: hidden;
  display:grid;
  grid-template-columns:repeat(3, 1fr);
  gap: 1vw;
`;

const Project = styled.a`
  :hover{
    opacity: 0.6;
    transition-duration: 0.3s;
  }
  position: relative;
`;

const Img = styled.img`
  width: 100%;
  cursor: pointer;
  transition-duration: 0.3s;
`;

const Name = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%,-50%);
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  margin:0;
  padding:0;
  color: white;
`;

const ProjectContent = styled.div`
  :hover{
    opacity: 0.6;
    transition-duration: 0.3s;
  }
  position: relative;

`;