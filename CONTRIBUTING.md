# 開発に貢献しよう

開発を一緒に進めて、良い桐朋祭を目指しましょう。

## 約束事

### 開発の進行

開発は、[仕様書][spec]に基づいて[GitHub Projects][projects]を運営・管理し、[GitHub Issues][issues]で取り組みながら進めます。

取り組めそうなIssueを見つけたら、自分が取り組むことをコメントで宣言しましょう。また、実装できたら[Pull Request][pull]を作成して、元のIssueに
[リンク][link an issue]しましょう。そのうち、メンターからのコードレビューを経てマージされるので、通知をつけて待ちわびて下さい。

[spec]: ./specification.md

[projects]: https://github.com/toho-festival/toho-festival-2021/projects

[issues]: https://github.com/toho-festival/toho-festival-2021/issues

[pull]: https://github.com/toho-festival/toho-festival-2021/pull

[link an issue]: https://docs.github.com/ja/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue

### 開発の環境

開発には、Git、Node.js、Yarnを使用します。手元の環境にインストールされていない方は、予めインストールしておいて下さい。

## 手順

### 手順1 fork

Forkボタンを押して、指示に従いながらこのリポジトリをフォークしましょう。

![スクリーンショット](https://user-images.githubusercontent.com/56545698/115531688-096d7e00-a2d0-11eb-82e5-13fc61db64f0.png)

> Info: 既にフォークしていて、最新の状態に同期したい場合は、[こちらのページ][sync a fork]を参考にして下さい。

[sync a fork]: https://docs.github.com/ja/github/collaborating-with-issues-and-pull-requests/syncing-a-fork

### 手順2 clone

作業するパソコンで、Shell(Linux)かterminal(macOS)、Power Shell(Windows)を起動し、以下のコマンドを実行しましょう。但し、
`[フォークしたリポジトリのURL]`の部分は、前の手順でフォークしてできた新しいリポジトリのURLを各自入れて下さい。

```shell
git clone [フォークしたリポジトリのURL]
```

また、cloneしただけでは依存している別のパッケージをがインストールされていないので、次のコマンドを実行して下さい。
```shell
yarn install
```

### 手順3 新しいブランチを作る

実装する際の変更を記録していくためのブランチを作りましょう。ブランチ名は何でも良いですが、できれば取り組む内容を英語小文字のケバブケースで表したものであると好ましいです。

フッターを実装する場合の例：

```shell
git branch footer-development
```

### 手順4 実装する

[コーディング規約](#コーディング規約)に沿って実装しましょう。

実際の挙動を確認しながら開発したいということは多いと思います。このコマンドを実行することで、手元の環境で実行しながら開発が進められます。
```shell
yarn dev
```

### 手順5 commit

実装したらcommitをして、成果を保存しましょう。

```shell
git add .
git commit -m "何をしたか、詳細に記す"
```

""の内側には、そこまでに加えた変更を書きましょう。例えば、`"フッターの最下部に学校のサイトへのリンクなどを追加した"`というようにしましょう。

また、commitは意味のある最小の単位に分けて行いましょう。
> ❌良くない例
> - フッターを実装していたらコンフィグファイルもいじっちゃったけどまとめてコミットしちゃおう！
> - 1行書いて疲れたからとりあえずコミット

> ⭕良い例
> - フッターが完成したからコミットしよう

amend commitも活用しつつ、きれいなコミットログを作っていきましょう。

### 手順6 push

取り組んでいたIssueのための実装が終わって全てコミットし終えたら、GitHubにアップロード(push)しましょう。

```shell
git push
```

フォークしたリポジトリのページを開いて、作業していたブランチを選択すると、成果がアップロードされていることが確認できます。

### 手順7 Pull Requestをつくる

スクリーンショットのように、Pull requestボタンが表示されるので、ボタンを押して、何のIssueのために何をしたかなどの説明を書いて、Pull Requestをつくりましょう。

![image](https://user-images.githubusercontent.com/56545698/115422897-4b4ae580-a238-11eb-9c8e-71b2add40365.png)

また、できたPull Requestのページを開くと、右の列にLinked Issuesという段があります。歯車ボタンを押して関係するIssueを選択して下さい。

![image](https://user-images.githubusercontent.com/56545698/115423779-11c6aa00-a239-11eb-9f8d-2812d93c40f1.png)

大仕事もこれで一区切りです👏。

> 管理者がコードを確認して、必要に応じて修正を提案したりするので、すぐに気付けるように、右上にあるWatchボタンを押して通知が来るようにしておきましょう。
> 
> ![スクリーンショット](https://user-images.githubusercontent.com/56545698/115531870-3752c280-a2d0-11eb-93a2-a7045ac0880d.png)

## コーディング規約

このリポジトリでは複数のメンバーが共同で開発していますが、各々が好き勝手に書いてしまうとお互い読みづらく、開発速度も落ちてしまいます。そこで、お互いに読みやすいコードを書くためのルールを定めます。

### ディレクトリ構成

以下に大まかなルールを示します。具体例は実際のリポジトリを参考にして下さい

```
/--components # コンポーネントを定義するファイルを入れる
 | |-[種類] # キャメルケースで1文字目大文字
 | | |-[用途など].tsx # ケバブケース全て小文字
 | |-[名前].tsx # キャメルケースで1文字目大文字 分類するまでもないもの
 |-pages
 | | ... # 使用しているフレームワーク、Next.jsで厳密に定められている。リンク参照
 |-public
 | | ... # 画像などの静的ファイルを置く場所
 |-scripts # コンポーネントを定義に関わらないJavaScript/TypeScriptはここ
 | |-[種類] # ケバブケースで全て小文字
 | | |-[用途など].tsx # ケバブケースで全て小文字
 | |-[名前].tsx # ケバブケースで全て小文字 分類するまでもないもの
 |-[ファイル名]　# コンフィグファイルなど
```

- `pages`ディレクトリのルールは[このページ][next pages]のルールを厳守
- `public`ディレクトリのNext.jsでの扱われ方は、[このページを][next public]を参照
- できるだけ種類ごとの分類をして、ファイルが探しやすくなるように心がけましょう。一方で一つしか分類されないようであれば、分けない。
- キャメルケースやケバブケースなどの指定を遵守

[next pages]: https://nextjs.org/docs/routing/introduction

[next public]: https://nextjs.org/docs/basic-features/static-file-serving

### JavaScript/TypeScriptの書き方
- **セミコロンは書け**
- インデントは全て空白2文字で行う。
- 読みやすさのため、一行120字を超えないよう努力する。（義務ではない

#### 変数宣言

- 常に`const`を用いて宣言する。`let`を使いたくなったら、関数に切り出して解決できないかなどを検討する。
- `var`は使ってはならない。
- 命名はキャメルケースで行い、1文字目を小文字にする。

#### 関数宣言

- 命名はキャメルケースで行い、1文字目を小文字にする。但し、コンポーネントの場合は1文字目を大文字にする。
- `function 名前() {}`の構文は使わず、`const 名前 = function() {};`または`const 名前 = () => {};`と書く。
- アロー関数(`() => {}`)を用いる際、省略できる括弧は省略しても良い

#### クラス宣言

- 命名はキャメルケースで行い、1文字目を大文字にする。
- TypeScriptとの親和性が低いため、極力使わない。

#### 制御構文
- `if`, `for`, `while`を使う際、一行で収まる場合は波括弧を省略してもいいが、そうでない場合は省略してはならない。
- `goto`は使用しない。

その他、より厳しい規制が必要になったときには、ESLintを導入するかもしれません。

### HTMLの書き方
- インデントは全て空白2文字で行う
- 読みやすさのため、一行120字を超えないよう努力する。（義務ではない）
- タグをコードの複数行に渡って使用する際は、開きタグと綴じタグを原則同じインデントの深さにする。

### CSSの当て方
- インデントは全て空白2文字で行う
- 特定のデザインを実現するために、複数の異なるコンポーネントに別々にCSSを書いてはならない。[参考][CSS SRP]
- コンポーネントの外部の状況に依存せず、常に同じ見た目になるように作るべきであり、また使う側もそう作られていることを前提に使うべきである。[参考][CSS capsule]

[CSS SRP]: https://blog.uhy.ooo/entry/2020-10-15/react-paired-css/
[CSS capsule]: https://blog.uhy.ooo/entry/2020-12-19/css-component-design/
