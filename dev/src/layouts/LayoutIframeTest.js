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
import Coockie from '../components/common/tracking/coockie';

import Tracking from '../components/common/tracking/tracking';
import { Cookie } from 'next/font/google';

// import Meta from '../components/common/meta/meta';





export default function Layout({ children }) {

  const Meta = dynamic(() => import('../components/common/meta/meta'), { ssr: false });

  useEffect(() => {
    AOS.init();
  }, []);


  useEffect(() => {
    $(document).ready(function () {
      $('.cCat_Security').hover(
        function () {
        
          $('.cCat_Security').addClass('cHiglightBox');
        },
        function () {
      
          $('.cCat_Security').removeClass('cHiglightBox');
        }
      );
    });
      
  }, []); 


  useEffect(() => {
    $(document).ready(function () {
      $('.cCat_host').hover(
        function () {
        
          $('.cCat_host').addClass('cHiglightBox');
        },
        function () {
      
          $('.cCat_host').removeClass('cHiglightBox');
        }
      );
    });
      
  }, []); 

  useEffect(() => {
    $(document).ready(function () {
      $('.cCat_Deployment').hover(
        function () {
        
          $('.cCat_Deployment').addClass('cHiglightBox');
        },
        function () {
      
          $('.cCat_Deployment').removeClass('cHiglightBox');
        }
      );
    });





    $(window).scroll(function() {


      if ($(this).scrollTop() > 1000) {
        $('.cCyberS').addClass('cStickyPanel');

  } else {

        $('.cCyberS').removeClass('cStickyPanel');



      }
    });





      
  }, []); 




  useEffect(() => {
 
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.setAttributeNode(d.createAttribute('data-ot-ignore'));j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5L3RNN5M');
      
  }, []); 



  // const TopNav = dynamic(() => import('../components/common/top-nav/TopNav'), { ssr: false });
  // const Meta = dynamic(() => import('../components/common/meta/Meta'), { ssr: false });

  return (
    <>
      <Head>



        
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     
     
        <title>Choreo</title>
        <link href="https://wso2.cachefly.net/wso2/sites/all/2023/css/aos.css" rel="stylesheet"/>
        
        <script src="https://wso2.cachefly.net/wso2/sites/all/2023/css/aos.js"></script>
        <script src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/cybertruck/jquery-3.7.1.min.js"></script>
     
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





<meta property="og:type"               content="article" />
<meta property="og:title"              content="You Code, We Orchestrate" />
<meta property="og:description"        content="Simplify tedious, time-consuming workflows, so you can focus on writing efficient code. Choreo will build, deploy, test, run, and monitor your apps, helping you get them to production faster."/>
<meta property="og:image"              content="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/SM-Banner-YCWO.png" />


<meta name="twitter:card" content="summary" />
<meta name="twitter:site" content="@wso2"/>
<meta name="twitter:creator" content="@wso2"/>
<meta name="twitter:title" content="You Code, We Orchestrate"/>
<meta name="twitter:description" content=""/>
<meta name="twitter:image" content="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/SM-Banner-YCWO.png"/> 
<meta name="twitter:text:description" content="Simplify tedious, time-consuming workflows, so you can focus on writing efficient code. Choreo will build, deploy, test, run, and monitor your apps, helping you get them to production faster."/> 
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:image:width" content="610"/>


<meta property='og:title' content="You Code, We Orchestrate"/>
<meta property='og:image' content="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/SM-Banner-YCWO.png"/>
<meta property='og:description' content="Simplify tedious, time-consuming workflows, so you can focus on writing efficient code. Choreo will build, deploy, test, run, and monitor your apps, helping you get them to production faster."/>


<meta name="googlebot" content="noindex"/>
<meta name="googlebot-news" content="nosnippet"></meta>

<tracking-without-coockie/>




        
      </Head>

      {/* <Meta/> */}
   
      <Stack gap={0} className='main-wrapper home'>

        <TopNav />
       
    

            {children}
       

      

      </Stack>




      <Footer />

      <Coockie />


    </>
  );


}




