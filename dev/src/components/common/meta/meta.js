import * as React from 'react';
import Head from 'next/head';

const meta = () => {
  console.log('origin',window.location.origin);
  const [origin, setOrigin] = React.useState('');

  React.useEffect(() => {
 
    if (typeof window !== 'undefined') {
      console.log('set origin',window.location.origin);
      setOrigin(window.location.origin);
    }
  }, []);
  return (
      <Head>
      <meta name="robots" content={(origin === "https://choreo.dev") ? "index" : "noindex" }/>
      <meta name="googlebot" content={(origin === "https://choreo.dev") ? "index" : "noindex" }></meta>
      <meta name="description" content="With Choreo, you can connect your Git repos, deploy instantly across any environment, ship securely by default, and monitor everything in real time—with AI guiding you every step of the way."></meta>
      </Head>
  );
};

export default meta;
