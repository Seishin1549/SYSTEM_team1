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
=======
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.