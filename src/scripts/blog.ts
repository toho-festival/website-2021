import firebase                from 'firebase/app';
import { useEffect, useState } from 'react';
import { firestore }           from '~/firebase/client';

type Blog = {
  author:string;
  categoly: {
    0:string
  };
  content:string;
  release:firebase.firestore.Timestamp;
  title:string;
  update:firebase.firestore.Timestamp;
}

type FirestoreBlog = {
  author:string;
  categoly: {
    0:string
  };
  content:string;
  release:firebase.firestore.Timestamp;
  title:string;
  update:firebase.firestore.Timestamp;
}

const blogCollectionConverter: firebase.firestore.FirestoreDataConverter<Blog> = {
  toFirestore(modelObject: Blog): FirestoreBlog {
    return {
      ...modelObject,
    };
  },
  fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot<FirestoreBlog>, options): Blog {
    const data = snapshot.data({ ...options, serverTimestamps: 'estimate' });
    return {
      ...data,
    };
  },
};

const blogCollection = firestore.collection('documentClass/blog/published').withConverter(blogCollectionConverter);

export const useBlogCollection = (): [undefined, true, undefined] | [Blog[], false, undefined] | [undefined, false, firebase.FirebaseError] => {
  const [_docs, setDocs]      = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState<firebase.FirebaseError>();
  useEffect(() => {
    blogCollection
      .orderBy('create_at', 'desc')
      .get()
      .then(({ docs }) => {
        setDocs(docs.map(doc => doc.data()));
        setLoading(false);
      })
      .catch(setError);
  }, []);
  if (error) return [void 0, false, error];
  if (loading) return [void 0, loading, void 0];
  return [_docs, loading, error];
};
