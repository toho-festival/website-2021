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
    maintainAspectRatio: true,
    responsive: true,
  };

export const PiePlot: FC<FieldProps> = (props) => {
  const dataSet = [props.blue, props.red, props.yellow];

  const data = {
    labels: ['桐朋生', '保護者の方々', '外部のお客様'],
    datasets: [
        {
            data: dataSet,
            backgroundColor: ["#4169e1","#ff1493","#FFCE56"],
            hoverBackgroundColor:  ["#36A2EB","#FF6384","#FFCE56"],
            borderColor: ["transparent","transparent","transparent"]
        }
    ]
  } 

  return (
    <GraphWrapper>
        <div>{props.name}</div>
        <Pie key={props.key} data={data} width={200} height={200} options={options}/>
    </GraphWrapper>
    )
}

const GraphWrapper = styled.div`
  color: white;
	width:20%;
	height:20%;
	display: inline-block;
`;