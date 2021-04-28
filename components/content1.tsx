import styled from "styled-components";
import { FC } from 'react';
import AutoSlideShow from "./auto-slide-show";
import { entrance, info1, info2, info3, info4, info5, info6, info7 } from "../scripts/content1";
import {categoly1, categoly2, categoly3} from '~/scripts/categoly';

const Content1:FC = () => {
  return (
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
        <HexagonContent1></HexagonContent1>
        {info1.map(({ title, detail }) =>
          <Hexagon1><Info1>{title}</Info1><Info2>{detail}</Info2></Hexagon1>)}
      <HexagonContent2></HexagonContent2>
      {info2.map(({ title, detail }) =>
        <Hexagon2><Info3>{title}</Info3><Info4>{detail}</Info4></Hexagon2>)}

      <HexagonContent3></HexagonContent3>
      {info3.map(({ title, detail }) =>
        <Hexagon3><Info1>{title}</Info1><Info2>{detail}</Info2></Hexagon3>)}

      <HexagonContent4></HexagonContent4>
      {info4.map(({ title, detail }) =>
        <Hexagon2><Info3>{title}</Info3><Info4>{detail}</Info4></Hexagon2>)}

      <HexagonContent5></HexagonContent5>
      {info5.map(({ title, detail }) =>
        <Hexagon3><Info1>{title}</Info1><Info2>{detail}</Info2></Hexagon3>)}

      <HexagonContent6></HexagonContent6>
      {info6.map(({ title, detail }) =>
        <Hexagon2><Info3>{title}</Info3><Info4>{detail}</Info4></Hexagon2>)}

      <HexagonContent7></HexagonContent7>
      {info7.map(({ title, detail }) =>
        <Hexagon3><Info1>{title}</Info1><Info2>{detail}</Info2></Hexagon3>)}
    </div>
  )
}

export default Content1;

const Move = styled.div`
  margin-top:3rem;
`;

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


const Info1 = styled.p`
  margin-top:1.5rem;
  margin-left:1.5rem;
  font-size:20px;
  @media screen and (max-width:767px) { 
    font-size:7px;
    margin-left:1.5rem;
  }
  z-index: 5;
  transform: rotate(10deg);
    -moz-transform: rotate(10deg);
    -webkit-transform: rotate(10deg);
`;

const Info2 = styled.p`
  font-size:14px;
  @media screen and (max-width:767px) { 
    font-size:3px;
    margin-top:0.5rem;
  }
  margin-top:1rem;
  margin-left:0.5rem;
  z-index: 5;
  transform: rotate(10deg);
    -moz-transform: rotate(10deg);
    -webkit-transform: rotate(10deg);
`;

const Info3 = styled.p`
  color: #ffffff;
  font-size:20px;
  margin-top:2rem;
  margin-left:0.5rem;
  @media screen and (max-width:767px) { 
    font-size:7px;
    margin-top:1rem;
    margin-left:0.8rem;
}
  transform: rotate(-10deg);
    -moz-transform: rotate(-10deg);
    -webkit-transform: rotate(-10deg);
`;

const Info4 = styled.p`
  color: #f89a0b;
  font-size:14px;
  text-align:center;
  margin-top:0.5rem;
  @media screen and (max-width:767px) {
    font-size:3px;
    margin-top:1rem;
  }
  transform: rotate(-10deg);
    -moz-transform: rotate(-10deg);
    -webkit-transform: rotate(-10deg);
`;

const HexagonContent1 = styled.div`
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
  background-color: black;
  background-repeat: no-repeat;
      background-position: 50%;
      background-image: url(http://placekitten.com/240/240);
    -webkit-clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
    clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
  margin: 11vw 0 0 15vw;
  position: absolute;
`;

const HexagonContent2 = styled.div`
  background-color: black;
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
  -webkit-clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
  clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
  margin:15vw 0 0 60vw;
  position: relative;
`;

const HexagonContent3 = styled.div`
  background-color: black;
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
  border-style: solid black;
  background-repeat: no-repeat;
    background-position: 50%;
    background-image: url(http://placekitten.com/240/240);
  -webkit-clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
  clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
  margin: 1vw 0 0 15vw;
  position: absolute;
`;

const HexagonContent4 = styled.div`
  background-color: black;
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
  border-style: solid black;
    background-repeat: no-repeat;
    background-position: 50%;
    background-image: url(http://placekitten.com/240/240);
  -webkit-clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
  clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
  position: relative;
  margin:5vw 0 0 60vw;
`;

const HexagonContent5 = styled.div`
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
  background-color: black;
  background-repeat: no-repeat;
    background-position: 50%;
    background-image: url(http://placekitten.com/240/240);
  -webkit-clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
  clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
  margin: 1vw 0 0 15vw;
  position: absolute;
`;

const HexagonContent6 = styled.div`
  background-color: black;
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
  -webkit-clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
  clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
  margin:8vw 0 0 60vw;
  position: relative;
`;

const HexagonContent7 = styled.div`
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
  background-color: black;
    background-repeat: no-repeat;
    background-position: 50%;
    background-image: url(http://placekitten.com/240/240);
  -webkit-clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
  clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
  margin: 1vw 0 0 15vw;
  position: absolute;
`;

const Hexagon1 = styled.div`
  opacity: 0.8;
  height: 150px;
  width: 150px;
  @media screen and (max-width:767px) { 
    height: 90px;
    width: 90px;
  }
  background: #cf9fff;
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
  @media screen and (max-width:767px) { 
    height: 90px;
    width: 90px;
  }
  background: #525252;
    -webkit-clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
    clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
  margin: -11vw 0 0 58vw;
  z-index: 7;
  position:absolute;
  transform: rotate(10deg);
    -moz-transform: rotate(10deg);
    -webkit-transform: rotate(10deg);
`;

const Hexagon3 = styled.div`
  opacity: 0.8;
  height: 150px;
  width: 150px;
  @media screen and (max-width:767px) { 
    height: 90px;
    width: 90px;
  }
  background: #cf9fff;
    -webkit-clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
    clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
  margin:9vw 0 0 25vw;
  z-index: 5;
  position: absolute;
  transform: rotate(-10deg);
    -moz-transform: rotate(-10deg);
    -webkit-transform: rotate(-10deg);
`;