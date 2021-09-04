import { FC } from 'react';
import styled from 'styled-components';
import { useRouter } from "next/router";

const ClassByStudent = () => {
	const router = useRouter();
  return(
		<Layout>
			<Button onClick={() => router.back()}>＜元のページに戻る</Button>
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
					<ClassImage src={ process.env.basePath + "/images/classByStudents.png" } />
					<BigCircle>授</BigCircle>
					<NomalCircle>業</NomalCircle>
				</Bottom>
			</Title>
			<SubTitle>時間割</SubTitle>
			<Date>土曜日</Date>
			<Schedule>
				<li>一限・・・12:30~ <Indent>「ファミリーコンピューター〜古き良き時代の良作から怪作まで〜」<p>先生:佐野辰明</p></Indent></li>
			</Schedule>
			<Date>日曜日</Date>
			<Schedule>
				{/* <li>一限・・・11:00~ <Indent>「突然ですが、鳥を語ってもいいですか？」<p>先生:西田康平</p></Indent></li>
				<li>二限・・・14:00~ <Indent>「素数〜『素』晴らしい『数』を知ろう〜」<p>先生:小池翔大</p></Indent></li> */}
				<li>三限・・・15:00~ <Indent>「成田空港と三里塚闘争」<p>先生:鈴木快晴</p></Indent></li>
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
	padding-left: 3%;
	padding-top: 3%;
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

const Date = styled.p`
	text-align: center;
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
	margin-left: 3%;
`;

const Where = styled.p`
	text-align:right;
`;

const Explain = styled.section`
	margin-left:5%;
`;

const Indent = styled.div`
	margin-left: 2%;
`;

const Button = styled.a`
  border: 4px solid #1a1a1a;
  margin-top: 4px;
  border-radius: 150px;
  background: #1a1a1a;
  color: #fff;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  padding: 6px;

  :hover {
    color: #1a1a1a;
    background: #fff;
  }
  @media screen and (max-width: 767px) {
    padding: 2px;
  }
`;