## Getting Started

　GitHubをパソコンで開くと、緑色の「コード」って書いてある部分があると思う。
　その部分の上側にに「Local」と「Codespace」のCodespaceを開いてみてくれ。
　するとVSCodeに似た画面が現れると思うから、下の方のターミナルに、

```bash
docker-compose up --build
```

　とコマンドを実行してみて。するとしばらくすると、next.jsがコンパイルされて、ポートに開くためのURLが現れたりする。
　因みにポートURLを共有しても見られない場合は、「ポートの表示範囲」をprivateからpublicにし忘れている。次を参考に設定を試みると良いよ(https://docs.github.com/ja/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace#%E3%83%9D%E3%83%BC%E3%83%88%E3%81%AE%E5%85%B1%E6%9C%89)。
by.440