import React    from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import styled   from 'styled-components';

const AutoSlideShow = () => {
  const AutoSlideShowProperties = {
    duration: 5000,
    canSwipe: false,
    arrows  : false,
  };
  return (
    <>
      <div className='slide-container'>
        <SlideShow>
          <Title>
            <div>Tohofes 70th</div>
          </Title>
          <Info>
            <Date>
              {/* <p>
                ６月５日(土)13:00～17:00
              </p> */}
              <p>
                ６月６日(日) 9:30～12:00 13:00～17:00
              </p>
              <p>
                ６月７日(月) 9:30～13:00
              </p>
            </Date>
            <Note>
              <p>※日曜日は午前と午後のⅡ部制です。</p>
              <p>※ご来場いただく際はスリッパをお持ち下さい。</p>
              <p>※今年度の桐朋祭は生徒と保護者のみとなります</p>
            </Note>
          </Info>
          <Fade { ...AutoSlideShowProperties }>
            <div className='each-fade'>
              <Image src='/entrance-backgrund-1.jpg'/>
            </div>
            <div className='each-fade'>
              <Image src='/entrance-backgrund-2.jpg'/>
            </div>
          </Fade>
        </SlideShow>
      </div>
    </>
  );
};

const SlideShow = styled.div`
  z-index: 3;
  top: 0;
  position: relative;
`;

const Title = styled.h1`
  color: white;
  font-size: 100px;
  @media screen and (max-width: 1200px) {
    font-size: calc(100 / 1200 * 100vw);
  }
  position: absolute;
  z-index: 8;
  margin-top: 20%;
  margin-left: 10%;
`;

const Info = styled.span`
  position: absolute;
  bottom: 10%;
  left: 50%;
  z-index: 8;
  background: rgba(255, 255, 255, 0.5);
  @media screen and (max-width: 410px) {
    left:30%;
  }
`;

const Date = styled.time`
  text-align: left;
  font-size: 24px;
  @media screen and (max-width: 1200px) {
    font-size: calc(24 / 1200 * 100vw);
  }
`;

const Note = styled.data`
  text-align: left;
  font-size: 16px;
  @media screen and (max-width: 1200px) {
    font-size: calc(16 / 1200 * 100vw);
  }
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 70%;
`;

export default AutoSlideShow;