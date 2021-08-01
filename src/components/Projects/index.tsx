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
        {isTabOne && <React.Fragment><General title="参加団体一覧"/></React.Fragment>}
        {isTabTwo && <React.Fragment><Stage title="ステージ企画一覧"/></React.Fragment>}
      </TabBody>
    </TabContainer>
  )
}

export default withRouter(Tabs)

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
      animation: border_anim 0.9s linear forwards;
      }
    }
  background: ${({ selected }) => (selected ? "white" : "#f0f0f0")};
  color: ${({ selected }) => (selected ? "#4169e1" : "black")};
`;
