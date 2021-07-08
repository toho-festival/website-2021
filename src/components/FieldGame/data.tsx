import { FC } from 'react';
import { Pie } from 'react-chartjs-2';
import styled from 'styled-components';

const data = {
    labels: ['桐朋生', '保護者の方々', '外部のお客様'],
    datasets: [
        {
            data: [60,30,10],
            backgroundColor: ["#4169e1","#ff1493","#FFCE56"],
            hoverBackgroundColor:  ["#36A2EB","#FF6384","#FFCE56"],
            borderColor: ["transparent","transparent","transparent"]
        }
    ]
} 

const options = {
    maintainAspectRatio: true,
    responsive: true,
  };

export const PiePlot: FC = (props) => {
    return (
        <GraphWrapper>
            <div>{props.name}</div>
            <Pie data={data} width={200} height={200} options={options}/>
        </GraphWrapper>
    )
}

const GraphWrapper = styled.div`
  color: white;
	width:20%;
	height:20%;
	display: inline-block;
`;