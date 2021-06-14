# 第70回桐朋祭公式ウェブサイト

2021年6月に桐朋中学校及び高等学校に於いて開催される、第70回桐朋祭の公式ウェブサイトの開発用リポジトリです。

## 実行方法

### 開発時
```shell
yarn install
yarn dev
```

### 実行時
```shell
yarn install
yarn build
yarn start
```

Dockerを用いる場合
```shell
docker build -t tohofes-webserver-2021 --build-arg MODE=production .
docker run --name tohofes-webserver-2021 -p 8080:8080 tohofes-webserver-2021
```

## 開発への協力

[CONTRIBUTING.md](CONTRIBUTING.md)をお読み下さい。
