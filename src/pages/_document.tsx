import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return(
        <Html>
            <Head>
                <link rel="shortcut icon" href="/favicon.png" type="image/x-icon"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;500;700&display=swap" rel="stylesheet" />
            </Head>
            <body>
              <Main  />
              <NextScript />
            </body>
        </Html>
    );
  }
}