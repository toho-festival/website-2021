import {FC} from "react";
import styled from "styled-components";
const Access:FC = () =>{
    const MapPropaties={
        src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.4746056058657!2d139.44276371555105!3d35.689936737101306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018e3f60c18b89b%3A0xec006afe5f872d28!2z5qGQ5pyL5Lit5a2m5qCh44O75qGQ5pyL6auY562J5a2m5qCh!5e0!3m2!1sja!2sjp!4v1620488839482!5m2!1sja!2sjp" ,
        width:"80%",
        height:"500px",
    };
    return(
        <div>
            <Title><Title1>ア</Title1><Title2>クセス</Title2></Title>
            <SubTitle>桐朋中学校・高等学校へのアクセス</SubTitle>
            <Map {...MapPropaties}></Map>
            <Detail>
            <p>JR中央線国立駅から徒歩１５分</p>
            <p>JR南武線谷保駅から徒歩１５分</p>
            <p>※公共交通機関をご利用ください</p>
            <Caution>また車でのご来校はご遠慮ください</Caution>
            </Detail>
        </div>
    )
}

const Caution = styled.p `
margin-left:25px;
`

const Detail = styled.div`
margin: 0 0 20px 120px;
`

const Map = styled.iframe`
margin: 20px 10px 10px 100px;
`

const SubTitle = styled.nav`
font-size:30px;
margin-left: 50px;
`

const Title1 = styled.span `
margin-left:10px;
color: orange;
font-size: 60px; 
`

const Title2 = styled(Title1) `
color:black;
font-size: 40px;
`

const Title = styled.h1 `
&::after {
    content: "";
    display: block;
    margin-top: -10px;
    margin:left;
    width: 400px; 
    border-bottom: 10px solid #85d1d0; 
}`

export default Access;