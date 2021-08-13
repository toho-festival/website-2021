import styled from "styled-components";
import { FC } from 'react';

const ThemeTOHO: FC = () => {
  return (
    <>
      <ThemeWrap>
        <Theme>今年のテーマ</Theme>
        <Rubi>しき</Rubi>
        <FestivalTheme>～ 織 ～</FestivalTheme>
      </ThemeWrap>
      <Arrangement>
        <Creater>副実行委員長　澤本昌宏</Creater>
        <Border>
          <Discription> 　第 70 回桐朋祭のテーマは、「織」になりました.織物や着物は糸と糸をつなぎ、織りなすことでつくられていきます。そこで、「織」という言葉には「人と人とがつながり合う」という意味が込められています。</Discription> 
          <Discription>　2020 年春先、新型コロナウィルスの影響で多くの人々は家にこもる生活を余儀なくされました。それから感染を防ぐために仕事や娯楽、イベントなどさまざまなものがリモートに取って代わり、世界中でオンラインの普及が加速しました。実際、前回の桐朋祭では来場者が生徒と保護者のみとなり、一般の方にはオンラインという形で参加していただくことになりました。</Discription>
          <Discription>　インターネットを使うことで生活の利便性が高まりました。たしかに、オンラインによって遠く離れた人ともつながり、より多くの方々が桐朋祭に参加できます。しかし、これと同時に本来の「人と人とのつながり」が失われつつあるという側面があるのではないでしょうか。オンラインでは一度の配信で多くの人々に効率的に披露することができる反面、視聴者はその一点しか見ることができず、双方向での関わりをもったりその場の雰囲気を感じたりすることができません。インターネットを使って多くの人々に桐朋祭を見て知ってもらいながら、生徒と来場者とのつながりを大切にするのが本来の文化祭のあるべき姿ではないかと思っています。</Discription>
          <Discription>　第 70 回桐朋祭では、中学生から高校生まで様々な個性を持った生徒たちが一本一本の糸となって織りなしていく、多様性のある文化祭を目指していきます。そして多くの方に来場していただき、このような現代だからこそ、桐朋祭を通して人と人とがつながり合えるような明るい空間をつくっていきたいと思います。どうぞお楽しみください。</Discription>
        </Border>
      </Arrangement>
    </>
  )
}

export default ThemeTOHO;

const ThemeWrap = styled.div`
  margin-top:20vw;
  color: white;
  text-align: center;
  @media screen and (max-width:767px) { 
    margin-top:30vw;
  }
`;

const Theme = styled.h2`
  margin-top: 10vw;
  margin-bottom: 4vw;
  display: inline-block;
  border-bottom: #bf9d6d 6px solid;
`;

const FestivalTheme = styled.h1`
  font-size:10vw;
`;

const Arrangement = styled.div`
  margin-bottom: 20vw;
  display: inline-block;
  @media screen and (max-width:767px) { 
    margin-top: 5vw;
  }
`;

const Border = styled.div`
  border-style: solid solid solid solid;
  border: 2px 2px 2px 2px;
  border-color: #bf9d6d;
  margin: 0 2vw 0 2vw;
  border-radius: 10px;
`;

const Discription = styled.h3`
  text-align: center;
  color: white;
  margin: 3vw 0 3vw 0;
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-decoration-skip-ink: none;
  text-underline-offset: 4px;
  padding: 10px;
  @media screen and (max-width:767px) { 
    font-size: 12px;
  }
`;

const Rubi = styled.h4`
  
`;

const Creater = styled.h2`
  text-align:center;
  color: white;
  @media screen and (max-width:767px) { 
    font-size: 15px;
  }
`;