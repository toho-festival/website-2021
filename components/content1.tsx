import styled from "styled-components";
import { FC } from 'react';
import AutoSlideShow from "./auto-slide-show";
import { entrance, info1, info2, info3, info4, info5, info6, info7, info8, info9, info10} from "../scripts/content1";

const Content1:FC = () => {
  const HexagonTitleProperties={
    inputMargin:"2rem 0 0 0.5rem",
    inputColor:"#ffffff",
    inputTransform:"rotate(-10deg)",
    inputMediaFontsize:"7px",
    inputMediaMargin:"1rem 0 0 0.8rem",
    inputLineheight:"0"
  }
  const HexagonProperties ={
    inputBackground: "#525252",
    inputMargin:"-7vw 0 0 58vw" ,
    inputZindex:"7" ,
    inputTransform:"rotate(10deg)",
  }
  const HexagonContent1Properties={
    inputLineheight:"0" ,
    inputFontsize:"14px" ,
    inputMediaFontsize:"3px" ,
    inputMargin:"1rem 0 0 0.5rem" ,
    inputMediaMargin:"0.5rem 0 0 0",
  } 
   const HexagonContent2Properties = {
    inputFontsize: "14px" ,
    inputMediaFontsize:"3px" ,
    inputMargin:"1rem 0 0 0.5rem" ,
    inputMediaMargin:"0.5rem 0 0 0" ,
    inputTransform:"rotate(-10deg)"  ,
    inputColor:"#f89a0b",
  }

  return (
    <div>
      {entrance.map(
        ({ title}) => <Title>{title}</Title>
      )}

      {entrance.map(
        ({ date1, date2, date3 }) =>
          <DataUl>
            <Date>{date1}</Date>
            <Date>{date2}</Date>
            <Date>{date3}</Date>
          </DataUl>
      )}
      <AutoSlideShow></AutoSlideShow>
      <HexagonContent></HexagonContent>
        {info1.map(({ title, detail1, detail2}) =>
          <Hexagon><Info>{title}</Info><Info {...HexagonContent1Properties}>{detail1}</Info><Info {...HexagonContent1Properties}>{detail2}</Info></Hexagon>)}

      <HexagonContent inputMargin="15vw 0 0 60vw" inputPosition=" relative"></HexagonContent>
      {info2.map(({ title, detail}) =>
        <Hexagon {...HexagonProperties}><Info inputLineheight="0" {...HexagonTitleProperties}>{title}</Info><Info {...HexagonContent2Properties}>{detail}</Info></Hexagon>)}

        <HexagonContent inputMargin="1vw 0 0 15vw"></HexagonContent>
      {info3.map(({ title, detail1, detail2 }) =>
        <Hexagon inputMargin="9vw 0 0 23vw"><Info>{title}</Info><Info {...HexagonContent1Properties}>{detail1}</Info><Info {...HexagonContent1Properties}>{detail2}</Info></Hexagon>)}

      <HexagonContent inputMargin="5vw 0 0 60vw" inputPosition=" relative"></HexagonContent>
      {info4.map(({ title, detail1, detail2 }) =>
        <Hexagon {...HexagonProperties}><Info  {...HexagonTitleProperties} >{title}</Info><Info {...HexagonContent2Properties}>{detail1}</Info><Info inputLineheight="0" inputTextalign="center" {...HexagonContent2Properties}>{detail2}</Info></Hexagon>)}

      <HexagonContent inputMargin="1vw 0 0 15vw"></HexagonContent>
      {info5.map(({ title, detail }) =>
        <Hexagon inputMargin="9vw 0 0 23vw"><Info>{title}</Info><Info {...HexagonContent1Properties}>{detail}</Info></Hexagon>)}

      <HexagonContent inputMargin="8vw 0 0 60vw" inputPosition=" relative"></HexagonContent>
      {info6.map(({ title, detail }) =>
      <Hexagon {...HexagonProperties}><Info {...HexagonTitleProperties}>{title}</Info><Info {...HexagonContent2Properties}>{detail}</Info></Hexagon>)}

      <HexagonContent inputMargin="1vw 0 0 15vw"></HexagonContent>
      {info7.map(({ title, detail }) =>
        <Hexagon inputMargin="9vw 0 0 23vw"><Info>{title}</Info><Info {...HexagonContent1Properties}>{detail}</Info></Hexagon>)}

      <HexagonContent inputMargin="8vw 0 0 60vw" inputPosition=" relative"></HexagonContent>
      {info8.map(({ title, detail }) =>
      <Hexagon {...HexagonProperties}><Info {...HexagonTitleProperties}>{title}</Info><Info {...HexagonContent2Properties}>{detail}</Info></Hexagon>)}

      <HexagonContent inputMargin="1vw 0 0 15vw"></HexagonContent>
      {info9.map(({ title, detail }) =>
        <Hexagon inputMargin="9vw 0 0 23vw"><Info>{title}</Info><Info {...HexagonContent1Properties}>{detail}</Info></Hexagon>)}

      <HexagonContent inputMargin="8vw 0 5vw 60vw" inputPosition=" relative"></HexagonContent>
      {info10.map(({ title, detail }) =>
      <Hexagon {...HexagonProperties} inputMargin="-12vw 0 0 58vw"><Info {...HexagonTitleProperties}>{title}</Info><Info {...HexagonContent2Properties}>{detail}</Info></Hexagon>)}
    </div>
  )
}

export default Content1;


const DataUl = styled.ul`
  position: absolute;
  padding-left: 55vw; 
  padding-top: 30vw;
  z-index: 2;
`;

const Title = styled.h1`
  padding-top: 15vw;
  padding-left: 8vw;
  font-size: 8vw;
  color: rgb(0,69,138);
  position: absolute;
  z-index: 2;
`;

const Date = styled.li`
  list-style: none;;
  font-size: 2vw;
  font-weight: bold;
  color: cyan;
`;

const Info = styled.p`
z-index: 5;
text-align:${props => props.inputTextalign || ""};
font-size: ${props => props.inputFontsize || "20px"};
margin: ${props => props.inputMargin || "1.5rem 0 0 1.5rem"};
color: ${props => props.inputColor || "black"};
line-height: ${props => props.inputLineheight || ""};
transform:${props => props.inputTransform || "rotate(10deg)"};
@media screen and (max-width:767px) { 
    font-size:${props => props.inputMediaFontsize || "7px"};
    margin:${props => props.inputMediaMergin || "1.5rem"};
    line-height: ${props => props.inputMediaLineheight || ""};
  }  

`;

 const HexagonContent = styled.div`
   height: 250px;
  width: 250px;
  @media screen and (max-width:767px) { 
    height: 150px;
    width: 150px;
  }
  @media screen and (min-width:768px) and ( max-width:1024px) {
    height: 200px;
    width: 200px;
  }
  background-repeat: no-repeat;
      background-position: 50%;
      background-image: url(http://placekitten.com/240/240);
    clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
   margin: ${props => props.inputMargin || "11vw 0 0 15vw"};
   position: ${props => props.inputPosition || "absolute"};
 `;

const Hexagon = styled.div`
opacity: 0.8;
  height: 150px;
  width: 150px;
  @media screen and (max-width:767px) { 
    height: 90px;
    width: 90px;
  }
    clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
    background:  ${props => props.inputBackground || "#cf9fff"};
    margin:  ${props => props.inputMargin || "19vw 0 0 23vw"};
    z-index:  ${props => props.inputZindex || "5"};
    position:  absolute;
    transform:  ${props => props.inputTransform ||  "rotate(-10deg)"}; 
`;