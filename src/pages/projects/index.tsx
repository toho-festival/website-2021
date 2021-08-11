import { FC } from 'react';
import styled from 'styled-components';
import { getSortedPostsData } from '~/src/scripts/projects';
import Link from 'next/link';

type AllPropsDataType = {
  id: string
  date: string
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
const  CommonProjects:FC = ({ allPostsData }) => {
  return (
    <Wrap>
      {allPostsData.map(({ id, title }:AllPropsDataType) => (
        <div key={id}>
          <Link href={ "/projects/" + id }>{title}</Link>
        </div>
      ))}
    </Wrap>
  )
}

export default CommonProjects;

const Wrap = styled.div`
  color: white;
`;