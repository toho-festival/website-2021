import { FC }    from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import styled   from 'styled-components';
import Image from 'next/image'

const AutoSlideShow: FC = () => {
  return <Layout>
    <div>
      <div/>
      <div/>
      <h1>TOHOFES 70th</h1>
    </div>
  </Layout>;
};

/*
image-1: 1.0 -> 1.0 -> 0.0 -> 0.0 -> 1.0
image-2: 0.0 -> 0.0 -> 1.0 -> 1.0 -> 0.0
上のようなopacityの遷移のためには、１枚目のためのkeyframeを下のように作成して２枚ともに当て、２枚目の方を半周期前にずらす。
３枚の場合、
image-1: 1.0 -> 1.0 -> 0.0 -> 0.0 -> 0.0 -> 0.0 -> 1.0
image-2: 0.0 -> 0.0 -> 1.0 -> 1.0 -> 0.0 -> 0.0 -> 0.0
image-3: 0.0 -> 0.0 -> 0.0 -> 0.0 -> 1.0 -> 1.0 -> 0.0
となる様にしたいから、やはり１枚目のためのkeyframeを作成して３枚ともにあて、２枚目を2/3周期、３枚目を1/3周期前にずらす。
 */
const bgSlideShow = keyframes`
  0% {
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  75% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Layout = styled.div`
  position: relative;
  width: 100%;
  background-color: #1a1a1a;

  ::before {
    content: '';
    display: block;
    padding-top: 66.666666%;
  }

  > div {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;

    > div {
      position: absolute;
      width: 100%;
      height: 100%;
      animation: 20s linear infinite ${ bgSlideShow };

      :nth-child(1) {
        background: url(${ process.env.basePath + '/images/newEntrance-background-1.jpg' }) center / cover;
      }

      :nth-child(2) {
        background: url(${ process.env.basePath + '/images/newEntrance-background-2.jpg' }) center / cover;
        animation-delay: -10s;
      }
    }

    > h1 {
      color: white;
      font-size: calc(100 / 1200 * 100vw);
      position: absolute;
      z-index: 1;
      margin-top: 20%;
      margin-left: 10%;
    }
  }
`;

export default AutoSlideShow;