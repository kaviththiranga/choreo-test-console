import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { useEffect } from 'react';
import { useRouter } from 'next/router';


import Head from 'next/head';


export default function App({ Component, pageProps }) {


  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      if (router.pathname === '/cybertruck') {
        document.body.classList.add('bodyCyberBackground');
      } else {
        document.body.classList.remove('bodyCyberBackground');
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    handleRouteChange();

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);


  return <Component {...pageProps} />
}





// function App1({ Component, pageProps }) {
//   return (
//     <>
//       <Head>
//         <title>TEST</title>
//         {/* Add a class to the body tag */}
//         <body className="cBodyBg">
      
//           <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         </body>
//       </Head>
//       <Component {...pageProps} />
//     </>
//   );
// }

// export default App1;