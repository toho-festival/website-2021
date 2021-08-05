import { FC } from 'react';
import { Pie } from 'react-chartjs-2';
import styled from 'styled-components';

type FieldProps = {
  key?: string
  blue?: number
  red?: number
  yellow?: number
  name?: string
}

const options = {
  responsive: true,
  };

export const PiePlot: FC<FieldProps> = (props) => {
  const dataSet = [props.blue, props.red, props.yellow];

  const data = {
    labels: ['桐朋生', '保護者の方々', '外部のお客様'],
    datasets: [
        {
            data: dataSet,
            backgroundColor: ["#4f85a6","#79a7d9","#d8dbd9"],
            hoverBackgroundColor:  ["#97cdf3","#A0C0E3","#fff8cf"],
            borderColor: ["transparent","transparent","transparent"]
        }
    ]
  } 

  return (
    <GraphWrapper>
      <Name>{props.name}</Name>
      <Pie key={props.key} type="pie" data={data} width={200} height={200} options={options}/>
    </GraphWrapper>
    )
}

const GraphWrapper = styled.div`
  color: #FFE350;
  background-color: #0a123a;
  margin-top: 1vw;
  margin: 0.3%;
  width:19%;
  height:30%;
  @media screen and (max-width: 1230px) {
    width:38%;
    height:60%;
  }
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