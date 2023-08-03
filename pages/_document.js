import Document, { Html, Head, Main, NextScript } from "next/document";

const MyDocument = () => {
  return (
    <Html>
      <Head>
        {/* Coloque o link da fonte copiado do Google Fonts abaixo */}
        <link
          href="https://fonts.googleapis.com/css2?family=Epilogue:wght@100&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
