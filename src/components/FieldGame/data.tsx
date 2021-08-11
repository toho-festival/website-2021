import { FC, useState, useRef, useLayoutEffect, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import stringWidth from "string-width"
import styled from 'styled-components';

const data = {
    labels: ['桐朋生', '保護者の方々', '外部のお客様'],
    datasets: [
        {
            data: [60,30,10],
            backgroundColor: ["#4f85a6","#79a7d9","#d8dbd9"],
            hoverBackgroundColor:  ["#97cdf3","#f67690","#fff8cf"],
            borderColor: ["transparent","transparent","transparent"]
        }
    ]
} 

const options = {
    maintainAspectRatio: true,
    responsive: true,
  };

export const PiePlot: FC = (props) => {
  // const ref = useRef()
  // const [width, setWidth] = useState(0)
  // const [fontSize, setFontSize] = useState("auto")
  // useEffect(() => {
  //   const sizePx = (width / stringWidth(name)) * 2
  //   setFontSize(`${sizePx}%`)
  // }, [width, name])

  // useLayoutEffect(() => {
  //   // @ts-ignore
  //   const obs = new ResizeObserver((e) => setWidth(e[0].contentRect.width))
  //   obs.observe(ref.current)
  //   return () => obs.disconnect()

  // }, [])
    return (
      <>
        <GraphWrapper>
            {/* <Name ref={ref} fontSize={fontSize}>{props.name}</Name> */}
            <Name>{props.name}</Name>
            <Pie data={data} width={200} height={200} options={options}/>
        </GraphWrapper>
      </>
    )
}

const GraphWrapper = styled.div`
  color: #FFE350;
  background-color: #0a123a;
  margin-top: 1vw;
  margin: 0.3%;
	width:19%;
	height:30%;
	display: inline-block;
  border: 2px solid green;
  border-image: linear-gradient(to right, green 0%, yellowgreen 100%);
  border-image-slice: 1;
`;

const Name = styled.div`
  width: 100%;
  font-size: 1em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
  border-bottom: 2px solid green;
  border-image: linear-gradient(to right, green 0%, yellowgreen 100%);
  border-image-slice: 1;
  @media screen and (max-width: 1119px) {
      font-size: 0.5px;
  }
`;