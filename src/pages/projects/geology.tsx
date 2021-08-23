import { useRouter } from "next/router";
import styled from "styled-components";

interface CommonData {
  id:string;
}

const Geology = () => {
  const router = useRouter();
  return (
    <Wrap>
    <Indent>
      <Button onClick={() => router.back()}>＜元のページに戻る</Button>
    </Indent>
    <Flex>
      <Symbol>
        <Img src={process.env.basePath + "/images/geology1.jpg"} alt="宣材写真"/>
        <Img src={process.env.basePath + "/images/geology2.jpg"} alt="宣材写真"/>
        <Img src={process.env.basePath + "/images/geology3.jpg"} alt="宣材写真"/>
        <Img src={process.env.basePath + "/images/geology4.jpg"} alt="宣材写真"/>
        <Img src={process.env.basePath + "/images/geology5.jpg"} alt="宣材写真"/>
        <Img src={process.env.basePath + "/images/geology6.jpg"} alt="宣材写真"/>
      </Symbol>
      <Text>
        <Center>
          <Subject>地学部</Subject>
        </Center>
        <Explain>
        <p>
        地学部は、自然科学分野におけるマイナー科目(笑)である地学に関する活動を行っています。
        受験で は使いにくい科目ですが、とても楽しい分野です!! 現在は大きく分けて天文・地質・ロケットの3分野に 分かれて活動しています。 
        また、僕たちの部活は設備がかなり充実しています! プラネタリウム・太陽観測所・天文台など、学校の設備をお借りして本格的な活動をさせていただいています。プラネタリウムでは桐朋祭や学校説明会時に天文班員によるオリジナルプログラムを上映しています。太陽観測所では昼休みに黒点観測を 行っていて、天文台は年に数回の天体観測会で使用しています。 
        とても守備範囲が広く、何をやってる部活なのかと言われると困ってしまうような感じです。もし興味を もっていただけましたら、是非桐朋祭当日に足を運んでみてください!!<br />
        <br />
        ●桐朋祭での予定 桐朋祭では、たくさんの分野をまたぐ大規模な展示・実演を行います!! また学校の設備をお借りし、プ ラネタリウムの生解説や太陽観測体験も行う予定です。<br />
        <br />
        1. 一般展示(@地学教室・国語教室 教科教室棟4階) 国語教室・地学教室で行います。天文のテーマは「月」。
        身近な天体である月をテーマに、展示を行い ます。イメージしにくく分かりにくい天文の分野ですが、模型などを用いて理解しやすく解説いたします。 
        地質については、恒例の鉱物展示や地震発生装置による実演の他、暗所を利用した本格的な蛍光鉱 物展示を予定しています! ブラックライトに照らされてカラフルに輝く蛍光鉱物を、是非お楽しみくださ い! ロケットでは、歴代の機体の展示に加え、今回は自作の実験機材を用いた風洞実験を行います!
        ロケット飛行中の周りの空気の流れを可視化したものになります。是非ご覧ください! 地学教室の体験ブースも、今年はかなり強化される予定です。ロケットの風洞実験、地質の砂金採り 体験(実演になってしまう可能性あり)、月面バギー操作体験などなど、体験コーナーが充実します! 自ら体験し、見ることで分かりやすく地学の分野について知ることができるので、どなたさまも気軽にお楽しみください!!<br />
        <br />
        2. プラネタリウム上映(@プラネタリウム 教科教室棟4階) 今年も、感染防止対策を徹底した上でプラネタリウム生解説を行います! プラネタリウムは今年5月に リニューアル工事を行ったため、最新システムバージョンと最新設備を利用した、今までより一段階パ ワーアップした上映をお楽しみいただけます。ぜひご期待ください。 なお、現時点で今回上映が確定しているのは以下の番組です。いずれも部員がプログラムを組み、1 から制作したものです!<br />
        ・本日の星空<br />
        ・夜景と星タイムラプス<br />
        ・星座史<br />
        ・惑星間フライト ・銀河系フライト(仮) (新) ・未来の天体現象   (新) ※場合によっては変更・追加の可能性有<br />
        新しく上映する運びとなった銀河系フライト(仮)では、ベテルギウスの超新星爆発を観察した後銀河系 中心のブラックホールまで宇宙飛行する、最新バージョンのプラネタリウムシステムの新機能をふんだ んに使ったものになります! また未来の天体現象は、その名の通り将来お目にかかることのできる天体現象を、時間移動(つまりタ イムトラベル)を使って一足先に見てしまおうというプログラムです。 ぜひ足を運んでいただき、宇宙の神秘を感じていただけたらと思います!!<br />
        <br />
        3. 太陽観測体験(@太陽観測所 教科教室棟4階) 一般展示やプラネタリウムの並びに、太陽観測所という施設があります。ここで地学部は昼休み、当番 制で太陽観測(黒点観測)を行っています。黒点は、時折太陽の表面に現れる黒い点のことで、これを 観測することで太陽の活発度合を知ることができます。 今回は、ここでの太陽観測の方法を実際に実演し、お客様に体験してもらうことを予定しています! 他 ブースと同様に開放してあるので、興味のある方は是非見学にお越しください!!<br />
        <br />
        4. モデルロケット打上実演(@野球場)
        </p>
        <p>
        モデルロケットは、黒色火薬を用いて飛ばす小型のロケットで、地学部ではその製作・試射を活動の一 環としています。今年も、恒例の文化祭打上実演を野球場をお借りして行います!! 打上時間が決まっておりますので、興味を持っていただけましたらパンフレットをご確認の上、所定の 時間に野球場(西グラウンド)へお越しください! 大迫力の打上を是非ご覧いただけたらと思います!!<br />
        6月開催を目処に準備してきたので、準備は万端です! 余裕があれば、ここに載せたことに限らずさら に多くの展示・実演をできたらと考えています。 興味を持っていただけましたら、当日教科教室棟4階に足を運んでいただけると幸いです!!
        </p>       
      </Explain>
        <Introduce>
        </Introduce>
      </Text>
    </Flex>
    <Center>
      <Flex2>
        <Image src={process.env.basePath +"/images/mapIcon.png"} />
        <Location>強化教室等　4F　地学教室　国語教室　太陽観測所にて</Location>
      </Flex2>
    </Center>
</Wrap>
  );
}

