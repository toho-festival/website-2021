import { FC } from 'react';
import styled from 'styled-components';

const ClassByStudent = () => {
  return(
		<Layout>
			<Organizer><p>主催:高校総務委員会企画部門</p></Organizer>
			<Title>
				<Top>
					<BigCircle>生</BigCircle>
					<NomalCircle>徒</NomalCircle>
					<NomalCircle>に</NomalCircle>
					<NomalCircle>よ</NomalCircle>
					<NomalCircle>る</NomalCircle>
				</Top>
				<Bottom>
					<ClassImage src="/classByStudents.png" />
					<BigCircle>授</BigCircle>
					<NomalCircle>業</NomalCircle>
				</Bottom>
			</Title>
			<SubTitle>時間割</SubTitle>
			<Schedule>
				<li>一限・・・</li>
				<li>二限・・・</li>
				<li>三限・・・</li>
			</Schedule>
			<Where>場所:関心ラウンジ</Where>
			<Explain>
				<p>授業をするのは生徒だけ？</p>
				<p>そんなことはありません。</p>
				<p>毎年大人気のこの企画が今年もやってきた！</p>
				<p>桐朋生の「クセが強い」授業を是非お楽しみください！</p>
			</Explain>
		</Layout>
  );
} 
  
export default ClassByStudent;

const Layout = styled.div`
	background-color:white;
	background: linear-gradient(140deg, white, white 10%, yellow 10%, yellow 12%, white 12%,  white 20%, yellow 20%, yellow 22%, white 22%, white );
`;

const Organizer = styled.div`
	text-align:right;
	> p{
		padding:1%;
		display: inline-block;
		background-color:#000000;
		color:White;
		margin-right:2%;
		margin-top:2%;
	}
`;

const Title = styled.div`
	text-align:right;
`;

const BigCircle = styled.div`
  width:8rem;
  height:8rem;
  border-radius: 50%;
  background: green;
  text-align:center;
  line-height: 8rem;
	font-size:3rem;
	display:inline-block;
	vertical-align: bottom;
	@media screen and (max-width: 520px) {
		width:5rem;
  	height:5rem;
	  line-height: 5rem;
		font-size:2rem;
	}
`;
const NomalCircle = styled.div`
  width:6rem;
  height:6rem;
  border-radius: 50%;
  background: green;
  text-align:center;
  line-height: 6rem;
	font-size:2rem;
	display:inline-block;
	vertical-align: bottom;
	@media screen and (max-width: 520px) {
		width:3rem;
  	height:3rem;
	  line-height:3rem;
		font-size:1rem;
	}
`;

const Top = styled.p`
`;

const ClassImage = styled.img`
	margin-right:20%;
	width:25%;
`;

const Bottom = styled.p`
	margin-right:5%;
`;

const SubTitle = styled.h2`
	text-align:center;
`;

const Schedule = styled.ul`
	list-style:none;
	text-align:center;
`;

const Where = styled.p`
	text-align:right;
`;

const Explain = styled.section`
	margin-left:5%;
`;