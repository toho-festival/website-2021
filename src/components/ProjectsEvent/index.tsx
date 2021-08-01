import { firestore } from "~/firebase/client";
import styled from "styled-components";
import { useEffect } from "react";
import { useState } from "react";
import { docId } from "~/src/scripts/all-doc-id";

const ProjectsEvent = () => {

  const nowTime = new Date();
  const [begin, setBegin] = useState();
  const [end, setEnd] = useState();
  const [title, setTitle] = useState();

  docId.map((id)=>{
    useEffect(() => {
      let unmounted = false;
      (async () => {
        const projectEventData = await firestore.collection('project-event').doc(id).get();
        const begin = projectEventData.get('duration.begin').toDate();
        const end = projectEventData.get('duration.end').toDate();
        const title = projectEventData.get('title');
        
        if (!unmounted) {
          setBegin(begin);
          setEnd(end);
          setTitle(title);
        };
      })();
      return () => { unmounted = true; };
    })  
  })
  return (
    <>
      {begin <= nowTime && end >= nowTime ? <h1>{title}</h1> : <h1>error</h1>}
    </>
  )
}

export default ProjectsEvent

const Wrap = styled.div`

`;