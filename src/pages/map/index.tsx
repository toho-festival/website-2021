import { FC } from "react";
import styled from "styled-components";
import { getSortedPostsData } from '~/src/scripts/projects';
import Link from 'next/link';

type AllPropsDataType = {
  id: string;
  floor: string;
  title: string;
  building: string;
}

export const getStaticProps = async() =>{
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

const Map = ({ allPostsData }:{allPostsData:AllPropsDataType[]}) => {
  return (
    <Wrap>
      <Tab>
      <div><Link href="/map/special"><Anchor color="orange">特域</Anchor></Link></div>
      <div><Link href="/map/f4"><Anchor color="yellow">4F</Anchor></Link></div>
      <div><Link href="/map/f3"><Anchor color="green">3F</Anchor></Link></div>
      <div><Link href="/map/f2"><Anchor color="red">2F</Anchor></Link></div>
      <div><Link href="/map"><Anchor color="blue">1F</Anchor></Link></div>
      </Tab>
      <Flex>
        <MapImg src={process.env.basePath + "/images/f1.png"} />
        <FloorProject>
        <Title>１階　参加団体</Title>
        {allPostsData.map(({ id, floor, title, building }:AllPropsDataType) => (
            floor === "1" && building != "特別教室棟"? 
            <Link href={"/projects/" + id}>
              <Align>
              <a>
                {/* <ProjectImg src={process.env.basePath + "/images/photo-" + id + ".png"} /> */}
                <Project key={id}>{title}</Project>
              </a>
              </Align>
            </Link>
            : null
          ))
        }
        </FloorProject>
      </Flex>
    </Wrap>
  );
}

export default Map;

const Wrap = styled.div`
  margin-bottom: 10vw;
`;

const MapImg = styled.img`
  width: 65%;
  @media screen and (max-width:767px) { 
    width: 100%;
  }
`;

const Tab = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  text-align: center;
  align-items: center;
  margin-bottom: 5vw;
  border-bottom: 1px solid gray;
  div{
    width: 20%;
    border-right: 1px solid gray;
  }
`;

const Anchor = styled.a`
  display: block;
  &[color="blue"]{
      color: #1760a0;
      font-size: 250%;
      text-decoration: underline;
      text-decoration-thickness: 8px;
      text-decoration-skip-ink: none;
      text-underline-offset: 4px;
      text-decoration-color: #1760a0;
  }
  &[color="red"]{
      color: #f7f3e9;
      font-size: 250%;
  }
  &[color="green"]{
      color: white;
      font-size: 250%;
  }
  &[color="yellow"]{
      color: #f7f3e9;
      font-size: 250%;
  }
  &[color="orange"]{
      color: white;
      font-size: 200%;
      @media screen and (max-width:767px) { 
      font-size: 150%;
    }
  }
  :before {
    content: "";
    display: block;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width:767px) { 
    display: block;
  }
`;

const FloorProject = styled.div`
  width: 30%;
  @media screen and (max-width:767px) { 
    width: 60%;
    margin-left: 20%;
    margin-right: 20%;
    text-align: center;
  }
`;

const Title = styled.h2`
  color: white;
  padding: 0px 8px 8px;
  border-bottom: 5px solid #bf9d6d;
`;

const ProjectImg = styled.img`

`;

const Project = styled.div`
  border-bottom: 3px solid #1760a0;
`;

const Align = styled.div`
  a{
    color: white;
    padding: 10px;
    display: block;
    :hover{
      color: #0bd;
    }
  }
`;