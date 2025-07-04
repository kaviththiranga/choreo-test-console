import { Html, Head, Main, NextScript } from 'next/document'
import { global } from 'styled-jsx/css'

export default function Document() {
  console.log("xxxx",global.location)
  return (
    <Html lang="en">
      <Head>
        <link rel="prefetch" href="https://db8b0833-87ae-4c98-8ec5-e47b557c1250.e1-us-east-azure.choreoapps.dev/region-select.html" as="document" />
        <link rel="prefetch" href="https://7325af9d-faef-45c9-861a-035bfde3b6ca.e1-us-east-azure.choreoapps.dev/region-select.html" as="document" />


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