export default Geology;


const Wrap = styled.div`
  color: white;
`;

const Indent = styled.span`
  padding-left: 3%;
`;

const Button = styled.a`
  border: 4px solid #ffffff;
  margin-top: 4px;
  border-radius: 150px;
  background: #fff;
  color: black;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  padding: 6px;

  :hover {
    color: #fff;
    background: #1a1a1a;
  }
  @media screen and (max-width: 767px) {
    padding: 2px;
  }
`;

const Flex = styled.div`
  background-color: #1a1a1a;
  display: flex;
  justify-content: space-between;
  padding-top: 7vw;
  padding-bottom: 10vw;
  @media screen and (max-width: 730px) {
    display: block;
  }
`;

const Flex2 = styled.div`
  background-color: #1a1a1a;
  display: flex;
  text-align: center;
  padding-top: 7vw;
  padding-bottom: 10vw;
  margin-left: 20%;
  @media screen and (max-width: 730px) {
    margin-left: 0;
  }
`;

const Location = styled.div`
`;

const Image = styled.img`
  width:40px;
  height: 40px;
`;

const Symbol = styled.article`
  width: 30%;
  margin:0 auto;
  text-align: center;
`;

const Img = styled.img`
  width: 70%;
`;

const Text = styled.aside`
  margin-top: 5vw;
  margin-right: 60px;
  width: 60%;
  @media screen and (max-width: 730px) {
    width: 100%;
  }
`;

const Center = styled.div`
  text-align: center;
  padding-left: 4%;
  padding-right: 4%;
`;

const Subject = styled.h1`
  border-bottom: 5px solid #bf9d6d;
  color: white;
  display: inline-block;
  @media screen and (max-width: 730px) {
    border-bottom: 3px solid #bf9d6d;
    font-size: 22px;
  }
`;

const Explain = styled.h3`
  display: inline;
  color: white;
  @media screen and (max-width: 730px) {
    font-size: 12px;
  }
`;

const Introduce = styled.ul`
  list-style: none;
`;
