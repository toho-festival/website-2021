import { FC } from "react";
import styled from "styled-components";
import AfterEvacution from "./AfterEvacution";
import Attention from "./Attenton";
import Disaster from "./disaster";
import Evacuation from "./Evacuation";
import LostChild from "./LostChild";
import LostProperty from "./LostChild";
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