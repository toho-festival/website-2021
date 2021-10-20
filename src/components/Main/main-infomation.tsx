import { FC } from 'react';
import styled from 'styled-components';

const backgroundImageUrl = process.env.basePath + "/images/tesukiwashi-pattern-06.jpg";

const MainInfomation = styled( props => <div { ...props }>
    <h2>大変お待たせしました</h2>
    <p>
      大変ながらくお待たせいたしました。ようやく動画の編集が終わり、公開できる準備も整いました。右上のメニューバーから動画のボタンをクリックしていただけると専用のページに遷移します！
    </p>
    <p>
      桐朋祭用のyoutubeチャンネルへいくためのボタンをクリックしただけると特設チャンネルに飛びます！遅くなりましたが続々と公開していくので楽しんでください！
    </p>
  </div>
)`
  padding-block: 2rem;
  text-align: center;
  color: #1a1a1a;
  background-image: url(${backgroundImageUrl});
  background-size: cover;

  > h2 {
    font-size: 1.5rem;
    line-height: 1;

    ::before, ::after {
      content: '－';
    }
  }

  > p {
    text-align: left;
    font-size: 1rem;
    padding-block-start: 1rem;
    padding-inline: 4rem 4rem;
  }

`;

export default MainInfomation