import { FC }                             from 'react';
import styled                             from 'styled-components';

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
            {/* <Annotation>※今年度の桐朋祭は生徒と保護者のみとなります</Annotation> */}
          </Note>
      </Layout>
    );
}

const Layout = styled.div`
  
`;

const Date = styled.span`
  background-color: white;
  font-size: 24px;
  text-align: center;
  @media screen and (max-width: 1200px) {
    font-size: calc(24 / 1200 * 100vw);
  }
`;

const Detail = styled.p`
`;

const Note = styled.data`
  text-align: center;
  font-size: 16px;
  @media screen and (max-width: 1200px) {
    font-size: calc(16 / 1200 * 100vw);
  }
`;

const Annotation = styled.p`
`;

export default Dating;