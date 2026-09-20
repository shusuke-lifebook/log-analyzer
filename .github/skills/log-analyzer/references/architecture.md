# システム構成

本システムは3層構成です。

- Web: Loadbalancer
- AP: React, Node.js
- DB: PostgreSQL
- 外部サービス: 決済API, 生成API API

## 通信経路
```
User → LB　→ AP → DB
            ↓
      決済API, 生成AI API (外部API)
```

LBにはWAF(Web Applicaiton Firewall)機能がある。
APから外部へ出る通信（APIへのアクセス）ではFirewallを通過する。
