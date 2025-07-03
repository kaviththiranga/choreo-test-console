import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import Layout from '../layouts/LayoutLandingPage';



import React, { useState } from 'react';

import Image from 'next/image';

import { useRouter } from 'next/router';
import styles from '../styles/LandingPage.module.css';
import Modal from 'react-bootstrap/Modal';

  
export default function LayoutLandingPage() {
        
  const router = useRouter();
  const { query } = router;
  let baseGetStartedUrl = "";

  const [showModal, setShowModal] = React.useState(false);
  const [vSource, setVSource] = React.useState('');
  const handleClose = () => {
    setShowModal4(false);
  }
  
  
  
  const [showModal4, setShowModal4] = React.useState(false);
  const handleShow4 = (e) => {
    setVSource(e);
    setShowModal4(true);
  }
  
  const appendQueryParameters = (originalUrl, queryParams) => {
    const url = new URL(originalUrl);
    Object.keys(queryParams).forEach((key) => {
      url.searchParams.append(key, queryParams[key]);
    });
    return url.toString();
  };
  if (Object.keys(query).length > 0) {
    const baseDestinationUrl = "https://choreo.dev";
    baseGetStartedUrl = appendQueryParameters(baseDestinationUrl, query);
  } else {
    baseGetStartedUrl = "https://console.choreo.dev/?utm_source=website&utm_medium=website&utm_campaign=website_react_landing_page_310531";
  }

return (
<Layout>
   <div className={`${styles.cChoreoSection} ${styles.cIntro}`}   >
   <Container>
      <Row>
         <Col sm={12} md={6}>
         <h1>Level Up Your React Development Workflow</h1>
         <p>Automate deployments, secure your APIs with ease, and focus on what matters - crafting amazing React experiences.</p>
         <a className="cChoreoButton" href={baseGetStartedUrl} target="_blank" rel="noopener" aria-label="Learn More">Get Started for Free</a>
         </Col>
         <Col sm={12} md={6} className={styles.cHeroImgChoreo}>
         <img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/react_header-01.webp"/>           
         </Col>
      </Row>
   </Container>
   </div>
   <div className={`${styles.cChoreoSection} ${styles.cWhiteBG}`}>
      <Container>
         <Row>
         <Col sm={12} md={12} className={styles.cPaddingZero}>
         <div className={`${styles.cChallenge} ${styles.cLeftAlignHeadingH2} ${styles.cExperienceChoreo}`} >
         <h2>Explore the Power of Choreo
         </h2>
         <p>Your gateway to building secure and scalable React applications.</p>
         </div>
         </Col>
            <Col sm={6} md={4}>
           
            <div className={styles.cColwIcons}>
               <img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/Icons-38.webp" />
               <h3>Stop Wasting Time on Deployments</h3>
               <p>Deploy your apps with a single click</p>
            </div>
            </Col>
            <Col sm={12} md={4}>
            <div className={styles.cColwIcons}>
            <img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/Icons-39.webp" />
               <h3>Focus on Your UI/UX,<br/> Not Security</h3>
               <p>Security out of the  box</p>
            </div>
            </Col>
            <Col sm={12} md={4}>
            <div className={styles.cColwIcons}>
            <img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/Icons-29.webp" />
               <h3>Simplify <br/>Data Management</h3>
               <p>Provision databases easily</p>
            </div>
            </Col>
         </Row>
      </Container>
   </div>
   <div className={`${styles.cChoreoSection} ${styles.cLightGreyBG}`}>
   <Container>
      <Row>
         <Col sm={12} md={12} className={styles.cPaddingZero}>
         <div className={`${styles.cChallenge} ${styles.cLeftAlignHeadingH2}`} >
         <h2>Why Use Choreo
         </h2>
         </div>
         </Col>
      </Row>
      <Row className={styles.cSol}>
         <Col sm={12} md={12} className={styles.cPaddingZero}>
         <p>Choreo is your all-in-one platform designed to streamline your React development journey. Here's what we offer:</p>
         </Col>

        

         <Col sm={12} md={4} className={styles.cPaddingZero}>
         <div className={styles.ACText}>
            <h4  className={styles.FeatureText}>
               <strong>Simplified Development:  </strong>
               Focus on writing clean, reusable React components. Choreo's React <a href="https://wso2.com/library/blogs/multi-language-support-for-deploying-your-source-code-with-buildpacks/" target='_blank'>Buildpack</a> simplifies the build process, taking care of dependencies, so you can deploy production-ready React apps.

            </h4>
         </div>
         </Col>
         <Col sm={12} md={8}>
         <div className={styles.ACTextImg}>
         <img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/React-buildpack.png" alt="Simplified Development"/>
            <div className={styles.cAlignCenter}>
               {/* <p >Lorem Ipsum </p> */}
            </div>
         </div>
         </Col>
         <div className="clearfix"></div>



         <Col sm={12} md={4} className={styles.cPaddingZero}>
         <div className={styles.ACText}>
            <h4  className={styles.FeatureText}>
               <strong>One-click Deployments: </strong>
               Ditch the complex setup and deploy your React apps with ease. More coding, less stress.
            </h4>
         </div>
         </Col>
         <Col sm={12} md={8}>
         <div className={styles.ACTextImg}>
         <img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/deploy.png" alt="One-click deployments"/>
            <div className={styles.cAlignCenter}>
               {/* <p >Lorem Ipsum </p> */}
            </div>
         </div>
         </Col>
         <div className="clearfix"></div>
         <Col sm={12} md={4} className={styles.cPaddingZero}>
         <div className={styles.ACText}>
            <h4  className={styles.FeatureText}>
               <strong>Backend Integration Made Easy: </strong>
               Choreo seamlessly connects your React apps to backend APIs with Choreo's <a href="https://wso2.com/library/blogs/introducing-choreo-marketplace-and-connections/" target='_blank'>connection</a> capabilities. Secure communication, zero hassle.
            </h4>
         </div>
         </Col>
         <Col sm={12} md={8}>
         <div className={styles.ACTextImg}>
         <img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/connections_2.png" alt="Backend connection made easy"/>
            <div className={styles.cAlignCenter}>
               {/* <p >Lorem Ipsum</p> */}
            </div>
         </div>
         </Col>
         <div className="clearfix"></div>
         <Col sm={12} md={4} className={styles.cPaddingZero}>
         <div className={styles.ACText}>
            <h4  className={styles.FeatureText}>
               <strong>Authentication and Authorization, Simplified: </strong>
               Choreo's <a target='_blank' href='https://wso2.com/library/blogs/choreos-managed-authentication-for-single-page-web-applications/'>Managed Authentication</a> simplifies OAuth2/OIDC integration for single-page applications, ensuring secure authentication and authorization without the hassle. No need to worry about complex authentication processes – Choreo handles it for you. 
            </h4>
         </div>
         </Col>
         <Col sm={12} md={8}>
         <div className={styles.ACTextImg}>
         <img  src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/managed_auth_full_screen-01.webp" alt="Authentication and authorization, simplified"/>
            <div className={styles.cAlignCenter}>
               {/* <p >Lorem Ipsum</p> */}
            </div>
         </div>
</Col>



         <div className="clearfix"></div>
         <Col sm={12} md={4} className={styles.cPaddingZero}>
         <div className={styles.ACText}>
            <h4  className={styles.FeatureText}>
               <strong>Database Provisioning: </strong>
               Say goodbye to manual database setups. Choreo enables you to provision databases with ease, saving you time and effort. Focus on building features while Choreo handles database management for your React apps.
            </h4>
         </div>
         </Col>
         <Col sm={12} md={8}>
         <div className={styles.ACTextImg}>
         <img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/database-createview.png" alt="Database Provisioning"/>
            <div className={styles.cAlignCenter}>
               {/* <p >Lorem Ipsum</p> */}
            </div>
         </div>
       </Col>




       <div className="clearfix"></div>
         <Col sm={12} md={4} className={styles.cPaddingZero}>
         <div className={`${styles.ACText} ${styles.cTopMargin}`}>
            <h4  className={styles.FeatureText}>
               <strong>Granular User Management: </strong>
               Implement role-based access control (RBAC) and manage user permissions with ease. Ensure the right users have the right access, every time.

            </h4>
         </div>
         </Col>
         <Col sm={12} md={8}>
         <div className={styles.ACTextImg}>
         <img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/user-management.png" alt="Granular User Management"/>
            <div className={styles.cAlignCenter}>
               {/* <p >Lorem Ipsum</p> */}
            </div>
         </div>
       </Col>




       <div className="clearfix"></div>
         <Col sm={12} md={4} className={styles.cPaddingZero}>
         <div className={`${styles.ACText} ${styles.cTopMargin}`}>
            <h4  className={styles.FeatureText}>
               <strong>Real-time Monitoring and Insights:</strong>
               Gain visibility into your React applications with Choreo's real-time monitoring and insights. Monitor performance metrics, track errors, and gain insights into your application's behavior, allowing you to optimize performance and deliver a better user experience.

            </h4>
         </div>
         </Col>
         <Col sm={12} md={8}>
         <div className={styles.ACTextImg}>
         <img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/observability1.png" alt="Real-time Monitoring and Insights"/>
            <div className={styles.cAlignCenter}>
               {/* <p >Lorem Ipsum</p> */}
            </div>
         </div>
       </Col>



       <Col sm={12} md={12}>
       <div  className={`${styles.cLeftContent} ${styles.cMarginBottom} ${styles.cTopMarginInlineButton}`}>
       <a class="cChoreoButton" href="https://wso2.com/choreo/docs/quick-start-guides/deploy-a-web-application-that-consumes-a-backend-service/" target="_blank" rel="noopener" aria-label="Learn More">Quick Start Guide</a>
</div>
     
       </Col>

      


      </Row>
   </Container>

</div>






<div className={`${styles.cChoreoSection} ${styles.cWhiteBG} ${styles.cPaddingBottom}`}>

<Container>
<Row>
   <Col sm={12} md={12} className={styles.cPaddingZero}>
   <div className={`${styles.cChallenge} ${styles.cLeftAlignHeadingH2} ${styles.cGetStarted}`} >
   <h2>Get Started
   </h2>
   </div>
   </Col>
</Row>
   <Row>
      {/* <Col sm={12} md={8}>
      <div className={`${styles.cResouces} ${styles.cLeftAlignHeadingH2}`}>
      
      <a onClick={() => handleShow4('https://www.youtube.com/embed/sX3fOk5118g')}  id="cMainVideoFrame1" data-toggle="modal" data-src="https://www.youtube.com/embed/sX3fOk5118g" data-target="">
        <img className={styles.CTimage} src="https://placehold.co/650x350/png" />
      </a>
    
  <Modal show={showModal4} onHide={handleClose} className={styles.videoModal}>
    <Modal.Header closeButton className={styles.videoHeader}>
    </Modal.Header>
    <Modal.Body className={styles.videoBody}>
      <iframe className={styles.videoIframe}
        allow="fullscreen;autoplay;"
        id="video"
        src={vSource + `?autoplay=1&start=0`}>
      </iframe>
    </Modal.Body>
  </Modal>
      
      </div>
      </Col> */}
      
      

               <Col sm={12} md={4}>
                  <a href="https://medium.com/choreo-tech-blog/deploy-your-react-app-with-choreo-in-just-5-minutes-ca6ac0a0933e" target='_blank'>
                     <div className={styles.cResoucesCard}>
                        <img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/blogs/Banner_56.webp" />
                        <div className={styles.cResoucesCardInfo}>
                           <h4>Deploy Your React App with Choreo in Just 5 Minutes</h4>
                        </div>
                        <span className={styles.cReadBlogLink}>Read Blog</span>

                     </div>
                  </a>
               </Col>

               <Col sm={12} md={4}>
                  <a href="https://medium.com/choreo-tech-blog/secure-your-react-spas-with-choreo-managed-authentication-8b7d2d45147b" target='_blank'>
                     <div className={styles.cResoucesCard}>
                        <img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/blogs/Banner_57.webp" />
                        <div className={styles.cResoucesCardInfo}>
                           <h3>Secure Your React SPAs With Choreo Managed Authentication</h3>
                        </div>
                        <span className={styles.cReadBlogLink}>Read Blog</span>
                     </div>
                  </a>
               </Col>

<Col sm={12} md={4}>
                  <a href="https://medium.com/choreo-tech-blog/deploying-react-apps-with-choreo-and-managed-databases-c1b85eb0872a" target='_blank'>
                     <div className={styles.cResoucesCard}>
                        <img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/blogs/Banner_60.webp" />
                        <div className={styles.cResoucesCardInfo}>
                           <h4>Deploying React Apps with Choreo and Managed Databases</h4>
                        </div>
                        <span className={styles.cReadBlogLink}>Read Blog</span>
                     </div>
                  </a>
               </Col>

               <Col sm={12} md={4}>
                  <a href="https://medium.com/choreo-tech-blog/monitoring-and-debugging-your-react-app-in-production-with-choreo-and-sentry-e5a710d6fb4e" target='_blank'>
                     <div className={styles.cResoucesCard}>
                        <img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/blogs/Banner_58.webp" />
                        <div className={styles.cResoucesCardInfo}>
                           <h4>Monitoring and Debugging Your React App in Production with Choreo and Sentry</h4>
                        </div>
                        <span className={styles.cReadBlogLink}>Read Blog</span>
                     </div>
                  </a>
               </Col>

               <Col sm={12} md={4}>
                  <a href="https://medium.com/choreo-tech-blog/building-scalable-react-applications-with-choreo-best-practices-6d177303be97" target='_blank'>
                     <div className={styles.cResoucesCard}>
                        <img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/blogs/Banner_59.webp" />
                        <div className={styles.cResoucesCardInfo}>
                           <h4>Building Scalable React Applications with Choreo: Best Practices</h4>
                        </div>
                        <span className={styles.cReadBlogLink}>Read Blog</span>
                     </div>
                  </a>
               </Col>


               <Col sm={12} md={4}>
                  <a href="https://medium.com/choreo-tech-blog/setting-up-custom-domains-for-web-apps-with-choreo-395bad73f24c" target='_blank'>
                     <div className={styles.cResoucesCard}>
                        <img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/Banner_64.webp" />
                        <div className={styles.cResoucesCardInfo}>
                           <h4>Setting Up Custom Domains for Web Apps with Choreo</h4>
                        </div>
                        <span className={styles.cReadBlogLink}>Read Blog</span>
                     </div>
                  </a>
               </Col>


               
               
    

   
   
   </Row>
</Container>
</div>











   <div className={`${styles.cChoreoSection} ${styles.zIndexFooter}`}>
   <Container>
      <Row>
      {/* <Col sm={12} md={2}></Col> */}
      <Col sm={12} md={12}>
             
                <div className={styles.cLeftContent}>
                    <h2> Ready to elevate your React development experience?
                    </h2>
<h5> Sign up to Choreo now and unlock a world of possibilities for your projects.<br/>
Join thousands of developers who trust Choreo for their React development needs
</h5>

                  

  
                    <a  className={`${styles.cChoreoButton} ${styles.cMainSignupButtom} ${styles.cBottomTry}`}  href={baseGetStartedUrl} target="_blank" id="get_started_footer_menu" aria-label="Get Started Free">Get Started for Free</a>
                 
               
                   
                </div>
            </Col>
            {/* <Col sm={12} md={2}></Col> */}
        </Row>
    </Container>
  </div>












</Layout>
)
}