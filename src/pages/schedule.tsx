import { FC } from 'react';
import styled from 'styled-components';

const Schedule: FC = () => {
	return(
		<>
		{/*大場が作ってくれた共通コンポーネントでタイトルを表示*/}
			<Contents>
				<Detail>今年度の桐朋祭はコロナウイルス蔓延防止のため<Important>開催日時が例年と異なって</Important>います。<p>具体的な日時は以下の通りです。よくご確認の上でご来場ください</p></Detail>
				<Date>
					<p>６月５日(土)13:00～17:00</p>
					<p>６月６日(日) 9:30～12:00　13:00～17:00</p>
					<p>６月７日(月) 9:30～13:00</p>
				</Date>
				<Attentions>
					<p>※日曜日は午前と午後のⅡ部制です</p>
					<p>※ご来場いただく際はスリッパをお持ち下さい。</p>
					<p><Important>※６月７日(月)は生徒と保護者のみとなります</Important></p>
				</Attentions>
			</Contents>
		</>
	);
}

export default Schedule;

const Contents = styled.article`
	margin-left:5%;
`;

const Detail = styled.section``;

const Important = styled.i`
	color:red;
`;

const Date = styled.section`
	margin:2% 0 2% 0;
`;

const Attentions = styled.section`
	list-style:none;
	font-size:0.8rem;
`;