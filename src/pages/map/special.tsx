import { FC } from "react";
import styled from "styled-components";
import { getSortedPostsData } from '~/src/scripts/projects';
import Link from 'next/link';

type AllPropsDataType = {
  id: string;
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
      <MapImg src={process.env.basePath + "/images/special.png"} />
      <FloorProject>
      {allPostsData.map(({ id, title, building }:AllPropsDataType) => (
          building === "特別教室棟"? 
          <Link href={"/projects/" + {id}}>
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

`;

const FloorProject = styled.div`

`;

const ProjectImg = styled.img`

`;

const Project = styled.div`

`;