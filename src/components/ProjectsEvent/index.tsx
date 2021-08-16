import { useState, useEffect } from 'react';
import styled                  from 'styled-components';
import { useCollection }       from 'react-firebase-hooks/firestore';
import { firestore }           from '~/firebase/client';

const ProjectsEvent = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  useEffect(() => {
    const id = setInterval(() => setCurrentDate(new Date()), 100);
    return () => clearInterval(id);
  }, []);
  
  const [event, eventLoading, eventError] = useCollection(firestore.collection('project-event'));
  
  if (eventLoading) return <div>Loading...</div>;
  
  if (eventError) return <div>{ `Error: ${ eventError.message }` }</div>;
  
  return <>
    <Center><Subject>開催中</Subject></Center>
    <Grid>
      { event!.docs.map(doc => {
        const startAt: Date = doc.data().duration.begin.toDate();
        const endAt: Date   = doc.data().duration.end.toDate();
        
        return <Wrap>
          { !((+startAt < +currentDate) && (+currentDate < +endAt)) ? null :
            <Held>
              <Title>{ doc.data().title }</Title>
              <Location>{ doc.data().location.building }{ doc.data().location.floor }階{ doc.data().location.room }にて</Location>
            </Held>
          }
        </Wrap>;
      })
      }
    </Grid>
    <Center><Subject>開催予定</Subject></Center>
    <Grid>
      {
        event!.docs.map(doc => {
          const startAt: Date  = doc.data().duration.begin.toDate();
          const byStartSeconds = Math.floor((+startAt - +currentDate) / 1000);
          
          return <Wrap>
            { byStartSeconds <= 0 ? null :
              <NotHeld>
                <Title>{ doc.data().title }</Title>
                <LeftTime>
                  { Math.floor(byStartSeconds / 86400) }日
                  { Math.floor(byStartSeconds % 86400 / 3600) }時間
                  { Math.floor(byStartSeconds % 86400 % 3600 / 60) }分
                  { byStartSeconds % 86400 % 3600 % 60 }秒</LeftTime>
                <Location>{ doc.data().location.building }{ doc.data().location.floor }階{ doc.data().location.room }にて</Location>
              </NotHeld>
            }
          </Wrap>;
        })
      }
    </Grid>
  </>;
};

export default ProjectsEvent;

const Center = styled.div`
  text-align: center;
`;

const Grid = styled.div`
  column-count: 3;
  margin-bottom: 5vw;
`;

const Wrap = styled.div`
  color: black;
  break-inside: avoid;
  margin-bottom: 3vw;
  margin-left: 5%;
  margin-right: 5%;
  overflow: hidden;
`;

const Subject = styled.h1`
  color: white;
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-decoration-skip-ink: none;
  text-underline-offset: 4px;
  text-decoration-color: #bf9d6d;
  padding: 10px;
`;

const Held = styled.div`
  padding: 5px;
  border-radius: 20px;
  overflow: hidden;
  background-image: linear-gradient(to right, #00c6fb 0%, #005bea 100%);
`;

const Title = styled.h2`
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 5%;
  background-color: #FFF;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  overflow: hidden;
`;

const Location = styled.div`
  background-color: #FFF;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  padding-left: 5%;
`;

const NotHeld = styled.div`
  background-color: white;
  padding: 5px;
  border-radius: 20px;
  overflow: hidden;
  background-image: linear-gradient(-20deg, #00cdac 0%, #8ddad5 100%);
`;

const LeftTime = styled.div`
  background-color: #FFF;
  padding-left: 5%;
`;


