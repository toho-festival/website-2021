import { FC, useState, useEffect } from 'react';
import { firestore } from '~/firebase/client';
import Blog from '~/src/pages/blog'

type BlogProps = {
  // author: string,
  // content: string,
  // release: Date,
  // title: string,
}

const Data = () => {
  // const [articles, setArticles] = useState<BlogProps[]>([]);

  // useEffect(() => {
  //   async() => {}
  //   firestore.collection('documentClass').doc('blog').collection('published').onSnapshot((docs) => {
  //     const artcls: BlogProps[] = [];
  //     docs.forEach(doc => {
  //       artcls.push(doc.data() as BlogProps);
  //     });
  //     setArticles(artcls);
  //   });
  // }, []);

  // console.log(articles);
  return (
    <div>
      {/* {articles.map((m, i) => <Blog key={i} {...m} />)} */}
    </div>
  )
}

export default Data;