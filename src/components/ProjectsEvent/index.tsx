import { firestore } from "~/firebase/client";
import styled from "styled-components";
import { useCollection } from "react-firebase-hooks/firestore";
import { useState, useEffect } from "react";
import { notEnd, wasHeld, notStart } from "~/src/scripts/projectsEventIsHeld";

const ProjectsEvent = () => {

  const nowTime = new Date();
  const nowMonth = nowTime.getMonth() + 1;
  const nowDay = nowTime.getDate();
  const nowHours = nowTime.getHours();
  const nowMinutes = nowTime.getMinutes();
  const nowSeconds = nowTime.getSeconds();
  const nowAllSeconds = (nowMonth-8)*2678400+(nowDay-1)*86400+nowHours*3600+nowMinutes*60+nowSeconds;

  const [dayCount, setDayCount] = useState(nowDay);
  const [monthCount,setMonthCount] = useState(nowMonth);
  const [hoursCount, setHoursCount] = useState(nowHours);
  const [minutesCount, setMinutesCount] = useState(nowMinutes);
  const [secondsCount, setSecondsCount] = useState(nowSeconds);
  const [allSecondsCount, setAllSecondsCount] = useState(nowAllSeconds);

  useEffect(() => {
    
    const id = setInterval(() => {
      setAllSecondsCount(allSecondsCount+1)
      if (secondsCount != 59 ) {
        setSecondsCount(secondsCount + 1);
      }else if (minutesCount != 59) {
        setMinutesCount(minutesCount +1);
        setSecondsCount(0);
      }else if (hoursCount != 23) {
        setHoursCount(hoursCount+1);
        setMinutesCount(0);
        setSecondsCount(0);
      }else{
        setDayCount(dayCount+1);
        setHoursCount(0);
        setMinutesCount(0);
        setSecondsCount(0);
      }
    }, 1000);
    return () => clearInterval(id);
  }, [secondsCount,minutesCount,hoursCount,dayCount]);


  const [event, eventLoading, eventError] = useCollection(
    firestore.collection('project-event')
  )

  if(eventLoading) {
    return(
      <div>Loading...</div>
    )
  }

  if(eventError) {
    return(
      <div>{`Error: ${eventError.message}`}</div>
    )
  }


  return(
  <>
    <Center><Subject>開催中</Subject></Center>
    <Grid>
      {event?.docs.map(doc => {
        const startAt:Date = doc.data().duration.begin.toDate();
        const startYear = startAt.getFullYear();
        const startMonth = startAt.getMonth() + 1;
        const startDay = startAt.getDate();
        const startHours = startAt.getHours();
        const startMinutes = startAt.getMinutes();
        const startSeconds = startAt.getSeconds();

        const endAt:Date = doc.data().duration.end.toDate();
        const endYear = endAt.getFullYear();
        const endMonth = endAt.getMonth() + 1;
        const endDay = endAt.getDate();
        const endHours = endAt.getHours();
        const endMinutes = endAt.getMinutes();

        return (
        <Wrap>
          { notEnd(endYear,endMonth,endDay,endHours,endMinutes,monthCount,dayCount,hoursCount,minutesCount) &&
            wasHeld(startYear,startMonth,startDay,startHours,startMinutes,monthCount,dayCount,hoursCount,minutesCount)
          ? 
            <Held>
              <Title>{doc.data().title}</Title>
              <Location>{doc.data().location.building}{doc.data().location.floor}階{doc.data().location.room}にて</Location>
            </Held>
          : null}
        </Wrap>
        );
      })
      }
    </Grid>
      <Center><Subject>開催予定</Subject></Center>
    <Grid>
      {
      event?.docs.map(doc => {
        const startAt:Date = doc.data().duration.begin.toDate();
        const startYear = startAt.getFullYear();
        const startMonth = startAt.getMonth() + 1;
        const startDay = startAt.getDate();
        const startHours = startAt.getHours();
        const startMinutes = startAt.getMinutes();
        const startSeconds = startAt.getSeconds();
        const byStartSeconds = (startMonth-8)*2678400+startDay*86400+startHours*3600+startMinutes*60+startSeconds;
  
        return (
        <Wrap>
          { notStart(startYear,startMonth,startDay,startHours,startMinutes,monthCount,dayCount,hoursCount,minutesCount) ? 
              <NotHeld>
                <Title>{doc.data().title}</Title>
                <LeftTime>
                  {Math.floor((byStartSeconds-nowAllSeconds)/86400)}日
                  {Math.floor(((byStartSeconds-nowAllSeconds)%86400)/3600)}時間
                  {Math.floor((((byStartSeconds-nowAllSeconds)%86400)%3600)/60)}分
                  {(((byStartSeconds-nowAllSeconds)%86400)%3600)%60}秒</LeftTime>
                <Location>{doc.data().location.building}{doc.data().location.floor}階{doc.data().location.room}にて</Location>
              </NotHeld>
          : null }
        </Wrap>
        );
      })
    }
    </Grid>
    </>
  );

}

export default ProjectsEvent

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


