import React from "react";
import styled from 'styled-components';
import { getSortedPostsData } from '~/src/scripts/projects';
import { useRouter } from "next/router";
import Link from 'next/link';
import { experienceProject } from '~/src/scripts/experience';
import { exhibitionProject } from '~/src/scripts/exhibition';
import { musicProject } from '~/src/scripts/music';

type TabProps = {
  selected: boolean;
}

type AllProjectsPropsDataType = {
  id: string;
  categoly: string;
  title: string;
}

type AllStagePropsDataType = {
  id: string;
  categoly: string;
  title: string;
  textup:string;
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

const backGroundImageUrl04 = process.env.basePath + "/images/tesukiwashi-pattern-04.jpg";
const backGroundImageUrl08 = process.env.basePath + "/images/tesukiwashi-pattern-08.jpg";

const CommonProjects = ({ allPostsData }:{allPostsData:AllStagePropsDataType[]}) => {
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
            <Link href="/projects">
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
                <CategolyName id="experience">　体験型企画</CategolyName>
                <OnePoint>　最高の</OnePoint>
                <OnePoint>　エンターテイメント</OnePoint>
              </Categoly>
            </Title>
            <Description>
              <Center><CategolyDiscriptionTitle>体験型企画について</CategolyDiscriptionTitle></Center>
              <Arrangement>
                <Sentence>桐朋生の作成を実際に見るのではなく、その手で体験してみませんか？感染対策に十分配慮して行われますので訪れた際はぜひ！</Sentence>
              </Arrangement>
            </Description>
            <Contents>
            {allPostsData.map(({ id, title, categoly }: AllProjectsPropsDataType) => (
                categoly == "1" ?
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
            {experienceProject.map(({name, id, url})=>(
              <>
                <ProjectContent>
                  <Link href={"/projects/" + id}>
                    <a>
                      <Img src={process.env.basePath + "/images/" + url} alt={name + "のアイコン"}/>
                      <Name>{name}</Name>
                    </a>
                  </Link>
                </ProjectContent>
              </>
            ))}
            </Contents>
            {/* <---ここから展示企画---> */}
            <Title>
              <Colmn>
                <div><Musicimg src={ process.env.basePath + "/images/newExhibit.png"} alt="展示企画の画像" /></div>
              </Colmn>
              <Categoly>
                <CategolyName id="exhibit">　展示企画</CategolyName>
                <OnePoint>　個性の爆発</OnePoint>
              </Categoly>
            </Title>
            <Description>
              <Center><CategolyDiscriptionTitle>展示企画について</CategolyDiscriptionTitle></Center>
              <Arrangement>
                <Sentence>個性豊かな桐朋生が一年間かけて創り上げてきた作品や展示物をご覧ください！</Sentence>
              </Arrangement>
            </Description>
            <Contents>
            {allPostsData.map(({ id, title, categoly }: AllProjectsPropsDataType) => (
                categoly == "2" ?
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
            {exhibitionProject.map(({name, id, url})=>(
              <>
                <ProjectContent>
                  <Link href={"/projects/" + id}>
                    <a>
                      <Img src={process.env.basePath + "/images/" + url} alt={name + "のアイコン"}/>
                      <Name>{name}</Name>
                    </a>
                  </Link>
                </ProjectContent>
              </>
            ))}
            </Contents>
            {/* <---ここから音響---> */}
            <Title>
              <Colmn>
                <div><Musicimg src={process.env.basePath + "/images/newMusic.png"} alt="音楽企画の画像" /></div>
              </Colmn>
              <Categoly>
                <CategolyName id="music">　音楽企画</CategolyName>
                <OnePoint>　桐朋生の奏でる</OnePoint>
                <OnePoint>　最高のMUSIC</OnePoint>
              </Categoly>
            </Title>
            <Description>
              <Center><CategolyDiscriptionTitle>音楽企画について</CategolyDiscriptionTitle></Center>
              <Arrangement>
                <Sentence>コロナ禍で引きこもりがちなあなた！脳にロックンロールは足りていますか？表現力豊かなメンバーがあなたが聞いたことのない音楽の扉を開きます！異界の扉が開かれた！？</Sentence>
              </Arrangement>
            </Description>
            <Contents>
              {allPostsData.map(({ id, title, categoly }: AllProjectsPropsDataType) => (
                categoly == "3" ?
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
            {musicProject.map(({name, id, url})=>(
              <>
                <ProjectContent>
                  <Link href={"/projects/" + id}>
                    <a>
                      <Img src={process.env.basePath + "/images/" + url} alt={name + "のアイコン"}/>
                      <Name>{name}</Name>
                    </a>
                  </Link>
                </ProjectContent>
              </>
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
              {allPostsData.map(({ id, title, categoly }: AllProjectsPropsDataType) => (
                categoly == "4" ?
                  <ProjectContent key={id}>
                    <Link href={"/projects/" + id}>
                      <a>
                        <Img src={process.env.basePath + "/images/photo-" + id + ".jpg"} alt={title + "のアイコン"} />
                        <Name>{title}</Name>
                      </a>
                    </Link>
                  </ProjectContent>
                  : null
              ))}
            </Contents>
          </>
          }

          {isTabTwo && <>
            <Title>
              <Colmn>
                <div><Musicimg src={ process.env.basePath + "/images/newStage.png"} alt="ステージ企画の画像" /></div>
              </Colmn>
              <Categoly>
                <CategolyName>　ステージ企画企画</CategolyName>
                <OnePoint>　最高の</OnePoint>
                <OnePoint>　エンターテイメント</OnePoint>
              </Categoly>
            </Title>
            <Description>
              <Center><CategolyDiscriptionTitle>ステージ企画について</CategolyDiscriptionTitle></Center>
              <Arrangement>
                <Sentence>ステージ企画とは最もバラエティで楽しいイベントである<p>と、エジソンは言っておりました。</p></Sentence>
              </Arrangement>
            </Description>
              {allPostsData.map(({ id, title, categoly,textup }: AllStagePropsDataType) => (
                  categoly == "5" ?
                    <StageContents>
                      <StageContent key={id}>
                        <StageImg src={process.env.basePath + "/images/photo-" + id + ".png"} alt={title + "のアイコン"}/>
                        <StageName>{title}</StageName>
                      </StageContent>
                      <Sentence>
                        {textup}
                      </Sentence>
                    </StageContents>
                  : null
              ))}
              {}
          </>}

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
      animation: border_anim 2s linear forwards;
      }
    }
  background-size: cover;
  background-image: url(${({ selected }) => (selected ? backGroundImageUrl08 : backGroundImageUrl04)});
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
  background: -webkit-linear-gradient(bottom, #bf9d6d, #bf9d6d);
  background: linear-gradient(to top, #bf9d6d, #bf9d6d);
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
  text-align: center;
`;

const Sentence = styled.div`
  width: 50%;
  margin: 0 auto;
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-decoration-skip-ink: none;
  text-underline-offset: 4px;
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
  margin-bottom: 30vw;
  overflow: hidden;
  display:grid;
  grid-template-columns:repeat(3, 1fr);
  grid-auto-rows: 1fr;
  gap: 1vw;
  position: relative;
  width:90%;
  height: 90%;
  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
  transition-duration: 0.3s;
  object-fit: cover;
  :before{
    content: "";
    display: block;
    padding-top: 100%;
  }
`;

const Name = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: rgba(0, 0, 0, .7);
  border-radius: 10px;
  -ms-transform: translate(-50%,-50%);
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  margin:0;
  color: white;
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-decoration-skip-ink: none;
  text-underline-offset: 4px;
  text-decoration-color: #bf9d6d;
  padding: 10px;
  @media screen and (max-width: 767px) {
    font-size:10px;
  }
`;

const ProjectContent = styled.div`
  :hover{
    opacity: 0.6;
    transition-duration: 0.3s;
  }
  width: auto;
  position: relative;
  text-align: center;
`;

const StageContents = styled.div`
  margin-top: 20%;
  overflow: hidden;
  gap: 1vw;
  position: relative;
`;

const StageName = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%,-50%);
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  margin:0;
  color: white;
  background-color: rgba(0, 0, 0, .7);
  border-radius: 20px;
  overflow: hidden;
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-decoration-skip-ink: none;
  text-underline-offset: 4px;
  text-decoration-color: #bf9d6d;
  padding: 10px;
  @media screen and (max-width: 767px) {
    font-size:10px;
  }
`;

const StageImg = styled.img`
  width: 33%;
  height: 33%;
  /* cursor: pointer; */
  transition-duration: 0.3s;
  object-fit: cover;
  :before{
    content: "";
    display: block;
    padding-top: 100%;
  }
`;

const StageContent = styled.div`
  width: auto;
  position: relative;
  text-align: center;
`;

