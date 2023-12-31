import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/logo.png" />
        <title>CarDeals</title>
      </Head>
      <body className="dark:bg-[#23272f] antialiased bg-[#f8f9fa]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
