import { FC }    from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import styled   from 'styled-components';
import Image from 'next/image'

const AutoSlideShow:FC = () => {
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
          <Fade { ...AutoSlideShowProperties }>
            <div className='each-fade'>
              <StyledImage 
                src={process.env.basePath + '/images/newEntrance-background-1.jpg'}
                width={1500}
                height={1000}
                alt="スライドショー画像1"
              />
            </div>
            <div className='each-fade'>
              <StyledImage 
                src={process.env.basePath + '/images/newEntrance-background-2.jpg'}
                width={1500}
                height={1000}
                alt="スライドショー画像2"
              />
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
  background-color:black;
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

const StyledImage = styled(Image)`
  display: block;
`;

export default AutoSlideShow;