import { FC } from 'react';
import styled from 'styled-components';

const backgroundImageUrl = process.env.basePath + "/images/tesukiwashi-pattern-06.jpg";

const MainInfomation = styled( props => <div { ...props }>
    <h2>ホームページの楽しみ方</h2>
    <p>
      今年度桐朋祭は残念ながら生徒のみの開催となってしまいました。しかし、このホームページをご覧になってくださった皆様に今年の桐朋祭がどのような雰囲気で開催されたのかを知っていただくため、委員は桐朋祭当日に動画を撮影し、後日編集したものを公開する予定になっています。
    </p>
    <p>
      桐朋祭1ヶ月後を目処に動画が公開される予定なので是非ご覧になってください！
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