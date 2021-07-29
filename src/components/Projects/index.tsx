import { FC } from "react";
import React from "react";
import Link from "next/link";
import { withRouter,useRouter } from "next/router";
import styled from "styled-components";
import General from "~/src/components/Projects/General/index";
import Stage from "~/src/components/Projects/Stage/index";

type TabProps = {
  selected: boolean;
}

const Tabs: FC= () => {
  
  const router = useRouter();
  const {
    query: { tab }
  } = router

  const isTabOne = tab === "1" || tab == null
  const isTabTwo = tab === "2"
  return (
    <TabContainer>
      <TabHead>
        <Tab selected={isTabOne}>
          <Link href="">
            <a>Tab 1</a>
          </Link>
        </Tab>
        <Tab selected={isTabTwo}>
          <Link href={{ pathname: "/projects", query: { tab: "2" } }}>
            <a>Tab 2</a>
          </Link>
        </Tab>
      </TabHead>
      <TabBody>
        {isTabOne && <React.Fragment><General title="参加団体一覧"/></React.Fragment>}
        {isTabTwo && <React.Fragment><Stage title="ステージ企画一覧"/></React.Fragment>}
      </TabBody>
    </TabContainer>
  )
}

export default withRouter(Tabs)

const TabHead = styled.div`
  border-bottom: 1px solid black;
  display: flex;
  background: black;
`;

const TabContainer = styled.div`
  width: 30em;
  height: 30em;
  webkit-box-shadow: -1px 0px 5px 0px rgba(184, 184, 184, 1);
  -moz-box-shadow: -1px 0px 5px 0px rgba(184, 184, 184, 1);
  box-shadow: -1px 0px 5px 0px rgba(184, 184, 184, 1);
`;

const TabBody = styled.div`
  height: 100%;
  color: white;
`;

const Tab = styled.div<TabProps>`
  padding: 1em;
  background: ${({ selected }) => (selected ? "grey" : "black")};
  * {
    color: white;
  }
`;