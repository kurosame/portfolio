# PR

# Works

## Digdag サーバを HA 構成に再構築

広告レポート集計システムのワークフローエンジンに Digdag を使用していた  
高可用性を維持するため Digdag を HA 構成に再構築した

Digdag サーバがインストールされた AMI を使って起動テンプレートを作成し、AutoScalingGroup に設定  
Digdag は REST API Server 用 と Executor 用とでサーバを分離

詳しくは以下の記事にまとめた  
[AutoScalingGroup を使って Digdag を冗長構成にした](https://qiita.com/kurosame/items/5684825023ef75913a5c)

# Using Ecosystem

![AWS‎](/aws.png 'AWS‎')
