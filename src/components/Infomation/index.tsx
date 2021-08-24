import { FC } from "react";
import styled from "styled-components";
import AfterEvacution from "./afterEvacution";
import Attention from "./attenton";
import Disaster from "./disaster";
import Evacuation from "./evacuation";
import LostChild from "./lostChild";
import LostProperty from "./lostProperty";
import SuspiciousObject from "./SuspiciousObject";
import Table from "./tableContents"

const Information: FC = () => {
  return(
    <Wrap>
      <Table />
      <Attention />
      <Disaster />
      <Evacuation />
      <AfterEvacution />
      <LostChild />
      <SuspiciousObject />
      <LostProperty />
    </Wrap> 
  )
}

export default Information;

const Wrap = styled.div`
  background-color: white;
  border-bottom: 5px black solid;
`;