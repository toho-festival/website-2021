import { FC } from 'react';
import styled from 'styled-components';
import { allProjects } from '~/src/scripts/all-projects';
import { PiePlot } from './data';
import { firebase } from '~/firebase/client';
import { useCollection } from 'react-firebase-hooks/firestore';
import { fileURLToPath } from 'url';

const FieldGame: FC = () => {

  const [field, fieldLoading, fieldError] = useCollection(
    firebase.firestore().collection('field-game')
  )
  
  return(
    <>
      <Title>総務企画　〜陣地取りゲーム〜</Title>
      <Rules>
        <RuleTitle>ルール説明</RuleTitle>
        <Explain>~~~~~~</Explain>
      </Rules>
      <Data>
        {
          field?.docs.map(( doc ) => 
            <PiePlot  
              key={doc.id}
              blue={doc.data().blue} 
              red={doc.data().red} 
              yellow={doc.data().yellow}
              name={doc.data().name} 
            />
          )
        }
      </Data>
    </>
  )
}

const Title = styled.h1`
  color: white;
`;

const Rules = styled.div``;

const RuleTitle = styled.h2`
  color: white;
`;

const Explain = styled.div`
  color: white;
`;

const Data = styled.div``;

const Wrap = styled.div``;

const DataTitle = styled.h3``;

const RateBar = styled.div`
  width:20%;
  height:20%;
  
`;

export default FieldGame;