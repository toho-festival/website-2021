import { FC } from "react";
import styled from "styled-components";
import AfterEvacution from "./afterEvacution";
import Attention from "./attenton";
import Disaster from "./disaster";
import Evacuation from "./evacuation";
import LostChild from "./lostChild";
import LostProperty from "./lostProperty";
import SuspiciousObject from "./suspiciousObject";

const Information: FC = () => {
  return(
    <Wrap>
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
  color :white;
`;