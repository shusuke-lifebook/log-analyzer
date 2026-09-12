const fs = require('fs');
const path = require('path');

// コマンドライン引数からログファイルのパスを取得
const args = process.argv.slice(2);
if (args.length === 0) {
    console.error('Usage: node analyze-lblog.js <log-file-path>');
    process.exit(1);
}

// ログファイルのパスを取得
const logFile = args[0];

try {
    // ログファイルを読み込む
    const content = fs.readFileSync(logFile, 'utf-8');
    const lines = content.split('\n');

    // WARN や Errorを含む行をフィルタリング
    const filtered = lines.filter(line => line.includes('502'));

    // フィルタリングした行を表示
    console.log("=== Filtered Logs ===");
    filtered.forEach(line => {
        if (line.trim()) {
            console.log(line);
        }
    });

} catch (error) {
    console.error(`Error reading file: ${error.message}`);
    process.exit(1);
}