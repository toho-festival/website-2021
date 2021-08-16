import firebase                from 'firebase/app';
import { useEffect, useState } from 'react';
import { firestore }           from '~/firebase/client';

type ProjectEvent = {
  projectRef: firebase.firestore.DocumentReference
  title: string
  description: string
  location: {
    building: string
    floor: string
    room: string
  }
  duration: {
    begin: Date,
    end: Date
  }
  liveID: string | null
}
type FirestoreProjectEvent = {
  projectRef: firebase.firestore.DocumentReference
  title: string
  description: string
  location: {
    building: string
    floor: string
    room: string
  }
  duration: {
    begin: firebase.firestore.Timestamp,
    end: firebase.firestore.Timestamp
  }
  liveID: string | null
}

const projectEventConverter: firebase.firestore.FirestoreDataConverter<ProjectEvent> = {
  toFirestore(modelObject: ProjectEvent): FirestoreProjectEvent {
    return {
      ...modelObject,
      duration: {
        begin: firebase.firestore.Timestamp.fromDate(modelObject.duration.begin),
        end  : firebase.firestore.Timestamp.fromDate(modelObject.duration.end),
      },
    };
  },
  fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot<FirestoreProjectEvent>, options): ProjectEvent {
    const data = snapshot.data({ ...options, serverTimestamps: 'estimate' });
    return {
      ...data,
      duration: {
        begin: data.duration.begin.toDate(),
        end  : data.duration.end.toDate(),
      },
    };
  },
};

const projectEventCollection = firestore.collection('project-event').withConverter(projectEventConverter);

export const useCurrentEvents = (now: Date): [undefined, true, undefined] | [ProjectEvent[], false, undefined] | [undefined, false, firebase.FirebaseError] => {
  const [_docs, setDocs]      = useState<ProjectEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState<firebase.FirebaseError>();
  useEffect(() => {
    projectEventCollection
      .orderBy('duration.end', 'asc')
      .startAfter(now)
      .get()
      .then(({ docs }) => {
        setDocs(docs.map(doc => doc.data()).sort((a, b) => +a.duration.begin - +b.duration.begin));
        setLoading(false);
      })
      .catch(setError);
  }, []);
  if (error) return [void 0, false, error];
  if (loading) return [void 0, loading, void 0];
  return [_docs, loading, error];
};