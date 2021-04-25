import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <>
            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=UA-100339136-1"
            ></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'UA-100339136-1');
              `,
              }}
            ></script>
          </>
        </Head>
        <body className="bg-white dark:bg-gray-em300 transition duration-500">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
