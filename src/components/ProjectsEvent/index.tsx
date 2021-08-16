import { useState, useEffect } from 'react';
import styled                  from 'styled-components';
import { useCurrentEvents }    from '~/src/scripts/useProjectEvents';
import { parseTime }           from '~/src/scripts/utils';

const ProjectsEvent = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setCurrentDate(new Date()), 100);
    return () => clearInterval(id);
  }, []);
  
  const returned = useCurrentEvents(currentDate);
  if (returned[1]) return <div>Loading...</div>;
  if (returned[2] != null) return <div>{ `Error: ${ returned[2].message }` }</div>;
  const [events] = returned;
  
  return <>
    <Center><Subject>開催中</Subject></Center>
    <Grid>
      { events.map(event => {
        const { duration: { begin, end }, title, location: { building, floor, room } } = event;
        return <Wrap key={ title + begin }>
          { !(+begin < +currentDate && +currentDate < +end) ? null :
            <Held>
              <Title>{ title }</Title>
              <Location>{ building }{ floor }階{ room }にて</Location>
            </Held>
          }
        </Wrap>;
      })
      }
    </Grid>
    <Center><Subject>開催予定</Subject></Center>
    <Grid>
      {
        events.map(event => {
          const { duration: { begin }, title, location: { building, floor, room } } = event;
          
          const remainedSeconds                   = +begin - +currentDate;
          const { days, hours, minutes, seconds } = parseTime(remainedSeconds);
          
          return <Wrap key={ title + begin }>
            { remainedSeconds <= 0 ? null :
              <NotHeld>
                <Title>{ title }</Title>
                <LeftTime>{ days }日{ hours }時間{ minutes }分{ seconds }秒</LeftTime>
                <Location>{ building }{ floor }階{ room }にて</Location>
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


