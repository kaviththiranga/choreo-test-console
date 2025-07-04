import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import Layout from '../layouts/LayoutHome';
// import slider from '../components/slider';
import Slider from '../components/common/slider/slider';
import Table from 'react-bootstrap/Table';
import { useEffect, useState, useRef } from 'react';
import Script from 'next/script';
import { Modal } from 'react-bootstrap';
import { useRouter } from 'next/router';
import Image from 'next/image';
export default function Home() {

   const [showModal, setShowModal] = useState(false);
   const [selectedVideoId, setSelectedVideoId] = useState(null);
   // Array of video objects with ID and title
   const videos = [
      {
         id: 'hte82nUVOZ4',
         title: 'University of Edinburgh: WSO2 Customer Spotlight',
         // width: 600,
         // height: 600,
         // duration: '3:45'
         thumbnail: 'https://wso2.cachefly.net/wso2/sites/all/image_resources/university-of-edinburgh-wso2-customer-spotlight.webp',
      },
      {
         id: 'zdJU606084w',
         title: 'Linqura: WSO2 Customer Spotlight',
         // width: 600,
         // height: 600,
         // duration: '4:15'
         thumbnail: 'https://wso2.cachefly.net/wso2/sites/all/image_resources/linqura-wso2-customer-spotlight.webp',
      },
   ];
   const videos2 = [
      {
         id: '_dxku1x96Yw',
         title: 'Mastering Choreo: A Comprehensive In-Depth Demo',
         // width: 600,
         // height: 600,
         // duration: '3:45'
         start: 301
      },
   ];
   const handleClose = () => {
      setShowModal(false);
      setSelectedVideoId(null);
   };
   const handleShow = (videoId) => {
      setSelectedVideoId(videoId);
      setShowModal(true);
   };
   const [activeTab, setActiveTab] = useState('tab1');
   const [activeTab2, setactiveTab2] = useState('cComp2');
   const router = useRouter();
   const { query } = router;
   const appendQueryParameters = (originalUrl, queryParams) => {
      const url = new URL(originalUrl);
      Object.keys(queryParams).forEach((key) => {
         url.searchParams.append(key, queryParams[key]);
      });
      return url.toString();
   };

   // REGION SELECTION LOGIC START
   const REGIONS = {
      us: 'https://db8b0833-87ae-4c98-8ec5-e47b557c1250.e1-us-east-azure.choreoapps.dev',
      eu: 'https://7325af9d-faef-45c9-861a-035bfde3b6ca.e1-us-east-azure.choreoapps.dev',
    };
   const REGION_SELECT_PATH = '/region-select.html';
   const SIGNUP_PATH = '/signup_embedded';

   const [regionChecked, setRegionChecked] = useState(false);
   const [selectedRegion, setSelectedRegion] = useState(null);
   const [iframeLoaded, setIframeLoaded] = useState({ us: false, eu: false });
   const [recentOrgs, setRecentOrgs] = useState({ us: undefined, eu: undefined });
   const [usIframeNode, setUsIframeNode] = useState(null);
   const [euIframeNode, setEuIframeNode] = useState(null);

   // Compose the region-select.html URLs
   const usRegionSelectUrl = `${REGIONS.us}${REGION_SELECT_PATH}`;
   const euRegionSelectUrl = `${REGIONS.eu}${REGION_SELECT_PATH}`;

   // Compose the signup_embedded URL for the selected region
   let mainSignupUrl = null;
   if (selectedRegion) {
      if (Object.keys(query).length > 0) {
         mainSignupUrl = appendQueryParameters(`${REGIONS[selectedRegion]}${SIGNUP_PATH}`, query);
      } else {
         mainSignupUrl = `${REGIONS[selectedRegion]}${SIGNUP_PATH}?utm_source=direct&utm_medium=website&utm_campaign=direct`;
      }
   }

   // 1. Set up the message listener as early as possible (before iframes are rendered)
   useEffect(() => {
     function handleMessage(event) {
       if (
         (
           (event.origin === REGIONS.us || event.origin === REGIONS.eu) &&
           typeof event.data.recentOrg !== 'undefined'
         )
       ) {
         console.log('msg event from region select iframes', event);

         const region = event.origin === REGIONS.us ? 'us' : 'eu';
         setRecentOrgs(prev => ({ ...prev, [region]: event.data.recentOrg }));
       }
     }
     window.addEventListener('message', handleMessage);
     return () => window.removeEventListener('message', handleMessage);
   }, []); // Only run once

   // 2. Retry sending the message until you get a response or timeout
   useEffect(() => {
     let usTries = 0, euTries = 0;
     let usInterval, euInterval;
     if (iframeLoaded.us && usIframeNode && recentOrgs.us === undefined) {
       usInterval = setInterval(() => {
         if (usTries++ > 10) return clearInterval(usInterval);
         usIframeNode.contentWindow.postMessage({ type: 'checkRecentOrg' }, REGIONS.us);
       }, 500);
     }
     if (iframeLoaded.eu && euIframeNode && recentOrgs.eu === undefined) {
       euInterval = setInterval(() => {
         if (euTries++ > 10) return clearInterval(euInterval);
         euIframeNode.contentWindow.postMessage({ type: 'checkRecentOrg' }, REGIONS.eu);
       }, 500);
     }
     return () => {
       clearInterval(usInterval);
       clearInterval(euInterval);
     };
   }, [iframeLoaded.us, iframeLoaded.eu, recentOrgs.us, recentOrgs.eu]);

   useEffect(() => {
      if (
         recentOrgs.us !== undefined &&
         recentOrgs.eu !== undefined &&
         !regionChecked
      ) {
         let chosen = 'us';
         if (recentOrgs.us != null && recentOrgs.eu == null) chosen = 'us';
         else if (recentOrgs.us == null && recentOrgs.eu != null) chosen = 'eu';
         else if (recentOrgs.us != null && recentOrgs.eu != null) chosen = 'us'; // both non-empty, default to us
         else if (recentOrgs.us == null && recentOrgs.eu == null) chosen = 'us'; // both empty, default to us
         console.log(`[Region Detection] Selected region: ${chosen}`);
         setSelectedRegion(chosen);
         setRegionChecked(true);
      }
   }, [recentOrgs, regionChecked]);

   // Timeout for region detection
   useEffect(() => {
      const timeout = setTimeout(() => {
         setRegionChecked(true);
         setSelectedRegion('us');
         console.log('region detection timeout');
      }, 15000);
      return () => clearTimeout(timeout);
   }, []);

return (
        <Layout>
    {/* Hidden region-select iframes for US and EU */}
    <iframe
      ref={setUsIframeNode}
      src={usRegionSelectUrl}
      loading="eager"
      style={{ position: 'absolute' }}
      onLoad={() => {
        console.log('us iframe loaded', usIframeNode);
        setIframeLoaded(prev => ({ ...prev, us: true }));
      }}
      title="US Region Select"
    />
    <iframe
      ref={setEuIframeNode}
      src={euRegionSelectUrl}
      loading="eager"
      style={{ position: 'absolute' }}
      onLoad={() => {
        console.log('eu iframe loaded', euIframeNode);
        setIframeLoaded(prev => ({ ...prev, eu: true }));
      }}
      title="EU Region Select"
    />
    {/* Main signup iframe, only rendered after region is determined */}
    <div className="cIntro cGrayBackground">
        <Container>
            <Row>
                <Col sm={12} md={7}>
                <span className='cIntroSpan'>AI-NATIVE INTERNAL DEVELOPER PLATFORM AS A SERVICE </span>
                <h1>Develop. Deploy. <br/>Secure. Observe.<span> All from One Platform.</span></h1>
                <h2>Focus on building features—not managing infrastructure.</h2>
                <p>With Choreo, you can connect your Git repos, deploy instantly across any environment, ship securely by default, and monitor everything in real time—with AI guiding you every step of the way.
                </p>
                <p>Simplify your developer journey from idea to production, with Choreo—your unified, AI-native internal developer platform.
                </p>
                <a className="cChoreoButton cIntroButton" href="https://wso2.com/contact/?ref=choreo" target="_blank" rel="noopener" aria-label="Contact Us">Contact Us</a>
                </Col>
                <Col sm={12} md={1}>
                &nbsp;</Col>
                <Col sm={12} md={4} className='cIframe'>
                {selectedRegion && (
                  <iframe
                    src={mainSignupUrl}
                    title="Signup IFrame"
                    className="optanon-category-C0001"
                  />
                )}
                </Col>
            </Row>
        </Container>
    </div>

    <div className="cSection cWhiteBG cTransparentBg">
        <Container>
            <Row>
                <Col sm={6} md={12}>
                <h2 className="cLessMargin">What Is Choreo Internal Developer Platform?</h2>

                </Col>
                <Col sm={12} md={12}>

                <video
                    id="myVideo3"
                    autoPlay
                    muted={true} // Set the muted attribute based on the state
                    // loop
                    className="cVideoBlade"
                    playsInline
                    >
                    <source
                        src="https://wso2.cachefly.net/wso2/sites/all/image_resources/developer-workflow-with-choreo-06-aug.mp4"
                        type="video/mp4"
                        />
                </video>

                </Col>
            </Row>
        </Container>
    </div>

    <div className="cSection cWhiteBG cTransparentBg cPaddingBottomZero">
        <Container>
            <Row>
                <Col sm={12} md={12}>
                <h2>Unlock the Full Potential of Your Cloud With Choreo IDP
                </h2>
                </Col>
                <Col sm={12} md={1}>
                &nbsp;</Col>
                <Col sm={12} md={10}>
                <ul className="nav nav-pills mb-6 d-flex justify-content-center list-unstyled" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button
                            className={`nav-link ${activeTab === 'tab1' ? 'active' : ''}`}
                            onClick={() => setActiveTab('tab1')}
                            role="tab"
                            aria-selected={activeTab === 'tab1'}
                            >
                            Development
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button
                            className={`nav-link ${activeTab === 'tab2' ? 'active' : ''}`}
                            onClick={() => setActiveTab('tab2')}
                            role="tab"
                            aria-selected={activeTab === 'tab2'}
                            >
                            Deployment

                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button
                            className={`nav-link ${activeTab === 'tab3' ? 'active' : ''}`}
                            onClick={() => setActiveTab('tab3')}
                            role="tab"
                            aria-selected={activeTab === 'tab3'}
                            >
                            Security
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button
                            className={`nav-link ${activeTab === 'tab4' ? 'active' : ''}`}
                            onClick={() => setActiveTab('tab4')}
                            role="tab"
                            aria-selected={activeTab === 'tab4'}
                            >
                            Observability

                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button
                            className={`nav-link ${activeTab === 'tab5' ? 'active' : ''}`}
                            onClick={() => setActiveTab('tab5')}
                            role="tab"
                            aria-selected={activeTab === 'tab5'}
                            >
                            Management

                        </button>
                    </li>
                </ul>
                </Col>
                <Col sm={12} md={1}>
                &nbsp;</Col>
                <Col sm={12} md={12}>
                <div className="tab-content">
                    <div className={`tab-pane fade ${activeTab === 'tab1' ? 'show active' : ''}`} role="tabpanel">
                        <Row>
                            <Col sm={12} md={4} className="cPannelText">
                            <h3>Modern development with built-in tools developers love</h3>
                            <ul className='cListItems'>
                                <li>Code in the language you love—build web apps, APIs, services, event-driven workflows, and background jobs with ease.</li>
                                <li>Use built-in support for VS Code for a smooth, familiar developer experience.</li>
                                <li>Link your GitHub, GitLab, or Bitbucket repo and sync effortlessly.</li>
                                <li>Discover and reuse internal components with Choreo's secure internal marketplace.</li>

                            </ul>
                            </Col>
                            <Col sm={12} md={8} className="cPannelImage">
                            {/* <img className='cTabImage' alt='Modern development with built-in tools developers love' src="https://wso2.cachefly.net/wso2/sites/all/image_resources/choreodev2025/choreo-dev-Development3.webp"/> */}
                            <Image
      src="https://wso2.cachefly.net/wso2/sites/all/image_resources/choreodev2025/choreo-dev-Development3.webp" 
      alt="Modern development with built-in tools developers love"
      width={726}
      height={704}
       className="cTabImage"
    />

{/* <img className='cTabImage' alt='Modern development with built-in tools developers love' src="../img/sq.webp"/> */}
                            
                            </Col>
                        </Row>
                    </div>
                    <div className={`tab-pane fade ${activeTab === 'tab2' ? 'show active' : ''}`} role="tabpanel">
                        <Row>
                            <Col sm={12} md={4} className="cPannelText">
                            <h3>From dev to prod without the headaches</h3>
                            <ul className='cListItems'>
                                <li>Deploy across multiple environments—from dev to staging to production.</li>
                                <li>Run workloads in any cloud with built-in multi-cloud flexibility.</li>
                                <li>Automatically scale with Kubernetes-native infrastructure that's built for high availability and performance.</li>
                            </ul>
                            </Col>
                            <Col sm={12} md={8} className="cPannelImage">
                            {/* <img className='cTabImage' alt='From dev to prod without the headaches' src="https://wso2.cachefly.net/wso2/sites/all/image_resources/choreodev2025/choreo-dev-Deployment3.webp"/> */}
                            <Image
      src="https://wso2.cachefly.net/wso2/sites/all/image_resources/choreodev2025/choreo-dev-Deployment3.webp" 
      alt="From dev to prod without the headaches"
      width={846}
      height={704}
       className="cTabImage"
    />
                            </Col>
                        </Row>
                    </div>
                    <div className={`tab-pane fade ${activeTab === 'tab3' ? 'show active' : ''}`} role="tabpanel">
                        <Row>
                            <Col sm={12} md={4} className="cPannelText">
                            <h3>Security built-in, not bolted-on</h3>
                            <ul className='cListItems'>
                                <li> Enforce authentication and fine-grained authorization out of the box.</li>
                                <li>Manage secrets and configurations securely.</li>
                                <li>Adopt zero-trust networking powered by Cilium.</li>
                                <li>Stay compliant at every stage of the software delivery lifecycle—without slowing down development.</li>
                            </ul>
                            </Col>
                            <Col sm={12} md={8} className="cPannelImage">
                            {/* <img className='cTabImage' alt='Security built-in, not bolted-on' src="https://wso2.cachefly.net/wso2/sites/all/image_resources/choreodev2025/choreo-dev-Security3.png"/> */}
                            <Image
      src="https://wso2.cachefly.net/wso2/sites/all/image_resources/choreodev2025/choreo-dev-Security3.webp" 
      alt="Security built-in, not bolted-on"
      width={846}
      height={704}
      className="cTabImage"
    />
                            </Col>
                        </Row>
                    </div>
                    <div className={`tab-pane fade ${activeTab === 'tab4' ? 'show active' : ''}`} role="tabpanel">
                        <Row>
                            <Col sm={12} md={4} className="cPannelText">
                            <h3>Know what's happening before it becomes a problem</h3>
                            <ul className='cListItems'>
                                <li>Get end-to-end visibility into your apps with real-time monitoring, logging, and distributed tracing—built right in.</li>
                                <li>Detect and resolve issues faster with smart alerts and intuitive troubleshooting tools.</li>
                                <li>Measure and improve delivery performance using DORA metrics, in-depth release insights, and usage analytics.</li>
                            </ul>
                            </Col>
                            <Col sm={12} md={8} className="cPannelImage">
                            {/* <img className='cTabImage' alt='Know what's happening before it becomes a problem' src="https://wso2.cachefly.net/wso2/sites/all/image_resources/choreodev2025/choreo-dev-Observability3.png"/> */}
                            <Image
      src="https://wso2.cachefly.net/wso2/sites/all/image_resources/choreodev2025/choreo-dev-Observability3.webp" 
      alt="Know what's happening before it becomes a problem"
      width={846}
      height={704}
      className="cTabImage"
    />
                            </Col>
                        </Row>
                    </div>
                    <div className={`tab-pane fade ${activeTab === 'tab5' ? 'show active' : ''}`} role="tabpanel">
                        <Row>
                            <Col sm={12} md={4} className="cPannelText">
                            <h3>Stay in control at scale without the chaos</h3>
                            <ul className='cListItems'>
                                <li>Manage multiple projects, environments, and services from a single portal.</li> 
                                <li>Control team access with role-based permissions.</li>
                                <li>Simplify API management with an integrated API portal for discovery and consumption.</li>
                                <li>Optimize cloud costs with built-in usage insights and recommendations.</li>
                            </ul>
                            </Col>
                            <Col sm={12} md={8} className="cPannelImage">
                            {/* <img className='cTabImage' alt='Stay in control at scale without the chaos' src="https://wso2.cachefly.net/wso2/sites/all/image_resources/choreodev2025/choreo-dev-Management3.png"/> */}
                            <Image
      src="https://wso2.cachefly.net/wso2/sites/all/image_resources/choreodev2025/choreo-dev-Management3.webp" 
      alt="Stay in control at scale without the chaos"
      width={846}
      height={704}
      className="cTabImage"
    />
         
                            </Col>
                        </Row>
                    </div>
                </div>
                </Col>
            </Row>
        </Container>
    </div>
    <div className="cSection  cTransparentBg cAIblade">
        <Container>
            <Row>
                <Col sm={12} md={12}>

                <div className="cWhiteRoundedHighlightedBox">

                    <Row>
                        <Col sm={12} md={6}>
                        <h2>AI-Powered Development, AI-Driven Apps</h2>
                        <p>Choreo equips developers to ship code faster with embedded AI tools, while giving AI builders the infrastructure they need, including vector DBs, GenAI API connections, auto scaling to build and deploy AI apps seamlessly.</p>
                        <ul class="cListItems">
                            <li><span>GenAI-Ready Stack</span>: Simplify AI app deployment with built-in vector databases and CI/CD pipelines.
                            </li>
                            <li><span>AI-Augmented DevOps</span>: Operate smarter with Choreo Copilot and resolve issues instantly.
                            </li>
                            <li><span>Unified Efficiency</span>: Boost productivity for coders and AI builders in one platform.</li>

                        </ul>
                        <a target='_blank' className="cChoreoButton " href='https://wso2.com/choreo/usecases/unleash-the-power-of-generative-ai-with-choreo/'>Explore Gen AI with Choreo</a>
                        </Col>
                        <Col sm={12} md={6}>
                        {/* <img src='https://wso2.cachefly.net/wso2/sites/all/image_resources/choreodev2025/choreo-dev-AI-x.png'/> */}

                        <Image
      src="https://wso2.cachefly.net/wso2/sites/all/image_resources/choreodev2025/choreo-dev-AI-x.webp" 
      alt="AI-Powered Development and Operations"
      width={640}
      height={533}
      className="cTabImage"
    />
                        </Col>
                    </Row>
                </div>


                </Col>

            </Row>
        </Container>
    </div>
    <div className="cSection  cWhiteBG cCustomerLogos cNumbers">
        <Container>
            <Row>
                <Col sm={12} md={3}>
                <div className='PointOne One'>
                    <h3 class="cPurpleColored aos-init aos-animate" data-aos="zoom-in" data-aos-easing="linear">30K+</h3>
                    <p>Developers</p>
                </div>
                </Col>
                <Col sm={12} md={3}>
                <div className='PointOne Two'>
                    <h3 class="cPurpleColored aos-init aos-animate" data-aos="zoom-in" data-aos-easing="linear">28K+</h3>
                    <p>Components</p>
                </div>
                </Col>
                <Col sm={12} md={3}>
                <div className='PointOne Three'>
                    <h3 class="cPurpleColored aos-init aos-animate" data-aos="zoom-in" data-aos-easing="linear">450K+</h3>
                    <p>Deployments</p>
                </div>
                </Col>
                <Col sm={12} md={3}>
                <div className='PointOne Four'>
                    <h3 class="cPurpleColored aos-init aos-animate" data-aos="zoom-in" data-aos-easing="linear">5B+</h3>
                    <p>Transactions</p>
                </div>
                </Col>
            </Row>
        </Container>
    </div>
    <div className="cSection cGrayBackground cCustomerLogos cCompareTableSection">
        <Container>
            <Row>
                <Col sm={12} md={12}>
                <h2>Why Use Choreo IDP?</h2>
                {/* <Row>
                 <Col sm={12} md={2}>
                 &nbsp;</Col>
                 <Col sm={12} md={8}>
                 <Table className='cTableTabs'>
                 <tbody>
                 <tr>
                 <td>
                 <button className={`nav-link ${activeTab2==='cComp1' ? 'active' : '' }`} onClick={()=> setactiveTab2('cComp1')}
                 role="tab"
                 aria-selected={activeTab2 === 'cComp1'}
                 >
                 <h3>Platform Engineers </h3>
                 <p>The Most Comprehensive IDP</p>
                 </button>
                 </td>
                 <td>
                 <button className={`nav-link ${activeTab2==='cComp2' ? 'active' : '' }`} onClick={()=> setactiveTab2('cComp2')}
                 role="tab"
                 aria-selected={activeTab2 === 'cComp2'}
                 >
                 <h3>Application Developers</h3>
                 <p>A Better Alternative for Modern Development</p>
                 </button>
                 </td>
                 </tr>
                 </tbody>
                 </Table>
                 </Col>
                 <Col sm={12} md={2}>
                 &nbsp;</Col>
                 </Row> */}
                <Col sm={12} md={12}>
                <div className="tab-content">
                    {/* <div className={`tab-pane fade ${activeTab2==='cComp1' ? 'show active' : '' }`} role="tabpanel">
                     <Row>
                     <Col sm={12} md={12} className="cPannelText">
                     <Table responsive className='table cFeatureTable'>
                     <tbody>
                     
                     <tr>
                     <th className='cFeature'>
                     <span>Feature</span>
                     </th>
                     <th className='cFeaturHerokue'>
                     <span>Backstage</span>
                     </th>
                     <th className='cFeatureAWS'>
                     <span>Harness</span>
                     </th>
                     <th className='cFeatureVercel'>
                     <span>Humanitec</span>
                     </th>
                     <th className='cFeatureRailway'>
                     <span>Port</span>
                     </th>
                     <th className='cFeatureRender'>
                     <span>Qovery</span>
                     </th>
                     <th className='cFeatureChoreo cTopShadow cDataRight'>
                     <span>Choreo</span>
                     </th>
                     </tr>
                     
                     <tr>
                     <td className='cFeatureName'><span>Fully managed IDP</span></td>
                     <td ><span> <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/cross-red.webp" className="ls-is-cached lazyloaded " loading="lazy" /></span></td>
                     <td > <span> <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/tick-n.webp" className="ls-is-cached lazyloaded " loading="lazy" /></span></td>
                     <td ><span> <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/cross-red.webp" className="ls-is-cached lazyloaded " loading="lazy" /></span></td>
                     <td > <span> <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/tick-n.webp" className="ls-is-cached lazyloaded " loading="lazy" /></span></td>
                     <td > <span> <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/tick-n.webp" className="ls-is-cached lazyloaded " loading="lazy" /></span></td>
                     <td><span> 
    <Image
    src="https://wso2.cachefly.net/wso2/sites/all/image_resources/tick-n.webp" 
    alt="Tick"
    width={22}
    height={23}
    className="cTabImage"
  />
</span></td>
                     </tr>
                     <tr>
                     <td className='cFeatureName'><span>Unified portal</span></td>
                     <td ><span> <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/cross-red.webp" className="ls-is-cached lazyloaded " loading="lazy" /></span></td>
                     <td ><span> <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/cross-red.webp" className="ls-is-cached lazyloaded " loading="lazy" /></span></td>
                     <td ><span> <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/cross-red.webp" className="ls-is-cached lazyloaded " loading="lazy" /></span></td>
                     <td ><span> <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/cross-red.webp" className="ls-is-cached lazyloaded " loading="lazy" /></span></td>
                     <td ><span> <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/cross-red.webp" className="ls-is-cached lazyloaded " loading="lazy" /></span></td>
                     <td><span> 
    <Image
    src="https://wso2.cachefly.net/wso2/sites/all/image_resources/tick-n.webp" 
    alt="Tick"
    width={22}
    height={23}
    className="cTabImage"
  />
</span></td>
                     </tr>
                     <tr>
                     <td className='cFeatureName'><span>CI/CD automation</span></td>
                     <td ><span> <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/cross-red.webp" className="ls-is-cached lazyloaded " loading="lazy" /></span></td>
                     <td > <span> <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/tick-n.webp" className="ls-is-cached lazyloaded " loading="lazy" /></span></td>
                     <td ><span> <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/tick-n.webp" className="ls-is-cached lazyloaded " loading="lazy" /></span></td>
                     <td > <span> <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/tick-n.webp" className="ls-is-cached lazyloaded " loading="lazy" /></span></td>
                     <td > <span> <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/tick-n.webp" className="ls-is-cached lazyloaded " loading="lazy" /></span></td>
                     <td><span> 
    <Image
    src="https://wso2.cachefly.net/wso2/sites/all/image_resources/tick-n.webp" 
    alt="Tick"
    width={22}
    height={23}
    className="cTabImage"
  />
</span></td>
                     </tr>
                     <tr>
                     <td className='cFeatureName'><span>Infrastructure automation</span></td>
                     <td ><span> <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/cross-red.webp" className="ls-is-cached lazyloaded " loading="lazy" /></span></td>
                     <td > <span> <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/tick-n.webp" className="ls-is-cached lazyloaded " loading="lazy" /></span></td>
                     <td > <span> <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/tick-n.webp" className="ls-is-cached lazyloaded " loading="lazy" /></span></td>
                     <td > <span> <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/tick-n.webp" className="ls-is-cached lazyloaded " loading="lazy" /></span></td>
                     <td > <span> <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/tick-n.webp" className="ls-is-cached lazyloaded " loading="lazy" /></span></td>
                     <td><span> 
    <Image
    src="https://wso2.cachefly.net/wso2/sites/all/image_resources/tick-n.webp" 
    alt="Tick"
    width={22}
    height={23}
    className="cTabImage"
  />
</span></td>
                     </tr>
                     <tr>
                     <td className='cFeatureName'><span>Multi-cloud</span></td>
                     <td ><span> <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/tick-n.webp" className="ls-is-cached lazyloaded " loading="lazy" /></span></td>
                     <td > <span> <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/tick-n.webp" className="ls-is-cached lazyloaded " loading="lazy" /></span></td>
                     <td > <span> <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/tick-n.webp" className="ls-is-cached lazyloaded " loading="lazy" /></span></td>
                     <td > <span> <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/tick-n.webp" className="ls-is-cached lazyloaded " loading="lazy" /></span></td>
                     <td > <span> <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/tick-n.webp" className="ls-is-cached lazyloaded " loading="lazy" /></span></td>
                     <td><span> 
    <Image
    src="https://wso2.cachefly.net/wso2/sites/all/image_resources/tick-n.webp" 
    alt="Tick"
    width={22}
    height={23}
    className="cTabImage"
  />
</span></td>
                     </tr>
                     <tr>
                     <td className='cFeatureName'><span>Role-based access control (RBAC)</span></td>
                     <td ><span> <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/cross-red.webp" className="ls-is-cached lazyloaded " loading="lazy" /></span></td>
                     <td > <span> <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/tick-n.webp" className="ls-is-cached lazyloaded " loading="lazy" /></span></td>
                     <td > <span> <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/tick-n.webp" className="ls-is-cached lazyloaded " loading="lazy" /></span></td>
                     <td > <span> <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/tick-n.webp" className="ls-is-cached lazyloaded " loading="lazy" /></span></td>
                     <td > <span> <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/tick-n.webp" className="ls-is-cached lazyloaded " loading="lazy" /></span></td>
                     <td><span> 
    <Image
    src="https://wso2.cachefly.net/wso2/sites/all/image_resources/tick-n.webp" 
    alt="Tick"
    width={22}
    height={23}
    className="cTabImage"
  />
</span></td>
                     </tr>
                     <tr>
                     <td className='cFeatureName'><span>Built-in security & compliance</span></td>
                     <td ><span> <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/cross-red.webp" className="ls-is-cached lazyloaded " loading="lazy" /></span></td>
                     <td > <span> <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/tick-n.webp" className="ls-is-cached lazyloaded " loading="lazy" /></span></td>
                     <td > <span> <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/tick-n.webp" className="ls-is-cached lazyloaded " loading="lazy" /></span></td>
                     <td > <span> <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/tick-n.webp" className="ls-is-cached lazyloaded " loading="lazy" /></span></td>
                     <td > <span> <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/tick-n.webp" className="ls-is-cached lazyloaded " loading="lazy" /></span></td>
                     <td><span> 
    <Image
    src="https://wso2.cachefly.net/wso2/sites/all/image_resources/tick-n.webp" 
    alt="Tick"
    width={22}
    height={23}
    className="cTabImage"
  />
</span></td>
                     </tr>
                     <tr>
                     <td className='cFeatureName'><span>Zero trust security</span></td>
                     <td ><span> <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/cross-red.webp" className="ls-is-cached lazyloaded " loading="lazy" /></span></td>
                     <td > <span> <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/tick-n.webp" className="ls-is-cached lazyloaded " loading="lazy" /></span></td>
                     <td > <span> <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/tick-n.webp" className="ls-is-cached lazyloaded " loading="lazy" /></span></td>
                     <td > <span> <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/tick-n.webp" className="ls-is-cached lazyloaded " loading="lazy" /></span></td>
                     <td > <span> <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/tick-n.webp" className="ls-is-cached lazyloaded " loading="lazy" /></span></td>
                     <td><span> 
    <Image
    src="https://wso2.cachefly.net/wso2/sites/all/image_resources/tick-n.webp" 
    alt="Tick"
    width={22}
    height={23}
    className="cTabImage"
  />
</span></td>
                     </tr>
                     <tr>
                     <td className='cFeatureName'><span>Marketplace for services & APIs</span></td>
                     <td ><span> <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/cross-red.webp" className="ls-is-cached lazyloaded " loading="lazy" /></span></td>
                     <td ><span> <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/cross-red.webp" className="ls-is-cached lazyloaded " loading="lazy" /></span></td>
                     <td ><span> <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/cross-red.webp" className="ls-is-cached lazyloaded " loading="lazy" /></span></td>
                     <td > <span> <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/tick-n.webp" className="ls-is-cached lazyloaded " loading="lazy" /></span></td>
                     <td ><span> <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/cross-red.webp" className="ls-is-cached lazyloaded " loading="lazy" /></span></td>
                     <td><span> 
    <Image
    src="https://wso2.cachefly.net/wso2/sites/all/image_resources/tick-n.webp" 
    alt="Tick"
    width={22}
    height={23}
    className="cTabImage"
  />
</span></td>
                     </tr>
                     <tr>
                     <td className='cFeatureName'><span>API management</span></td>
                     <td ><span> <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/cross-red.webp" className="ls-is-cached lazyloaded " loading="lazy" /></span></td>
                     <td ><span> <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/cross-red.webp" className="ls-is-cached lazyloaded " loading="lazy" /></span></td>
                     <td ><span> <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/cross-red.webp" className="ls-is-cached lazyloaded " loading="lazy" /></span></td>
                     <td ><span> <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/cross-red.webp" className="ls-is-cached lazyloaded " loading="lazy" /></span></td>
                     <td ><span> <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/cross-red.webp" className="ls-is-cached lazyloaded " loading="lazy" /></span></td>
                     <td><span> 
    <Image
    src="https://wso2.cachefly.net/wso2/sites/all/image_resources/tick-n.webp" 
    alt="Tick"
    width={22}
    height={23}
    className="cTabImage"
  />
</span></td>
                     </tr>
                     <tr>
                     <td className='cFeatureName'><span>Egress control</span></td>
                     <td ><span> <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/cross-red.webp" className="ls-is-cached lazyloaded " loading="lazy" /></span></td>
                     <td > <span> <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/tick-n.webp" className="ls-is-cached lazyloaded " loading="lazy" /></span></td>
                     <td ><span> <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/cross-red.webp" className="ls-is-cached lazyloaded " loading="lazy" /></span></td>
                     <td ><span> <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/cross-red.webp" className="ls-is-cached lazyloaded " loading="lazy" /></span></td>
                     <td ><span> <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/cross-red.webp" className="ls-is-cached lazyloaded " loading="lazy" /></span></td>
                     <td><span> 
    <Image
    src="https://wso2.cachefly.net/wso2/sites/all/image_resources/tick-n.webp" 
    alt="Tick"
    width={22}
    height={23}
    className="cTabImage"
  />
</span></td>
                     </tr>
                     <tr>
                     <td className='cFeatureName'><span>Cost analysis</span></td>
                     <td ><span> <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/cross-red.webp" className="ls-is-cached lazyloaded " loading="lazy" /></span></td>
                     <td > <span> <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/tick-n.webp" className="ls-is-cached lazyloaded " loading="lazy" /></span></td>
                     <td ><span> <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/cross-red.webp" className="ls-is-cached lazyloaded " loading="lazy" /></span></td>
                     <td ><span> <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/cross-red.webp" className="ls-is-cached lazyloaded " loading="lazy" /></span></td>
                     <td ><span> <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/cross-red.webp" className="ls-is-cached lazyloaded " loading="lazy" /></span></td>
                     <td><span> 
    <Image
    src="https://wso2.cachefly.net/wso2/sites/all/image_resources/tick-n.webp" 
    alt="Tick"
    width={22}
    height={23}
    className="cTabImage"
  />
</span></td>
                     </tr>
                     <tr>
                     <td className='cFeatureName'><span>External IDP integration</span></td>
                     <td > <span> <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/tick-n.webp" className="ls-is-cached lazyloaded " loading="lazy" /></span></td>
                     <td > <span> <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/tick-n.webp" className="ls-is-cached lazyloaded " loading="lazy" /></span></td>
                     <td ><span> <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/cross-red.webp" className="ls-is-cached lazyloaded " loading="lazy" /></span></td>
                     <td ><span> <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/cross-red.webp" className="ls-is-cached lazyloaded " loading="lazy" /></span></td>
                     <td ><span> <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/cross-red.webp" className="ls-is-cached lazyloaded " loading="lazy" /></span></td>
                     <td><span> 
    <Image
    src="https://wso2.cachefly.net/wso2/sites/all/image_resources/tick-n.webp" 
    alt="Tick"
    width={22}
    height={23}
    className="cTabImage"
  />
</span></td>
                     </tr>
                     <tr>
                     <td className='cFeatureName cLastRow'>
                     <span> &nbsp;</span>
                     </td>
                     <td className='cLastRow'>
                     <span> &nbsp;</span>
                     </td>
                     <td className='cLastRow'>
                     <span> &nbsp;</span>
                     </td>
                     <td className='cLastRow'>
                     <span> &nbsp;</span>
                     </td>
                     <td className='cLastRow'>
                     <span> &nbsp;</span>
                     </td>
                     <td className='cLastRow'>
                     <span> &nbsp;</span>
                     </td>
                     <td className='cDataRight cLastRow'>
                     <span> &nbsp;</span>
                     </td>
                     </tr>
                     </tbody>
                     </Table>
                     </Col>
                     </Row>
                     </div> */}
                    <div className={`tab-pane fade ${activeTab2 === 'cComp2' ? 'show active' : '' }`} role="tabpanel">
<Row>
   <Col sm={12} md={12} className="cPannelText">
   <Table responsive className='table cFeatureTable'>
      <tbody>
         <tr>
            <th className='cFeature'>
               <span>Feature</span>
            </th>
            <th className='cFeaturHerokue'>
               <span>Heroku</span>
            </th>
            <th className='cFeatureAWS'>
               <span>AWS Amplify</span>
            </th>
            <th className='cFeatureVercel'>
               <span>Vercel</span>
            </th>
            <th className='cFeatureRailway'>
               <span>Railway</span>
            </th>
            <th className='cFeatureRender'>
               <span>Render</span>
            </th>
            <th className='cFeatureChoreo cTopShadow cDataRight'>
               <span>Choreo</span>
            </th>
         </tr>
         <tr>
            <td className='cFeatureName'><span>User authentication and authorization management</span></td>
            <td>
               <span>
                  <Image
                     src="https://wso2.cachefly.net/wso2/sites/all/image_resources/cross-red.webp" 
                     alt="Cross"
                     width={22}
                     height={23}
                     className="cTabImage"
                     />
               </span>
            </td>
            <td>
               <span>
                  <Image
                     src="https://wso2.cachefly.net/wso2/sites/all/image_resources/cross-red.webp" 
                     alt="Cross"
                     width={22}
                     height={23}
                     className="cTabImage"
                     />
               </span>
            </td>
            <td>
               <span>
                  <Image
                     src="https://wso2.cachefly.net/wso2/sites/all/image_resources/cross-red.webp" 
                     alt="Cross"
                     width={22}
                     height={23}
                     className="cTabImage"
                     />
               </span>
            </td>
            <td>
               <span>
                  <Image
                     src="https://wso2.cachefly.net/wso2/sites/all/image_resources/cross-red.webp" 
                     alt="Cross"
                     width={22}
                     height={23}
                     className="cTabImage"
                     />
               </span>
            </td>
            <td>
               <span>
                  <Image
                     src="https://wso2.cachefly.net/wso2/sites/all/image_resources/cross-red.webp" 
                     alt="Cross"
                     width={22}
                     height={23}
                     className="cTabImage"
                     />
               </span>
            </td>
            <td className='cDataRight'>
               <span>
                  <Image
                     src="https://wso2.cachefly.net/wso2/sites/all/image_resources/tick-n.webp" 
                     alt="Tick"
                     width={22}
                     height={23}
                     className="cDataRight"
                     />
               </span>
            </td>
         </tr>
         <tr>
            <td className='cFeatureName'><span>Autoscaling of apps</span></td>
            <td>
               <span>
                  <Image
                     src="https://wso2.cachefly.net/wso2/sites/all/image_resources/tick-n.webp" 
                     alt="Tick"
                     width={22}
                     height={23}
                     className="cTabImage"
                     />
               </span>
            </td>
            <td>
               <span>
                  <Image
                     src="https://wso2.cachefly.net/wso2/sites/all/image_resources/tick-n.webp" 
                     alt="Tick"
                     width={22}
                     height={23}
                     className="cTabImage"
                     />
               </span>
            </td>
            <td>
               <span>
                  <Image
                     src="https://wso2.cachefly.net/wso2/sites/all/image_resources/cross-red.webp" 
                     alt="Cross"
                     width={22}
                     height={23}
                     className="cTabImage"
                     />
               </span>
            </td>
            <td>
               <span>
                  <Image
                     src="https://wso2.cachefly.net/wso2/sites/all/image_resources/tick-n.webp" 
                     alt="Tick"
                     width={22}
                     height={23}
                     className="cTabImage"
                     />
               </span>
            </td>
            <td>
               <span>
                  <Image
                     src="https://wso2.cachefly.net/wso2/sites/all/image_resources/tick-n.webp" 
                     alt="Tick"
                     width={22}
                     height={23}
                     className="cTabImage"
                     />
               </span>
            </td>
            <td className='cDataRight'>
               <span>
                  <Image
                     src="https://wso2.cachefly.net/wso2/sites/all/image_resources/tick-n.webp" 
                     alt="Tick"
                     width={22}
                     height={23}
                     className="cTabImage"
                     />
               </span>
            </td>
         </tr>
         <tr>
            <td className='cFeatureName'><span>Docker-based development using Dockerfiles</span></td>
            <td>
               <span>
                  <Image
                     src="https://wso2.cachefly.net/wso2/sites/all/image_resources/tick-n.webp" 
                     alt="Tick"
                     width={22}
                     height={23}
                     className="cTabImage"
                     />
               </span>
            </td>
            <td>
               <span>
                  <Image
                     src="https://wso2.cachefly.net/wso2/sites/all/image_resources/cross-red.webp" 
                     alt="Cross"
                     width={22}
                     height={23}
                     className="cTabImage"
                     />
               </span>
            </td>
            <td>
               <span>
                  <Image
                     src="https://wso2.cachefly.net/wso2/sites/all/image_resources/cross-red.webp" 
                     alt="Cross"
                     width={22}
                     height={23}
                     className="cTabImage"
                     />
               </span>
            </td>
            <td>
               <span>
                  <Image
                     src="https://wso2.cachefly.net/wso2/sites/all/image_resources/tick-n.webp" 
                     alt="Tick"
                     width={22}
                     height={23}
                     className="cTabImage"
                     />
               </span>
            </td>
            <td>
               <span>
                  <Image
                     src="https://wso2.cachefly.net/wso2/sites/all/image_resources/tick-n.webp" 
                     alt="Tick"
                     width={22}
                     height={23}
                     className="cTabImage"
                     />
               </span>
            </td>
            <td className='cDataRight'>
               <span>
                  <Image
                     src="https://wso2.cachefly.net/wso2/sites/all/image_resources/tick-n.webp" 
                     alt="Tick"
                     width={22}
                     height={23}
                     className="cTabImage"
                     />
               </span>
            </td>
         </tr>
         <tr>
            <td className='cFeatureName'><span>Multiple runtime support</span></td>
            <td>
               <span>
                  <Image
                     src="https://wso2.cachefly.net/wso2/sites/all/image_resources/cross-red.webp" 
                     alt="Cross"
                     width={22}
                     height={23}
                     className="cTabImage"
                     />
               </span>
            </td>
            <td>
               <span>
                  <Image
                     src="https://wso2.cachefly.net/wso2/sites/all/image_resources/tick-n.webp" 
                     alt="Tick"
                     width={22}
                     height={23}
                     className="cTabImage"
                     />
               </span>
            </td>
            <td>
               <span>
                  <Image
                     src="https://wso2.cachefly.net/wso2/sites/all/image_resources/cross-red.webp" 
                     alt="Cross"
                     width={22}
                     height={23}
                     className="cTabImage"
                     />
               </span>
            </td>
            <td>
               <span>
                  <Image
                     src="https://wso2.cachefly.net/wso2/sites/all/image_resources/cross-red.webp" 
                     alt="Cross"
                     width={22}
                     height={23}
                     className="cTabImage"
                     />
               </span>
            </td>
            <td>
               <span>
                  <Image
                     src="https://wso2.cachefly.net/wso2/sites/all/image_resources/cross-red.webp" 
                     alt="Cross"
                     width={22}
                     height={23}
                     className="cTabImage"
                     />
               </span>
            </td>
            <td className='cDataRight'>
               <span>
                  <Image
                     src="https://wso2.cachefly.net/wso2/sites/all/image_resources/tick-n.webp" 
                     alt="Tick"
                     width={22}
                     height={23}
                     className="cTabImage"
                     />
               </span>
            </td>
         </tr>
         {/* 
         <tr>
            <td className='cFeatureName'><span>Laptop deployment</span></td>
            <td>
               <span>
                  <Image
                     src="https://wso2.cachefly.net/wso2/sites/all/image_resources/cross-red.webp" 
                     alt="Cross"
                     width={22}
                     height={23}
                     className="cTabImage"
                     />
               </span>
            </td>
            <td>
               <span>
                  <Image
                     src="https://wso2.cachefly.net/wso2/sites/all/image_resources/cross-red.webp" 
                     alt="Cross"
                     width={22}
                     height={23}
                     className="cTabImage"
                     />
               </span>
            </td>
            <td>
               <span>
                  <Image
                     src="https://wso2.cachefly.net/wso2/sites/all/image_resources/cross-red.webp" 
                     alt="Cross"
                     width={22}
                     height={23}
                     className="cTabImage"
                     />
               </span>
            </td>
            <td>
               <span>
                  <Image
                     src="https://wso2.cachefly.net/wso2/sites/all/image_resources/cross-red.webp" 
                     alt="Cross"
                     width={22}
                     height={23}
                     className="cTabImage"
                     />
               </span>
            </td>
            <td>
               <span>
                  <Image
                     src="https://wso2.cachefly.net/wso2/sites/all/image_resources/cross-red.webp" 
                     alt="Cross"
                     width={22}
                     height={23}
                     className="cTabImage"
                     />
               </span>
            </td>
            <td>
               <span>
                  <Image
                     src="https://wso2.cachefly.net/wso2/sites/all/image_resources/tick-n.webp" 
                     alt="Tick"
                     width={22}
                     height={23}
                     className="cTabImage"
                     />
               </span>
            </td>
         </tr>
         */}
         <tr>
            <td className='cFeatureName'><span>Multi environment support</span></td>
            <td>
               <span>
                  <Image
                     src="https://wso2.cachefly.net/wso2/sites/all/image_resources/tick-n.webp" 
                     alt="Tick"
                     width={22}
                     height={23}
                     className="cTabImage"
                     />
               </span>
            </td>
            <td>
               <span>
                  <Image
                     src="https://wso2.cachefly.net/wso2/sites/all/image_resources/tick-n.webp" 
                     alt="Tick"
                     width={22}
                     height={23}
                     className="cTabImage"
                     />
               </span>
            </td>
            <td>
               <span>
                  <Image
                     src="https://wso2.cachefly.net/wso2/sites/all/image_resources/tick-n.webp" 
                     alt="Tick"
                     width={22}
                     height={23}
                     className="cTabImage"
                     />
               </span>
            </td>
            <td>
               <span>
                  <Image
                     src="https://wso2.cachefly.net/wso2/sites/all/image_resources/tick-n.webp" 
                     alt="Tick"
                     width={22}
                     height={23}
                     className="cTabImage"
                     />
               </span>
            </td>
            <td>
               <span>
                  <Image
                     src="https://wso2.cachefly.net/wso2/sites/all/image_resources/tick-n.webp" 
                     alt="Tick"
                     width={22}
                     height={23}
                     className="cTabImage"
                     />
               </span>
            </td>
            <td className='cDataRight'>
               <span>
                  <Image
                     src="https://wso2.cachefly.net/wso2/sites/all/image_resources/tick-n.webp" 
                     alt="Tick"
                     width={22}
                     height={23}
                     className="cTabImage"
                     />
               </span>
            </td>
         </tr>
         <tr>
            <td className='cFeatureName'><span>API management</span></td>
            <td>
               <span>
                  <Image
                     src="https://wso2.cachefly.net/wso2/sites/all/image_resources/cross-red.webp" 
                     alt="Cross"
                     width={22}
                     height={23}
                     className="cTabImage"
                     />
               </span>
            </td>
            <td>
               <span>
                  <Image
                     src="https://wso2.cachefly.net/wso2/sites/all/image_resources/tick-n.webp" 
                     alt="Tick"
                     width={22}
                     height={23}
                     className="cTabImage"
                     />
               </span>
            </td>
            <td>
               <span>
                  <Image
                     src="https://wso2.cachefly.net/wso2/sites/all/image_resources/cross-red.webp" 
                     alt="Cross"
                     width={22}
                     height={23}
                     className="cTabImage"
                     />
               </span>
            </td>
            <td>
               <span>
                  <Image
                     src="https://wso2.cachefly.net/wso2/sites/all/image_resources/cross-red.webp" 
                     alt="Cross"
                     width={22}
                     height={23}
                     className="cTabImage"
                     />
               </span>
            </td>
            <td>
               <span>
                  <Image
                     src="https://wso2.cachefly.net/wso2/sites/all/image_resources/cross-red.webp" 
                     alt="Cross"
                     width={22}
                     height={23}
                     className="cTabImage"
                     />
               </span>
            </td>
            <td className='cDataRight'>
               <span>
                  <Image
                     src="https://wso2.cachefly.net/wso2/sites/all/image_resources/tick-n.webp" 
                     alt="Tick"
                     width={22}
                     height={23}
                     className="cTabImage"
                     />
               </span>
            </td>
         </tr>
         <tr>
            <td className='cFeatureName'><span>Marketplace and reuse</span></td>
            <td>
               <span>
                  <Image
                     src="https://wso2.cachefly.net/wso2/sites/all/image_resources/cross-red.webp" 
                     alt="Cross"
                     width={22}
                     height={23}
                     className="cTabImage"
                     />
               </span>
            </td>
            <td>
               <span>
                  <Image
                     src="https://wso2.cachefly.net/wso2/sites/all/image_resources/cross-red.webp" 
                     alt="Cross"
                     width={22}
                     height={23}
                     className="cTabImage"
                     />
               </span>
            </td>
            <td>
               <span>
                  <Image
                     src="https://wso2.cachefly.net/wso2/sites/all/image_resources/cross-red.webp" 
                     alt="Cross"
                     width={22}
                     height={23}
                     className="cTabImage"
                     />
               </span>
            </td>
            <td>
               <span>
                  <Image
                     src="https://wso2.cachefly.net/wso2/sites/all/image_resources/cross-red.webp" 
                     alt="Cross"
                     width={22}
                     height={23}
                     className="cTabImage"
                     />
               </span>
            </td>
            <td>
               <span>
                  <Image
                     src="https://wso2.cachefly.net/wso2/sites/all/image_resources/cross-red.webp" 
                     alt="Cross"
                     width={22}
                     height={23}
                     className="cTabImage"
                     />
               </span>
            </td>
            <td className='cDataRight'>
               <span>
                  <Image
                     src="https://wso2.cachefly.net/wso2/sites/all/image_resources/tick-n.webp" 
                     alt="Tick"
                     width={22}
                     height={23}
                     className="cTabImage"
                     />
               </span>
            </td>
         </tr>
         <tr>
            <td className='cFeatureName'><span>Multi-version development</span></td>
            <td>
               <span>
                  <Image
                     src="https://wso2.cachefly.net/wso2/sites/all/image_resources/cross-red.webp" 
                     alt="Cross"
                     width={22}
                     height={23}
                     className="cTabImage"
                     />
               </span>
            </td>
            <td>
               <span>
                  <Image
                     src="https://wso2.cachefly.net/wso2/sites/all/image_resources/tick-n.webp" 
                     alt="Tick"
                     width={22}
                     height={23}
                     className="cTabImage"
                     />
               </span>
            </td>
            <td>
               <span>
                  <Image
                     src="https://wso2.cachefly.net/wso2/sites/all/image_resources/cross-red.webp" 
                     alt="Cross"
                     width={22}
                     height={23}
                     className="cTabImage"
                     />
               </span>
            </td>
            <td>
               <span>
                  <Image
                     src="https://wso2.cachefly.net/wso2/sites/all/image_resources/cross-red.webp" 
                     alt="Cross"
                     width={22}
                     height={23}
                     className="cTabImage"
                     />
               </span>
            </td>
            <td>
               <span>
                  <Image
                     src="https://wso2.cachefly.net/wso2/sites/all/image_resources/cross-red.webp" 
                     alt="Cross"
                     width={22}
                     height={23}
                     className="cTabImage"
                     />
               </span>
            </td>
            <td className='cDataRight'>
               <span>
                  <Image
                     src="https://wso2.cachefly.net/wso2/sites/all/image_resources/tick-n.webp" 
                     alt="Tick"
                     width={22}
                     height={23}
                     className="cTabImage"
                     />
               </span>
            </td>
         </tr>
         <tr>
            <td className='cFeatureName'><span>Query and visualize usage/analytics data</span></td>
            <td>
               <span>
                  <Image
                     src="https://wso2.cachefly.net/wso2/sites/all/image_resources/cross-red.webp" 
                     alt="Cross"
                     width={22}
                     height={23}
                     className="cTabImage"
                     />
               </span>
            </td>
            <td>
               <span>
                  <Image
                     src="https://wso2.cachefly.net/wso2/sites/all/image_resources/tick-n.webp" 
                     alt="Tick"
                     width={22}
                     height={23}
                     className="cTabImage"
                     />
               </span>
            </td>
            <td>
               <span>
                  <Image
                     src="https://wso2.cachefly.net/wso2/sites/all/image_resources/tick-n.webp" 
                     alt="Tick"
                     width={22}
                     height={23}
                     className="cTabImage"
                     />
               </span>
            </td>
            <td>
               <span>
                  <Image
                     src="https://wso2.cachefly.net/wso2/sites/all/image_resources/tick-n.webp" 
                     alt="Tick"
                     width={22}
                     height={23}
                     className="cTabImage"
                     />
               </span>
            </td>
            <td>
               <span>
                  <Image
                     src="https://wso2.cachefly.net/wso2/sites/all/image_resources/cross-red.webp" 
                     alt="Cross"
                     width={22}
                     height={23}
                     className="cTabImage"
                     />
               </span>
            </td>
            <td className='cDataRight'>
               <span>
                  <Image
                     src="https://wso2.cachefly.net/wso2/sites/all/image_resources/tick-n.webp" 
                     alt="Tick"
                     width={22}
                     height={23}
                     className="cTabImage"
                     />
               </span>
            </td>
         </tr>
         <tr>
            <td className='cFeatureName cLastRow'>
               <span> &nbsp;</span>
            </td>
            <td className='cLastRow'>
               <span> &nbsp;</span>
            </td>
            <td className='cLastRow'>
               <span> &nbsp;</span>
            </td>
            <td className='cLastRow'>
               <span> &nbsp;</span>
            </td>
            <td className='cLastRow'>
               <span> &nbsp;</span>
            </td>
            <td className='cLastRow'>
               <span> &nbsp;</span>
            </td>
            <td className='cDataRight cLastRow'>
               <span> &nbsp;</span>
            </td>
         </tr>
      </tbody>
   </Table>
   </Col>
</Row>
</div>
                </div>
                </Col>
                </Col>
                <Col sm={12} md={4} className="cCenterButton">
                </Col>
                <Col sm={12} md={4} className="cCenterButton">
                <a className="cChoreoButton cMainSignupButtom cLearnMore cLearnMoreX cSignupbutton" href="https://console.choreo.dev/" target="_blank" rel="noopener" aria-label="Learn More">Get Started for Free</a>
                </Col>
                <Col sm={12} md={4} className="cCenterButton">
                </Col>
            </Row>
        </Container>
    </div>
    <div className="cSection  cVideoContainer cGradientIn2">
        <Container className='cLogoSliderContainer'>
            <Row>
                <Col sm={12} md={12}>
                <h2>What Our Clients Say</h2>
                </Col>
                <Col sm={12} md={12}>
                <Slider />
                </Col>
            </Row>
        </Container>
        <Container>
            <Row>

                <Col sm={12} md={8}>
                <Row>
                    <Col sm={12} md={6}>
                    <div className='cWhiteRoundedHighlightedBox cQtile'>
                        {/* <img className='cQmark' src="https://wso2.cachefly.net/wso2/sites/all/2023/images/webp/quote-icon-ash.webp" /> */}
                                    <Image
                                        src="https://wso2.cachefly.net/wso2/sites/all/2023/images/webp/quote-icon-ash.webp"
                                        alt="cQmark"
                                        width={25}
                                        height={18}
                                        className="cQmark"
                                    />
                        <p className='cQtext'>The financial savings it represents for my startup is considerable. However, the true value is in the WSO2 team's expertise and the deeply hands-on approach they take to getting you up and running on their platforms.</p>
                        <p className='cQauthor'>Richard Davis <br /> Founder</p>
                        <a target='_blank' href='https://www.topmarks.ai/'>
                       
                                      <Image
                                        src="https://wso2.cachefly.net/wso2/sites/all/2023/images/webp/choreodev/topmarks-01.webp"
                                        alt="topmarks"
                                        width={31}
                                        height={31}
                                        className="cLogoQ"
                                      />
                        </a>
                    </div>
                    <div className='cWhiteRoundedHighlightedBox cQtile'>
                    <Image
                                        src="https://wso2.cachefly.net/wso2/sites/all/2023/images/webp/quote-icon-ash.webp"
                                        alt="ash"
                                        width={25}
                                        height={18}
                                        className="cQmark"
                                    />
                        <p className='cQtext'>Choreo allows you to develop APIs with a great user experience that's focused on the developer like never before. You are fully productive from start to finish. Choreo has knocked down the time-to-market!</p>
                        <p className='cQauthor'>Fidel Prieto Estrada <br />Integration Consultant </p>
                       
                        <Image
                                        src="https://wso2.cachefly.net/wso2/sites/all/2023/images/webp/choreodev/inetum-01.webp"
                                        alt="inetum"
                                        width={117}
                                        height={30}
                                        className="cLogoQ"
                                      />
                    </div>
                    </Col>
                    <Col sm={12} md={6}>
                    <div className='cWhiteRoundedHighlightedBox cQtile'>
                    <Image
                                        src="https://wso2.cachefly.net/wso2/sites/all/2023/images/webp/quote-icon-ash.webp"
                                        alt="cQmark"
                                        width={25}
                                        height={18}
                                        className="cQmark"
                                    />
                        <p className='cQtext'>Choreo lets me create, deploy and observe APIs effortlessly. It makes integration between the SaaS applications much easier and faster with the various connectors available. Overall Choreo next gen iPaaS platform helps enterprises to accelerate their digital transformation implementations.</p>
                        <p className='cQauthor'>Balaji Ravindran <br /> Senior Engineer </p>
                       
                        <Image
                                        src="https://wso2.cachefly.net/wso2/sites/all/2023/images/webp/choreodev/nagarro-01.webp"
                                        alt="nagarro"
                                        width={117}
                                        height={30}
                                        className="cQmark"
                                    />
                    </div>
                    <div className='cWhiteRoundedHighlightedBox cQtile'>
                    <Image
                                        src="https://wso2.cachefly.net/wso2/sites/all/2023/images/webp/quote-icon-ash.webp"
                                        alt="cQmark"
                                        width={25}
                                        height={18}
                                        className="cQmark"
                                    />
                        <p className='cQtext'>Choreo provides a straightforward solution for platform engineering and management aspects compared to other tools out there.</p>
                        <p className='cQauthor'>Suren Rodrigo<br />CPO </p>
                        <Image
                                        src="https://wso2.cachefly.net/wso2/sites/all/2023/images/webp/choreodev/99xlogo-01.webp"
                                        alt="cQmark"
                                        width={59}
                                        height={30}
                                        className="cQmark"
                                    />
               
                    </div>
                    </Col>
                </Row>
                </Col>
                <Col sm={12} md={4}>


                <div className='cVideoOuter'>


                    <Row className="g-4">
                        {videos.map((video, index) => (
        <Col key={video.id} md={12} lg={12}>
                        <div className="cQtile">
                            <div 
                                className="card-img-top position-relative cursor-pointer cQtile"
                                onClick={() => handleShow(video.id)}
                                style={{ cursor: 'pointer' }}
                                role="button"
                                aria-label={`Play ${video.title}`}
                                >
                                {/* YouTube Thumbnail */}
                                <img
                                    src={video.thumbnail}
                                    alt={video.title}
                                    className="img-fluid w-100"
                                    style={{ borderTopLeftRadius: 'calc(0.25rem - 1px)', borderTopRightRadius: 'calc(0.25rem - 1px)' }}
                                    />

                                {/* Play Button Overlay */}
                                <div className="position-absolute top-50 start-50 translate-middle">
                                    <svg width="64" height="64" viewBox="0 0 24 24" style={{ filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.5))' }}>
                                    <path fill="#fff" d="M8 5v14l11-7z"/>
                                    </svg>
                                </div>
                            </div>

                            <div className="card-body">
                                <p className="cVideoTitleText">{video.title}</p>
                            </div>
                        </div>
                        </Col>
        ))}
                    </Row>

                    <Modal 
                        show={showModal} 
                        onHide={handleClose}
                        size="lg"
                        centered
                        >
                        <Modal.Header closeButton>
                            <Modal.Title>
                                {videos.find(v => v.id === selectedVideoId)?.title || ''}
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="ratio ratio-16x9">
                                {selectedVideoId && (
        <iframe
                                    src={`https://www.youtube.com/embed/${selectedVideoId}?autoplay=1&mute=1`}
                                    title=""
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    style={{ border: 0 }}
                                    />
        )}
                            </div>
                        </Modal.Body>
                    </Modal>
                </div>




                </Col>
            </Row>
        </Container>
    </div>
    <div className="cSection cTransparentBG">
        <Container>
            <Row>
                <Col sm={12} md={12}>
                <h2> Try Choreo IDP for Free!
                </h2>
                </Col>
                <Col sm={12} md={4}>
                <div className='cCalloutCol'>
                    {/* <img className='cCalloutIcons' src="https://wso2.cachefly.net/wso2/sites/all/2023/images/webp/choreodev/Icons-01.webp" /> */}
                    <Image
    src="https://wso2.cachefly.net/wso2/sites/all/2023/images/webp/choreodev/Icons-01.webp" 
    alt="Ship Fast"
    width={100}
    height={100}
    className="cCalloutIcons"
  />
                    <span className='ch4style'>Ship Fast</span>
                    <h3>5 minutes</h3>
                    <p>From code to production</p>
                </div>
                </Col>
                <Col sm={12} md={4}>
                <div className='cCalloutCol'>
                    {/* <img className='cCalloutIcons' src="https://wso2.cachefly.net/wso2/sites/all/image_resources/Icons-85.webp" /> */}
                    <Image
    src="https://wso2.cachefly.net/wso2/sites/all/image_resources/Icons-85.webp" 
    alt="10x Your Platform Engineering"
    width={100}
    height={100}
    className="cCalloutIcons"
  />
                    <span className='ch4style'>10x Your Platform Engineering</span>
                    <h3>50%</h3>
                    <p>Reduce platform management costs
                    </p>
                </div>
                </Col>
                <Col sm={12} md={4}>
                <div className='cCalloutCol'>
                    {/* <img className='cCalloutIcons' src="https://wso2.cachefly.net/wso2/sites/all/2023/images/webp/choreodev/Icons-02-2.webp" /> */}
                    <Image
    src="https://wso2.cachefly.net/wso2/sites/all/2023/images/webp/choreodev/Icons-02-2.webp" 
    alt="Focus on Your Code"
    width={100}
    height={100}
    className="cCalloutIcons"
  />
                    <span className='ch4style'>Focus on Your Code</span>
                    <h3>100%</h3>
                    <p>And not everything around it</p>
                </div>
                </Col>
            </Row>
        </Container>
    </div>

    <div className="cSection cGrayBackground cFooterSection cPurpleSection">
        <Container>
            <Row>

                <Col sm={12} md={12} >

                <div className='cWhiteRoundedHighlightedBox cBottomDiscodeBox cVideoOuter'>
                    <Row className="g-4">
                        {videos2.map((video, index) => (
        <Col key={video.id} md={6} lg={6}>
                        <div className="cQtile">
                            <div 
                                className="card-img-top position-relative cursor-pointer cQtile"
                                onClick={() => handleShow(video.id)}
                                style={{ cursor: 'pointer' }}
                                role="button"
                                aria-label={`Play ${video.title}`}
                                >
                                {/* YouTube Thumbnail */}
                                <img
                                    src={`https://wso2.cachefly.net/wso2/sites/all/image_resources/Video-Thumbnail-2.webp`}
                                    alt={video.title}
                                    className="img-fluid w-100"
                                    style={{ borderTopLeftRadius: 'calc(0.25rem - 1px)', borderTopRightRadius: 'calc(0.25rem - 1px)' }}
                                    />

                                {/* Play Button Overlay */}
                                <div className="position-absolute top-50 start-50 translate-middle">
                                    <svg width="64" height="64" viewBox="0 0 24 24" style={{ filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.5))' }}>
                                    <path fill="#fff" d="M8 5v14l11-7z"/>
                                    </svg>
                                </div>
                            </div>

                            {/* <div className="card-body">
                             <p className="cVideoTitleText">{video.title}</p>
                             </div> */}
                        </div>
                        </Col>

        ))}

                        <Col sm={12} md={6} className="cCenterButton">
                        <h2>Mastering Choreo: A Comprehensive In-Depth Demo</h2>
                        <p>Dive into an in-depth walkthrough of Choreo, showcasing how this powerful Internal Developer Platform simplifies development workflows, automates deployments, enhances API security, and streamlines cloud-native application delivery. From code to production, learn how Choreo helps developers accelerate app modernization with ease. </p>

                        </Col>
                    </Row>
                    <Modal 
                        show={showModal} 
                        onHide={handleClose}
                        size="lg"
                        centered
                        >
                        <Modal.Header closeButton>
                            <Modal.Title>
                                {videos2.find(v => v.id === selectedVideoId)?.title || 'Video Player'}
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="ratio ratio-16x9">
                                {selectedVideoId && (
        <iframe
                                    src={`https://www.youtube.com/embed/${selectedVideoId}?autoplay=1&mute=1${
        videos2.find(v => v.id === selectedVideoId)?.start ? `&start=${videos2.find(v => v.id === selectedVideoId).start}` : ''
        }`}
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    style={{ border: 0 }}
                                    />
        )}
                            </div>
                        </Modal.Body>
                    </Modal>
                </div>
                </Col>
            </Row>
        </Container>
    </div>





    <div className="cSection cBlackBG  cFooterSection">
        <Container>
            <Row>
                <Col sm={12} md={12} className="cCenterButton">
                <h2>Get Started with Choreo</h2>
                </Col>


                <Col sm={12} md={8} >
                <Row>
                    <Col sm={12} md={12} >
                    <div className='cWhiteRoundedHighlightedBox cBottomDiscodeBox'>
                        <Row>
                            {/* 
                             <Col sm={12} md={1}>
                             </Col> */}
                            {/* <Col sm={12} md={12}>
                             <img className='cDiscordIocn' src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/discord-icon-choreo.png" />
                             </Col> */}
                            <Col sm={12} md={12} className='cCommunityText'>
                            <h3>Got Questions? Join Our Community! </h3>
                            <p>Connect with fellow developers, exchange insights, and explore a wealth of resources to accelerate your cloud journey with Choreo. </p>
                            <a className="cChoreoButton cMainSignupButtom cLearnMore cDiscordButton" href="https://discord.com/invite/wso2" target="_blank" rel="noopener" aria-label="Learn More">Join Discord</a>
                            </Col>
                            {/* 
                             <Col sm={12} md={1}>
                             </Col> */}
                        </Row>

                    </div>
                    </Col>
                    <Col sm={12} md={12} >
                    <div className='cWhiteRoundedHighlightedBox cBottomDiscodeBox cTextLeft'>
                        <Row>
                            <Col sm={12} md={12} className='cCommunityText'>
                            <h3> Get Updates on Choreo</h3>
                            <p>Subscribe to our newsletter and get the latest product updates, exclusive content, and helpful tips to enhance your experience straight to your inbox!

                            </p>

                            <a className="cChoreoButton cMainSignupButtom cLearnMore " href="https://wso2.com/newsletter/choreo/" target="_blank" rel="noopener" aria-label="Learn More">Subscribe to the Choreo Newsletter</a>

                            </Col>
                        </Row>

                    </div>
                    </Col>

                </Row>
                </Col>














                <Col sm={12} md={4} >
                <iframe className='cFooterIframe optanon-category-C0001' data-src={mainSignupUrl} title="Signup IFrame"></iframe>
                </Col>
            </Row>
        </Container>
    </div>
</Layout>
        )
        }




