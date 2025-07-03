/**
 * Copyright (c) 2022, WSO2 LLC (http://www.wso2.com) All Rights Reserved.
 *
 * WSO2 LLC licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Row, Stack } from 'react-bootstrap';
import { useEffect } from 'react';





import TopNav from '../components/common/topnav/topnav';


import Footer from '../components/common/footer/footer';

import Tracking from '../components/common/tracking/tracking';


// import styles from '../styles/LayoutChallange.module.css'; // Import your CSS module



export default function Layout({ children }) {


  const Meta = dynamic(() => import('../components/common/meta/meta'), { ssr: false });


  useEffect(() => {
    AOS.init();








  }, []);






  useEffect(() => {
 
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.setAttributeNode(d.createAttribute('data-ot-ignore'));j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5L3RNN5M');




    $('.dropdown').hover(function(){
      $(this).find('.DropPannel').stop(true, true).slideDown();
  }, function(){
      $(this).find('.DropPannel').stop(true, true).slideUp();
  });



      
  }, []); 



  return (
    <>
      <Head>

      {/* <meta name="robots" content="noindex,nofollow" /> */}

        
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <meta name="robots" content="noindex"/> */}
        <title>Win a Tesla Cybertruck!</title>
        <link href="https://wso2.cachefly.net/wso2/sites/all/2023/css/aos.css " rel="stylesheet" media="(min-width: 768px)"/>
        
        <script src="https://wso2.cachefly.net/wso2/sites/all/2023/css/aos.js" media="(min-width: 768px)"></script>
        <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
        <link href="/css/cybertruck.css" rel="stylesheet"/>
        
     
        {/* <script src="choreodev.js"></script> */}


{/* Google Tag Manager */}
<script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.setAttributeNode(d.createAttribute('data-ot-ignore'));j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5L3RNN5M');`
          }}
        />
        {/* End Google Tag Manager */}




<link rel="canonical" href="https://choreo.dev/br/cybertruck" />
<link rel="image_src" href="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/cybertruck/wso2-cybertruck-home-page-banner-portuguese.png" />



<meta property="og:type"               content="article" />
<meta property="og:title"              content="DESAFIO DO CÓDIGO WSO2 GANHE UM CYBERTRUCK DA TESLA!!" />
<meta property="og:description"        content="Pronto para o desafio extremo de codificação? Crie um app no Choreo e tenha a chance de ganhar um Tesla Cybertruck ou 100 mil dólares!"/>
<meta property="og:image"              content="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/cybertruck/wso2-cybertruck-home-page-banner-portuguese.png" />


<meta name="twitter:card" content="summary" />
<meta name="twitter:site" content="@wso2"/>
<meta name="twitter:creator" content="@wso2"/>
<meta name="twitter:title" content="DESAFIO DO CÓDIGO WSO2 GANHE UM CYBERTRUCK DA TESLA!!"/>
<meta name="twitter:description" content=""/>
<meta name="twitter:image" content="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/cybertruck/wso2-cybertruck-home-page-banner-portuguese.png"/> 
<meta name="twitter:text:description" content="Pronto para o desafio extremo de codificação? Crie um app no Choreo e tenha a chance de ganhar um Tesla Cybertruck ou 100 mil dólares!"/> 
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:image:width" content="610"/>


<meta property='og:title' content="DESAFIO DO CÓDIGO WSO2 GANHE UM CYBERTRUCK DA TESLA!!"/>
<meta property='og:image' content="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/cybertruck/wso2-cybertruck-home-page-banner-portuguese.png"/>
<meta property='og:description' content="Pronto para o desafio extremo de codificação? Crie um app no Choreo e tenha a chance de ganhar um Tesla Cybertruck ou 100 mil dólares!"/>


<Tracking/>

        
      </Head>

      <Meta/>
   
      <Stack gap={0} className='main-wrapper home'>

        <TopNav />
       
    

            {children}
       

      

      </Stack>




      <Footer />


    </>
  );


}




