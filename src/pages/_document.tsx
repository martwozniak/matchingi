import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <body className="max-h-screen scrollbar overflow-y-hidden scrollbar-thin scrollbar-track-gray-900 scrollbar-thumb-gray-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
