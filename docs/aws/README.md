# PR

# Works

## 広告レポート集計システムの開発

約 100 万/日のレポートデータを 2 ヶ月分、 13 ヶ月分集計するシステム  
弊社が扱っているメディア（Google や Twitter など）の広告実績データを 1 時間ごとに S3 に出力してもらいそれを集計する

私は最初から設計や構築に関わってはおらず、 運用フェーズでメンテナンス等を行った  
期間は 2 ヶ月程

EMR と Apache Spark を使用

## Digdag サーバを HA 構成に再構築

広告レポート集計システムのワークフローエンジンに Digdag を使用していた  
高可用性を維持するため Digdag を HA 構成に再構築した

Digdag サーバがインストールされた AMI を使って起動テンプレートを作成し、AutoScalingGroup に設定  
Digdag は REST API Server 用 と Executor 用とでサーバを分離

詳しくは以下の記事にまとめた  
[AutoScalingGroup を使って Digdag を冗長構成にした](https://qiita.com/kurosame/items/5684825023ef75913a5c)

## Hubot コンテナの構築

広告レポート集計システムは定期実行とスポット実行機能を備えており、スポット実行を非エンジニアの人が行えるように Hubot を導入した

ECS と Fargate を使用

詳しくは以下の記事にまとめた  
[Amazon ECS を使った簡単なコンテナアプリの構築](https://qiita.com/kurosame/items/fc2dabea69eee35473f8)

# Using Ecosystem

- Fargate
- ECS
- Lambda
- EMR

![Apache Spark](/apache-spark.png 'Apache Spark')
![Digdag](/digdag.png 'Digdag')
![Hubot](/hubot.png 'Hubot')
