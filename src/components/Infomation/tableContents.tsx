import { FC } from "react";
import styled from "styled-components";
import Link from 'next/link';

const TableContents = [
 {href:"#attention", categoly:"各種総合ご案内",},
 {href:"#disaster", categoly:"もし災害が発生したら",},
 {href:"#evacuation", categoly:"避難について",},
 {href:"#afterEvacution", categoly:"避難後について",},
 {href:"#lostChild", categoly:"迷子について",},
 {href:"#suspiciousObject", categoly:"不審物について",},
 {href:"#lostProperty", categoly:"落とし物について",},
];

const Table: FC = () => {
  return(
    <>
    <Center><Title>ご案内</Title></Center>
    <Flex>
      <DefenceMan>
        <Image  src={process.env.basePath + "/images/self-defence-man.png"}/>
      </DefenceMan>
      <Wrap>
        <Center>
          <TableTitle>目次</TableTitle>
          <Column>
          { TableContents.map(({ href, categoly }) => <div key={ categoly }>
              <Verse><Link href={href}><Anchor>{categoly}</Anchor></Link></Verse>
            </div>)
          }
          </Column>
        </Center>
      </Wrap>
      <GentleMan>
        <Center>
          <Image  src={process.env.basePath + "/images/gentle-man.png"}/>
        </Center>
      </GentleMan>
    </Flex>
    </>
  );
}

export default Table;

const Flex = styled.div`
  display: flex;
`;

const DefenceMan = styled.div`
  width: 39%;
  order: 1;
  @media screen and (max-width: 1230px) {
    margin-top: 50%;
    width: 25%;
  }
`;

const Image = styled.img`
  @media screen and (max-width: 1230px) {
    width: 100%;
  }
`;

const GentleMan = styled.div`
  width: 39%;
  order: 3;
  @media screen and (max-width: 1230px) {
    width: 25%;
  }
`;

const Wrap = styled.div`
  width: 22%;
  order: 2;
  display: inline-block;
  @media screen and (max-width: 1230px) {
    width: 50%;
  }
`;

const Center = styled.div`
  text-align: center;
`;

const TableTitle = styled.h2`
  padding: 0 8px 8px;
  border-bottom: 2px #bf9d6d solid;
  font-weight: normal;
`;

const Title = styled.h1`
  margin-bottom: 8vw;
  margin-top: 4vw;
  font-size: 50px;
  display: inline-block;
  border-bottom: 10px solid #bf9d6d;
  @media screen and (max-width: 1230px) {
    font-size: 25px;
    border-bottom: 7px solid #bf9d6d;
  }
`;

const Column = styled.div`
  margin-bottom: 1vw;
`;

const Verse = styled.div`
  border-bottom: 1px #ddd solid;
  text-align: initial;
`;

const Anchor = styled.a`
  color: #432;
  padding: 10px;
  display: block;
  :hover{
    color: #0bd;
  }
`;