import styled from "styled-components";
import AutoSlideShow from "./auto-slide-show";
import {entrance, info1, info2, info3, info4, } from "../scripts/content1"
import Image from 'next/image'
const Content1 = () => {
  return(
    <div>
     {entrance.map(
      ({ title, date1, date2, date3 }) => <Title>{title}</Title>
     )}

    {entrance.map(
      ({ title, date1, date2, date3 }) => 
      <DataUl>
        <Date>{date1}</Date>
        <Date>{date2}</Date>
        <Date>{date3}</Date>
      </DataUl>
      )}
      <AutoSlideShow></AutoSlideShow>
      <div><HexagonContent1></HexagonContent1>
      {info1.map(({title,detail})=>
      <Hexagon1><Info1>{title}</Info1><Info2>{detail}</Info2></Hexagon1>)}
      </div>
      <div><HexagonContent2></HexagonContent2>
      {info2.map(({title,detail})=>
      <Hexagon2><Info3>{title}</Info3><Info4>{detail}</Info4></Hexagon2>)}
      </div>
      <div><HexagonContent3></HexagonContent3>
      {info3.map(({title,detail})=>
      <Hexagon3><Info1>{title}</Info1><Info2>{detail}</Info2></Hexagon3>)}
      </div>
      <div><HexagonContent4></HexagonContent4>
      {info4.map(({title,detail})=>
      <Hexagon2><Info3>{title}</Info3><Info4>{detail}</Info4></Hexagon2>)}
      </div>


    </div>     
   )
}



const DataUl = styled.ul`
position: absolute;
padding-left: 55vw; 
padding-top: 30vw;
z-index: 2;
`

const Title = styled.h1`
padding-top: 15vw;
padding-left: 8vw;
font-size: 8vw;
/* font-family: ; */
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
const Info1 = styled.p`
font-size:20px;
z-index: 5;
transform: rotate(10deg);
    -moz-transform: rotate(10deg);
    -webkit-transform: rotate(10deg);
`
const Info2 = styled.p`
font-size:20px;

z-index: 5;
transform: rotate(10deg);
    -moz-transform: rotate(10deg);
    -webkit-transform: rotate(10deg);
`
const Info3 = styled.p`
color: #ffffff;
font-size:20px;
transform: rotate(-10deg);
    -moz-transform: rotate(-10deg);
    -webkit-transform: rotate(-10deg);
`
const Info4 = styled.p`
color: #f89a0b;
font-size:20px;
transform: rotate(-10deg);
    -moz-transform: rotate(-10deg);
    -webkit-transform: rotate(-10deg);
`
const HexagonContent1 = styled.div`
height: 250px;
width: 250px;
background-color: black;
background-repeat: no-repeat;
    background-position: 50%;
    background-image: url(http://placekitten.com/240/240);
  -webkit-clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
  clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
  margin: 11vw 0 0 15vw;
  position: absolute;
`
const HexagonContent2 = styled.div`
background-color: black;
height: 250px;
width: 250px;
background-repeat: no-repeat;
    background-position: 50%;
    background-image: url(http://placekitten.com/240/240);
  -webkit-clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
  clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
  margin:15vw 0 0 60vw;
  position: relative;
`
const HexagonContent3 = styled.div`
background-color: black;
height: 250px;
width: 250px;
border-style: solid black;
background-repeat: no-repeat;
    background-position: 50%;
    background-image: url(http://placekitten.com/240/240);
  -webkit-clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
  clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
  margin: 1vw 0 0 15vw;
  position: absolute;
`
const HexagonContent4 = styled.div`
background-color: black;
height: 250px;
width: 250px;
border-style: solid black;
background-repeat: no-repeat;
    background-position: 50%;
    background-image: url(http://placekitten.com/240/240);
  -webkit-clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
  clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
  position: relative;
  margin:5vw 0 0 60vw;
`
const Hexagon1 = styled.div`
opacity: 0.8;
height: 150px;
width: 150px;
background: #c90fd7;
  -webkit-clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
  clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
margin:19vw 0 0 25vw;
z-index: 5;
position: absolute;
transform: rotate(-10deg);
    -moz-transform: rotate(-10deg);
    -webkit-transform: rotate(-10deg);
`;
const Hexagon2 = styled.div`
opacity: 0.8;
height: 150px;
width: 150px;
background: #525252;
  -webkit-clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
  clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
  margin: -11vw 0 0 58vw;
  z-index: 7;
  position:absolute;
  transform: rotate(10deg);
    -moz-transform: rotate(10deg);
    -webkit-transform: rotate(10deg);
`
const Hexagon3 = styled.div`
opacity: 0.8;
height: 150px;
width: 150px;
background: #c90fd7;
  -webkit-clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
  clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
margin:9vw 0 0 25vw;
z-index: 5;
position: absolute;
transform: rotate(-10deg);
    -moz-transform: rotate(-10deg);
    -webkit-transform: rotate(-10deg);
`
export default Content1