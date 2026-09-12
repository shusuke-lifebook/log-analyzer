# ログ仕様

## APログ

### フォーマット

timestamp loglevel service traceId message

例：
2026-03-20T10:25:01Z ERROR web-service trace006 Request failed status=502 latency_ms=1918

### ログレベル:

- ERROR: 処理失敗(ユーザー影響あり)
- WARN: リトライ成功(遅延あり)
- INFO: 正常処理

### traceId:

1つのリクエストを追跡するためのID
LBログの traceId と一致

---

## LBログ (Apache形式)

### フォーマット

IP - - [timestamp] traceId "METHOD PATH STATUS"

例:
198.51.100.150 - - [20/Mar/2026:10:15:01 +0000] trace004 "POST /api/checkout 502"

### traceId


1つのリクエストを追跡するためのID
APログの traceId と一致
