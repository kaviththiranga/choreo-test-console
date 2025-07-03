import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



// import ExampleCarouselImage from 'components/ExampleCarouselImage';

import Layout from '../layouts/LayoutIframeTest';
// import slider from '../components/slider';

import Slider from '../components/common/slider/slider';
import Table from 'react-bootstrap/Table';

import { useEffect, useState } from 'react';


import Script from 'next/script';
import { useRouter } from 'next/router';

export default function Home() {


  const router = useRouter();
  const { query } = router;
  let baseIframeUrl = "";

  const appendQueryParameters = (originalUrl, queryParams) => {
    const url = new URL(originalUrl);

    Object.keys(queryParams).forEach((key) => {
      url.searchParams.append(key, queryParams[key]);
    });

    return url.toString();
  };

  if (Object.keys(query).length > 0) {

    const [isCybertruckCodeChallenge, setIsCybertruckCodeChallenge] = useState(false);

    useEffect(() => {
      const queryParams = new URLSearchParams(window.location.search);
      const utmSource = queryParams.get('utm_source');
      const ref = queryParams.get('ref');
      setIsCybertruckCodeChallenge(ref === 'CybertruckCodeChallenge');


    }, []);

    if (isCybertruckCodeChallenge) {

      const contestDestinationUrl = "https://console.choreo.dev/signup_embedded_contest";
      // const contestDestinationUrl = "https://console.st.choreo.dev/signup_embedded_contest";
      baseIframeUrl = appendQueryParameters(contestDestinationUrl, query);

    } else {

      const baseDestinationUrl = "https://console.choreo.dev/signup_embedded";
      // const baseDestinationUrl = "https://console.st.choreo.dev/signup_embedded";
      baseIframeUrl = appendQueryParameters(baseDestinationUrl, query);
    }


  } else {

    baseIframeUrl = "https://console.choreo.dev/signup_embedded?utm_source=direct&utm_medium=website&utm_campaign=direct";
    // baseIframeUrl = "https://console.st.choreo.dev/signup_embedded?utm_source=direct&utm_medium=website&utm_campaign=direct";
    


  }









  return (
    <Layout>
      


     
     



      <div className="cSection cWhiteBG">
        <Container>
          <Row>
            <Col sm={6} md={12}>
             
         <iframe id="Calculator" src="https://wso2.com/choreo/pricing-calculator/" width="100%" type="text/html" frameBorder="0" allowTransparency="true" ></iframe>



            </Col>
         
         
          </Row>
        </Container>
      </div>




    
      


      



      














    </Layout>
  )
}
