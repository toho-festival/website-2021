import styled from 'styled-components';

const Title: React.FC<TitleTS> = ({ big, small }) => (
  <div>
    <Title1>{big}</Title1>
    <Title2>{small}</Title2>
  </div>
);
export type TitleTS = {
    big: string
    small: string
}

const Title1 = styled.span `
margin-left:10px;
color: orange;
font-size: 60px; 
`

const Title2 = styled(Title1) `
color:black;
font-size: 40px;
`

export default Title;