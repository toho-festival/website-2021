import { FC }                             from 'react';
import styled                             from 'styled-components';

const backGroundImageUrl = process.env.basePath + "/images/tesukiwashi-pattern-04.jpg"

const Dating: FC = () =>{
    return(
      <Layout>
          <Date>
            <Detail>
              ９月１１日(土) 13:00~17:00
            </Detail>
            <Detail>
              ９月１２日(日) 9:30～12:00　13:00～17:00
            </Detail>
            <Detail>
              ９月１３日(月) 9:30～13:00
            </Detail>
          </Date>
          <Note>
            <Annotation>※日曜日は午前と午後のⅡ部制となっています。</Annotation>
            <Annotation>※ご来場いただく際はスリッパをお持ち下さい。</Annotation>
          </Note>
      </Layout>
    );
}

const Layout = styled.div`
  
`;

const Date = styled.span`
  background-image: url(${backGroundImageUrl});
  background-size: cover;
  font-size: 24px;
  text-align: center;
  @media screen and (max-width: 1200px) {
    font-size: calc(24 / 1200 * 100vw);
  }
`;

const Detail = styled.p`
`;

const Note = styled.div`
  text-align: center;
  font-size: 16px;
  @media screen and (max-width: 1200px) {
    font-size: calc(16 / 1200 * 100vw);
  }
`;

const Annotation = styled.p`
`;

export default Dating;