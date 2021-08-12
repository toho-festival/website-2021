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

const Map = ({ allPostsData }) => {
  return (
    <Wrap>
      <MapImg src={process.env.basePath + "/images/f3.png"} />
      <FloorProject>
      {allPostsData.map(({ id, floor, title, building }:AllPropsDataType) => (
          floor === "3" && building != "特別教室棟"? 
          <Link href={"/projects/" + id}>
            <a>
              <ProjectImg src={process.env.basePath + "/images/photo-" + id + ".png"} />
              <Project key={id}>{title}</Project>
            </a>
          </Link>
          : null
        ))
      }
      </FloorProject>
    </Wrap>
  );
}

export default Map;

const Wrap = styled.div`

`;

const MapImg = styled.img`
  width: 70%;
`;

const FloorProject = styled.div`

`;

const ProjectImg = styled.img`

`;

const Project = styled.div`

`;