import { FC } from "react";
import styled from "styled-components";
import AfterEvacution from "./AfterEvacution";
import Attention from "./Attenton";
import Disaster from "./disaster";
import Evacuation from "./Evacuation";
import LostChild from "./LostChild";
import LostProperty from "./LostProperty";
import SuspiciousObject from "./SuspiciousObject";

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

`;