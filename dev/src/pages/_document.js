import { Html, Head, Main, NextScript } from 'next/document'
import { global } from 'styled-jsx/css'

export default function Document() {
  console.log("xxxx",global.location)
  return (
    <Html lang="en">
      <Head>

      {/* <meta name="robots" content={(global.location.origin === "https://choreo.dev/") ? "index" : "noindex" }/>
      <meta name="googlebot" content={(global.location.origin === "https://choreo.dev/") ? "index" : "noindex" }></meta> */}

      </Head>
      {/* <body className={global.location.path === "cybertruck" ? "cBodyBg" : "" }> */}
 
      <body className="cBodyBg">

{/*  Google Tag Manager (noscript)  */}


        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5L3RNN5M"
height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
        {/*  End Google Tag Manager (noscript)  */}

        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
