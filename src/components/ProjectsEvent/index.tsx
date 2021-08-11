import { firestore } from "~/firebase/client";
import styled from "styled-components";
import { useCollection } from "react-firebase-hooks/firestore";
import { useState, useEffect } from "react";
import { notEnd, wasHeld, notStart } from "~/src/scripts/projectsEventIsHeld";

const ProjectsEvent = () => {

  const nowTime = new Date();
  const nowMonth = nowTime.getMonth() + 1;
  console.log(nowTime);
  const nowDay = nowTime.getDay();
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
    event?.docs.map(doc => {
      const startAt:Date = doc.data().duration.begin.toDate();
      const startYear = startAt.getFullYear();
      const startMonth = startAt.getMonth();
      const startDay = startAt.getDay();
      const startHours = startAt.getHours();
      const startMinutes = startAt.getMinutes();
      const startSeconds = startAt.getSeconds();
      const byStartSeconds = (startMonth-8)*2678400+startDay*86400+startHours*3600+startMinutes*60+startSeconds;

      const endAt:Date = doc.data().duration.end.toDate();
      const endYear = endAt.getFullYear();
      const endMonth = endAt.getMonth();
      const endDay = endAt.getDay();
      const endHours = endAt.getHours();
      const endMinutes = endAt.getMinutes();

      console.log(monthCount)

      return (
      <Wrap>
        { notEnd(endYear,endMonth,endDay,endHours,endMinutes,monthCount,dayCount,hoursCount,minutesCount) &&
          wasHeld(startYear,startMonth,startDay,startHours,startMinutes,monthCount,dayCount,hoursCount,minutesCount)
        ? 
          <Held>
            <Title>{doc.data().title}開催中！</Title>
            <Location>{doc.data().location.building}{doc.data().location.floor}階{doc.data().location.room}にて</Location>
          </Held>
        : null}
        
        { notStart(startYear,startMonth,startDay,startHours,startMinutes,monthCount,dayCount,hoursCount,minutesCount) ? 
            <NotHeld>
              <Title>{doc.data().title}開催まで</Title>
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
  );

}

export default ProjectsEvent

const Wrap = styled.div`
  color: white;
`;

const Held = styled.div`

`;

const Title = styled.h2`

`;

const Location = styled.div`

`;

const NotHeld = styled.div`

`;

const LeftTime = styled.div`

`;