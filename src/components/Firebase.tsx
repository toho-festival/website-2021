import styled from 'styled-components';
import { firebase } from '~/firebase/client';
import { firestore } from '~/firebase/client'
import { useCollection } from 'react-firebase-hooks/firestore';

const Firebase = () => {
  const [test, testLoading, testError] = useCollection(
    firebase.firestore().collection('project-event')
  )

  if(testLoading) {
    return(
      <Name>Loading...</Name>
    )
  }

  if(testError) {
    return(
      <Name>{`Error: ${testError.message}`}</Name>
    )
  }

  return (
    <Name>{test?.docs.map(doc => (
      <h1 key={doc.id}>{doc.data().description}</h1>
    ))}</Name>
  );
}

const Name =  styled.div`
  text-align:center;
  color: white;
`;

export default Firebase