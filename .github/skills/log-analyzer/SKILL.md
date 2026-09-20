--- 
name: log-analyzer
description: 指定されたAPログおよびLBログを分析し、エラー傾向と原因を特定してレポートを作成。複数のログファイル（拡張子 .log）やログの生データを指定されたとき、この Skill を利用。
---

# Log Analyzer Skill

この Skill は、APログおよびLBログを分析し、
障害の傾向、原因、対策をレポートとしてまとめます。

## Input

- APログファイル(例: app.log)
- LBログファイル(例: lb-access.log)

## 実行手順

1. 指定されたログを分析
  - [分析手順](./references/analysis-guide.md) を参照
2. 原因を仮説立て
  - [よくあるエラー](./references/error-patterns.md) を参照
  - [システム構成](./references/architecture.md) を参照
3. 対策を検討
    対策は以下の2段階で考える。
    - 暫定対策: すぐに実施可能な対策
    - 恒久対策: 根本的な解決を目指す対策
4. レポート作成

## Output

テキスト形式(md形式)で出力。

- 障害の概要 (日時、影響範囲)
- 原因（仮説）
- 対策（暫定・恒久）