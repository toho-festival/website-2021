import { FC } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

const Otaku: FC = () => {
  const router = useRouter();
  return (
    <Wrap>
      <Button onClick={() => router.back()}>＜元のページに戻る</Button>
      <Icon src={process.env.basePath + ""} />
      <h2>展示内容</h2>
      <p>
        スマートフォンの歴史や、新製品の傾向など、スマートフォンに関してのレポートを個
        別展示教室で展示しています。また、展示内容とは関係ありませんが、スマートフォン
        に関してのアンケートを行なっています。なお、作ったレポートは桐朋祭の期間中に
        Webサイトで公開しています！この下にありますので、ぜひ見てください！
      </p>
      <h2>場所</h2>
      場所: 個別展示教室 (中学棟 3階 2-5教室)
      <h2>レポート本文</h2>
      <SubTitle>1.はじめに</SubTitle>
      <p>
        年々新製品が発売されるスマホ。スマホの発売には、それぞれのメーカーの戦略が
        あると思いました。そこで日本でシェアの高い(2019年度、MMD研究所) Apple, SONY,
        Sharp, Samsungの4社から、どのようなスマホが発売されているのかを調べ、それを
        元にどのような戦略でスマホを発売しているか、どのような傾向で新製品が出ている
        のかを考えました。
      </p>
      <Graph src={process.env.basePath + ""}/>
      <p>MMD研究所、メインとして使っているスマホについての調査(2019年)</p>
      <SubTitle>2. スマホの分析【iPhone編】</SubTitle>
      <p>
        Appleは、iPhoneというスマホを発売しています。iOSという独自のOS ※1 を搭載し続けています。
      </p>
      <Small>
        ※1 OS・・・オペレーティングシステムの略。スマホやパソコンなどの管理や操作、それによる動作を担当する。
      </Small>
      <p>
        これまでのiPhone：
      </p>
      <p>
        2007年に初代iPhoneが海外で発売されましたが、通信規格が日本に対応しなかった
        ため、日本では発売されませんでした。そして2008年、3GやGPSに対応したことにより
        、日本でもiPhone がSoftBankから発売されるようになりました。その後、フラッシュラ
        イトやフロントカメラ、4Gに対応したiPhoneが発売されました。また、iPhoneはすべて
        のモデルに数年間、ソフトウェアのアップデートが施され、新機能が追加されます。そ
        の過程でApp Storeや「iPhoneを探す」機能など、様々な機能の追加や各種画面のデ
        ザイン変更などがされていきました。
      </p>
      <p>
        iPhoneのモデル構成:
      </p>
      <Graph src={process.env.basePath + ""}/>
      <Small>
        ※2 SIMフリー・・・端末単体で売っているスマホのこと
      </Small>
      <Small>
        ※3 ミリ波・・・5Gのなかでもさらに速い通信ができる電波の種類。電波が広範囲に飛びづらいため、範
        囲、エリアがとても限られる。
      </Small>
      <p>
        Appleの戦略:
      </p>
      <p>
        iPhoneの発売の戦略において他社と違うところは、同社製の製品やサービスのグル
        ープの一環としてiPhoneを売っているところにあると思います。例えば、iPadやApple
        Watchなどの同社製の製品との連携、iCloudやApple Musicなどのサービスの一環と
        してiPhoneを発売していると思われます。また、初代のiPhoneが発表された当時、タッ
        チスクリーンの画面にホームボタンといくつかのボタンだけというシンプルな設計で当
        時の携帯電話を覆しました。そのため、iPhoneの発売には、こうしたブランド力も利用
        して発売していると考えられます。iPhoneは、発売開始からずっと毎年1回、秋頃に新
        製品を発表し、発売をします。これは、iPhoneの発売が1年に1回であることを顧客に
        覚えさせることで新製品の情報をより多くの人に見てもらう狙いがあると考えられます
        。その1年に1度の発表では、主にカメラやプロセッサー ※4 の向上、その他の新機能を
        追加しています。価格帯も様々で、多くの人にiPhoneを使ってもらう狙いがあると考え
        られます。Apple Storeや家電量販店などで積極的に端末単体での発売がされていて
        、iPhoneを買いやすくする狙いがあると考えられます。
      </p>
      <p>
        ※4プロセッサー・・・スマホやパソコンなどの演算を行う部分。このプロセッサーの性能が、スマホの処
        理速度に大きく関係する。
      </p>
      <p>
        今後のiPhone:
      </p>
      <p>
        このまま数年ほどは、1年に1回iPhoneのレギュラーモデルと上位モデル、サイズの構
        成などは変わらず、毎年カメラやプロセッサーなどを少しずつ性能の良いものにした
        iPhoneが発売され、廉価版モデルも何年かに一度新製品が出ると考えられます。そし
        て、何年か後にまた新しいデザインになるかもしれません。また、iPhoneの象徴的な
        OSのアップデートは毎年行われ、OSでの新機能も追加されていくと思われます。
      </p>



      <SubTitle>3. スマホの分析【SONY編】</SubTitle>
      <p>
        SONYは、Xperiaというスマホを発売しています。Android ※5 というOSを搭載しています
        。
      </p>
      <Small>
        ※5 Android・・・Google社が中心に作っているOS。それぞれのスマホに合わせて、各企業が自由にカ
        スタマイズしてスマホにインストールする。
      </Small>
      <p>
        これまでのXperia：
      </p>
      <p>
        初代Xperiaは、2010年に発売されました。また、2011年には「おサイフケータイ」やテ
        レビの視聴、赤外線通信機能など、日本独自の機能を追加していきました。2012年に
        は、防水のモデルも登場しました。中にはゲームのコントローラー付きのモデルや、と
        ても大型のモデル、小型なモデルなど一風変わったスマホも出していきましたが、今
        ではそのようなモデルはあまり発売されていません。SONYはテレビやカメラ、音楽プ
        レーヤーを出していることもあり、歴代機種にもディスプレイやカメラ、音楽プレーヤー
        のようなエンターテイメントとしての機能が重点的に置かれています。指紋認証などの
        生活に便利な機能も徐々に追加されていきました。しかし、ここ5年ほど、Xperiaは、海
        外と日本で同じモデルを出す傾向にあり、海外でも発売されているモデルにおいては
        、日本独自の機能はなくなっていきました。
      </p>
      <p>
        Xperiaのモデル構成:
      </p>
      <Graph src={process.env.basePath + ""}/>
      <p>
        SONYの戦略:
      </p>
      <p>
        Xperiaは、カメラやディスプレイの技術力を活かしたプロ向けのスマホや、国内メーカ
        ーならでの一般の人向けのスマホなど、幅広い人に向けたスマホを作っています
        。Xperia 1 IIIのようなプロ向けのスマートフォンには、クリエイター向けの機能や4Kデ
        ィスプレイなどが搭載されています。また、レギュラーモデルにはXperiaのカメラの技
        術を搭載しながら、生活に便利な機能を搭載しています。そのため、幅広い人が自分
        の目的にあったXperiaを買うことができます。Xperiaには世界展開しているモデルが
        あるのですが、Xperia Ace IIや、Xperia 10 IIIのような日本でしか発売していないモデ
        ルもあり、日本人に向けた便利な機能が多く搭載しています。また、Xperiaは携帯会
        社限定のモデルが多く、スマホの通信プランと共にスマホを買う日本のシステムにお
        いて、そのスマホを選ばれやすくする役目があると考えられます。また、新機種での
        変更のため、過去から現在までカメラやプロセッサーのスペックを向上したり、時には
        コスト削減のためかカメラの画素数を低下させたりして、何年かに一度デザインや本
        体の素材を変更しています。
        今後のXperia
        引き続き、さまざまな人向けのスマホが発売されると考えられますが、競合他社が多
        い安価なモデルよりも、海外にも発売されているSONYの技術力を詰め込んだ上位モ
        デルが中心になると考えられます。
      </p>



      <SubTitle>4. スマホの分析【SHARP編】</SubTitle>
      <p>
        SHARPは、主にAQUOSというスマホを発売しています。AndroidというOSを搭載して
        います。
      </p>
      <p>
        これまでのAQUOS:
      </p>
      <p>
        初代のAQUOSのスマートフォンは、2010年に発売されました。初代には、物理的なキ
        ーボードがついていましたが、同年発売された新モデルからは今のような物理的なキ
        ーボードのないスマホになりました。途中。チョコレートのデザインのスマホや、ガラケ
        ーとスマホが一体化したスマホのような独自な機種もありましたが、そのような徐々に
        なくなっていきました。徐々に日本人向けの機能を搭載したさまざまな機種を発売して
        いきました。最近では、AQUOS Senseシリーズのスマホが日本のAndroidのスマホの
        中で非常に高いシェアをあげています。
      </p>
      <p>
        AQUOSのモデル構成:
      </p>
      <Graph src={process.env.basePath + ""}/>
      <p>
        SHARPの戦略:
      </p>
      <p>
        AQUOSは、日本人に万人受けするAndroidスマホを作っています。カメラやプロセッサ
        ーなどのスペックが高い上位モデルもありますが、一般人の写真撮影や、動画視聴
        やゲーム、web閲覧などには必要十分なスペックを搭載しながら、日本人に向けた様
      </p>
      <p>
        々な機能、電池の持ちや価格に優れたレギュラーモデルがとても売れています。この
        レギュラーモデルには安さはもちろん、長い電池持ちにこだわっているそうです。また
        、スマホに慣れている人向けの便利な機能や、かんたんホーム機能などガラケーユ
        ーザーから移行を考えた機能などにより、とても幅広い人に向けて売れるようにして
        います。このほかにもSoftBankからは電話などの専用のボタンが付いた、お年寄り向
        けの専用の機能がついたスマホもあり、お年寄り向けの携帯を出してします。
      </p>
      <p>
        今後のAQUOS:
      </p>
      <p>
        幅拾いユーザーに向けられたAQUOS Senseシリーズを中心に、バッテリーやカメラ、
        便利な機能などを向上、追加させていった新モデルを出していくと考えられます。
      </p>

      <SubTitle>5.　スマホの分析【Samsung編】</SubTitle>
      <p>
        Samsungは、主にGalaxyというスマホを発売しています。AndroidというOSを搭載して
        います。
      </p>
      <p>
        これまでのSamsungのスマホ:
      </p>
      <p>
        Samsungは、2009年にスマホの発売を始めていきました。そして、2010年にGalaxyシ
        リーズのスマホの発売を開始し、ドコモから日本でも発売されました。早くから、有機
        ELのディスプレイを搭載しています。専用のペンのついたモデルもあり、手軽に手書
        きでメモができることが特徴的です。最近では、端末を折り曲げることができるフォル
        ダブル端末も発売しています。
      </p>
      <p>
        Samsungのスマホのモデル構成:
      </p>
      <Graph src={process.env.basePath + ""}/>
      <p>
        Samsungの戦略:
      </p>
      <p>
        Samsungは、世界的にAndroidスマホを発売しています。Galaxyは、非常にコストパフ
        ォーマンスの高いエントリーモデルをはじめ、とても高画質なカメラを搭載した上位モ
        デルなど、幅広い人々に向けたスマホを発売しています。また、Galaxyもキャリア限定
        のモデルが多く、キャリアと共にスマホを買う日本のシステムにおいてそのスマホを選
        ばれやすくする役目があると考えられます。また、高度な技術で作られた薄型ガラス
        が使われたスマートフォンを折り曲げることもできるフォルダブルモデルもあります。な
        かなか高額でマニアックなモデルですが、耐久性などSamsungの技術力を活かしたス
        マホになっています。
      </p>
      <p>
        今後のGalaxy:
      </p>
      <p>
        非常にコストパフォーマンスの高いエントリーモデル、とても高画質なカメラを搭載した
        上位モデルとともに、新しいカメラや機能を搭載したスマホを今後出していくと考えら
        れます。また、フォルダブルモデルについては高価であるために買う人が少ないので
        、価格の低廉化が進められると考えられます。
      </p>

      <SubTitle>6. まとめ</SubTitle>
      <p>
        それぞれの会社がそれぞれのスマホを売るため、様々な工夫をしていることがわかり
        ました。これらの4社に共通して、1年に1回は必ず小さな変更を加えた新機種を売るこ
        とにより、買い替えを促していることがわかりました。その頻度は会社により異なるが
        、そのスマホの価格層ごとに1年に1度ほどのところが多いです。そして、年に1度の新
        商品の発売で変更するもので多いものは、カメラ周りの機能やディスプレイ、プロセッ
        サーなどであることがわかりました。しかし、1年に1度確実に新モデルを出すためか
        、1年で大きな変更を一気にやる会社はありませんでした。デザイン変更も毎年では
        ないですが、何年かに1度行っている会社が多いです。また、需要のない機能をつけ
        た機種はなかなか長く売れないこともわかりました。
      </p>
      <p>
        スマホの販売には、様々な戦略がありました。
      </p>

      <SubTitle>7. 桐朋祭スペシャルコンテンツ</SubTitle>
      <p>
        今のスマホの元となった機種
      </p>
      <Img src={process.env.basePath + ""} />
      <p>
        IBM Simon のイメージ図
      </p>
      <p>
        世界で一番初めに作られたスマートフォンは、1994年にIBM社の作ったIBM Simonだ
        といわれています。スタイラスペン(タッチペン)を利用したタッチ操作に対応しました。
        データ通信機能やメール、電卓、カレンダー、FAX、メモ帳、ファイルマネージャーなど
        の機能がありましたが、本体サイズが大きすぎる上、899ドル(当時の10万円ほど)した
        ため、あまり普及はしませんでした。
      </p>
      <p>
        初代iPhone
      </p>
      <Img src={process.env.basePath + ""} />
      <p>
        Apple 公式サイトより
      </p>
      <p>
        2007年、AppleからワイドスクリーンiPod(音楽プレーヤー), 電話, インターネット通信端
        末を一つにした端末として、iPhoneが発表されました。iPhoneは他の携帯電話にない
        、大きなタッチディスプレイとホームボタンといくつかのボタンだけいう今のようなスマ
        ホの形でした。このiPhoneをきっかけとして、主にタッチディスプレイで操作するとホー
        ムボタンなどのボタンを搭載したスマートフォンが発売されました。日本には、2008年
        にiPhone 3GがSoftBankから発売されました。
      </p>
      <p>
        初のAndroidのスマホ
        2008年には、世界ではじめてAndroid搭載のスマホ、T-Mobile G1が発売されましたが
        、物理的なキーボードがついているスマートフォンでした。今のようなタッチディスプレ
        イ付きのAndroidスマホは、2009年に発売されたT-Mobile MyTouch 3Gという機種が
        最初です。また、同じ年の2009年には、docomoからT-Mobile MyTouch 3Gとよく似た
        、HT-03Aというスマホが発売されました。
      </p>
      <Img src={process.env.basePath + ""} />
      <p>docomo公式サイトより</p>
      <p>歴代iPhone一覧表作ってみました。是非見てください。</p>
      <Graph src={process.env.basePath + ""}/>
      <p>参考文献</p>
      <div>
        ITmedia Mobile <a href="https://www.itmedia.co.jp/mobile/">https://www.itmedia.co.jp/mobile/</a>

      </div>
      <div>
        BCN+R <a href="https://www.bcnretail.com/">https://www.bcnretail.com/</a>

      </div>
      <div>
        Apple <a href="https://apple.com/">https://apple.com/</a>

      </div>
      <div>
        Xperia <a href="https://xperia.sony.jp/">https://xperia.sony.jp/</a>

      </div>
      <div>
        ケータイWatch <a href="https://k-tai.watch.impress.co.jp/">https://k-tai.watch.impress.co.jp/</a>

      </div>
      <div>
        SoftBank <a href="https://www.Softbank.jp/corp/">https://www.Softbank.jp/corp/</a>

      </div>
      <div>
        docomo <a href="https://www.nttdocomo.co.jp/">https://www.nttdocomo.co.jp/</a>

      </div>
      <div>
        KDDI <a href="https://kddi.com/">https://kddi.com/</a>

      </div>
      <div>
        Rakuten Mobile <a href="https://network.mobile.rakuten.co.jp/">https://network.mobile.rakuten.co.jp/</a>

      </div>
      <div>
        DIME <a href="https://dime.jp">https://dime.jp</a>

      </div>
      <div>
        価格ドットコム <a href="https://kakaku.com">https://kakaku.com</a>

      </div>
      <div>
        ASCIIデジタル辞典 <a href="https://yougo.ascii.jp/">https://yougo.ascii.jp/</a>

      </div>
      <div>
        知恵蔵 <a href="https://kotobank.jp/dictionary/chiezo/">https://kotobank.jp/dictionary/chiezo/</a>

      </div>
      <div>
        CNET <a href="https://www.cnet.com/">https://www.cnet.com/</a>

      </div>
      <div>
        いらすとや <a href="https://www.irasutoya.com">https://www.irasutoya.com</a>
      </div>
      <div>
        アンケートのお願い
        <HumanImg src={process.env.basePath + ""} />
       <p> ／どうか、どうかよろしくお願いします＼</p>
        <p>スマホについてのアンケートへのご協力お願いします！！</p>
        <a href="https://forms.gle/2Vgtp5nUWeDvGegi6">https://forms.gle/2Vgtp5nUWeDvGegi6</a>
        来年は、みんなのスマホの機種を調べ、最適な機種を提案する自由研究をやり、来年の桐朋祭で発表します。そこで、5分ほどのアンケートへのご協力をお願いします！
        内容は、スマホの機種などについてです。
      </div>
    </Wrap>
  );
}

export default Otaku;

const Wrap = styled.div`
  padding-left: 3%;
  padding-top: 3%;
  color: white;
`;

const Center = styled.div`
  text-align: center;
`;

const Img = styled.img`

`;

const Icon = styled.img`

`;

const Name = styled.h1`
  text-align: center;
`;

const SubTitle = styled.h2`

`;

const Small = styled.p`

`;

const Graph = styled.img`

`;

const HumanImg = styled.img`

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