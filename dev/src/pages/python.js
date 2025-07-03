import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import Layout from '../layouts/LayoutLandingPagePython';

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
    baseGetStartedUrl = "https://console.choreo.dev/?utm_source=website&utm_medium=website&utm_campaign=website_python_landing_page_240719";
  }

return (
<Layout>
   <div className={`${styles.cChoreoSection} ${styles.cIntro}`}   >
   <Container>
      <Row>
         <Col sm={12} md={6}>
         <h1>Transform Your Python Workflow with Choreo</h1>
         <p>Automate your builds and deployments, scale with ease, and focus on writing amazing Python code without the hassle of managing infrastructure complexities.
</p>
         <a className="cChoreoButton" href={baseGetStartedUrl} target="_blank" rel="noopener" aria-label="Learn More">Get Started for Free</a>
         </Col>
         <Col sm={12} md={6} className={styles.cHeroImgChoreo}>
         <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/python_header-01-01.webp"/>           
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
         <p>Your gateway to building secure and scalable Python applications.  </p>
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
               <h3>Focus on Your Code, Not Security</h3>
               <p>Security out of the  box</p>
            </div>
            </Col>
            <Col sm={12} md={4}>
            <div className={styles.cColwIcons}>
            <img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/Icons-29.webp" />
               <h3>Scale Beyond <br/>Limits</h3>
               <p>Auto-scale apps for peak performance</p>
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
         <p>Choreo is your all-in-one platform designed to streamline your Python development journey, supporting popular frameworks like Django, Flask, Pyramid, and many more. Here's what we offer:</p>
         </Col>

        

         <Col sm={12} md={4} className={styles.cPaddingZero}>
         <div className={styles.ACText}>
            <h4  className={styles.FeatureText}>
               <strong>Streamlined Workflow:  </strong>

               Choreo's Python <a target='_blank' href="https://wso2.com/library/blogs/multi-language-support-for-deploying-your-source-code-with-buildpacks/">buildpack</a> simplifies the deployment process for any application type—whether it's a service, task, or web app. By eliminating the need for manual build scripts or deployment artifacts, it allows you to focus on writing code efficiently and deploying seamlessly.

       </h4>
         </div>
         </Col>
         <Col sm={12} md={8}>
         <div className={styles.ACTextImg}>
         <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/buildpack.webp" alt="Streamlined Workflow"/>
            <div className={styles.cAlignCenter}>
               {/* <p >Lorem Ipsum </p> */}
            </div>
         </div>
         </Col>
         <div className="clearfix"></div>



         <Col sm={12} md={4} className={styles.cPaddingZero}>
         <div className={styles.ACText}>
            <h4  className={styles.FeatureText}>
               <strong>CI/CD Made Easy:</strong>
               Streamline development with automated deployments. Designed for rapid development and testing. Our deployment tools streamline your workflow, allowing you to push changes quickly and efficiently.
            </h4>
         </div>
         </Col>
         <Col sm={12} md={8}>
         <div className={styles.ACTextImg}>
         <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/CI_CD.webp" alt="One-click deployments"/>
            <div className={styles.cAlignCenter}>
               {/* <p >Lorem Ipsum </p> */}
            </div>
         </div>
         </Col>
         <div className="clearfix"></div>
         <Col sm={12} md={4} className={styles.cPaddingZero}>
         <div className={styles.ACText}>
            <h4  className={styles.FeatureText}>
               <strong>Security Built-in:</strong>
               Ensure your Flask services are secure with Choreo's robust authentication and authorization mechanisms. Protect your applications effortlessly from unauthorized access and maintain data integrity with Choreo Auth.

            </h4>
         </div>
         </Col>
         <Col sm={12} md={8}>
         <div className={styles.ACTextImg}>
         <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/security.png" alt="Backend connection made easy"/>
            <div className={styles.cAlignCenter}>
               {/* <p >Lorem Ipsum</p> */}
            </div>
         </div>
         </Col>
         <div className="clearfix"></div>
         <Col sm={12} md={4} className={styles.cPaddingZero}>
         <div className={styles.ACText}>
            <h4  className={styles.FeatureText}>
               <strong>VS Code Plugin: </strong>
               Never leave your development environment again! <a href="https://wso2.com/library/blogs/deploy-and-manage-cloud-apps-from-vs-code-with-the-choreo-extension/" target='_blank'>Choreo's VS Code plugin</a> empowers you to build, deploy, and test your Django applications directly from your IDE, maximizing efficiency and minimizing context switching.
           </h4>
         </div>
         </Col>
         <Col sm={12} md={8}>
         <div className={styles.ACTextImg}>
         <img  src="https://wso2.cachefly.net/wso2/sites/all/image_resources/VS-Code-Plugin-2.webp" alt="Authentication and authorization, simplified"/>
            <div className={styles.cAlignCenter}>
               {/* <p >Lorem Ipsum</p> */}
            </div>
         </div>
</Col>

 <div className="clearfix"></div>
         <Col sm={12} md={4} className={styles.cPaddingZero}>
         <div className={styles.ACText}>
            <h4  className={styles.FeatureText}>
               <strong>Efficient Scaling:  </strong>
               Choreo understands the challenges with building highly-scalable Python applications. Our platform seamlessly facilitates horizontal scaling, distributing the load across multiple nodes to optimize resource utilization and enable high concurrency for your Python services.
           </h4>
         </div>
         </Col>
         <Col sm={12} md={8}>
         <div className={styles.ACTextImg}>
         <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/Efficient_Scaling.png" alt="Database Provisioning"/>
            <div className={styles.cAlignCenter}>
               {/* <p >Lorem Ipsum</p> */}
            </div>
         </div>
       </Col>




       <div className="clearfix"></div>
         <Col sm={12} md={4} className={styles.cPaddingZero}>
         <div className={`${styles.ACText} ${styles.cTopMargin}`}>
            <h4  className={styles.FeatureText}>
               <strong>Database Provisioning:</strong>
               Say goodbye to manual database setups. Choreo enables you to provision databases with ease, saving you time and effort. Focus on building features while Choreo handles database management for your Python apps.
            </h4>
         </div>
         </Col>
         <Col sm={12} md={8}>
         <div className={styles.ACTextImg}>
         <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/database-createview.webp" alt="Granular User Management"/>
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
             
               Gain deep insights into your Python applications with Choreo's integrated logging and observability metrics. Monitor performance, identify issues, and optimize your code with ease using our comprehensive analytics tools.
            </h4>
         </div>
         </Col>
         <Col sm={12} md={8}>
         <div className={styles.ACTextImg}>
         <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/observability-2.webp" alt="Real-time Monitoring and Insights"/>
            <div className={styles.cAlignCenter}>
               {/* <p >Lorem Ipsum</p> */}
            </div>
         </div>
       </Col>



       <Col sm={12} md={12}>
       <div  className={`${styles.cLeftContent} ${styles.cMarginBottom} ${styles.cTopMarginInlineButton}`}>
       <a class="cChoreoButton" href="https://wso2.com/choreo/docs/quick-start-guides/deploy-your-first-service/" target="_blank" rel="noopener" aria-label="Learn More">Quick Start Guide</a>
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
   <Col sm={12} md={3}></Col>
      <Col sm={12} md={6}>
      <div className={`${styles.cResouces} ${styles.cLeftAlignHeadingH2}`}>
      
      <a onClick={() => handleShow4('https://www.youtube.com/embed/c-QsfbznSXI')}  id="cMainVideoFrame1" data-toggle="modal" data-src="https://www.youtube.com/embed/sX3fOk5118g" data-target="">
        <img className={styles.CTimage} src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/cybertruck/Thumbnail-05.webp" />
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
      <div className={styles.cSpacerLine}>&nbsp;</div>
      </div>
      </Col>
      <Col sm={12} md={3}></Col>
      </Row>
      <Row>

               <Col sm={12} md={4}>
                  <a href="https://medium.com/choreo-tech-blog/monitoring-and-debugging-python-applications-in-production-with-choreo-bf809687bcbe" target='_blank'>
                     <div className={styles.cResoucesCard}>
                        <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/Monitoring-and-Debugging-Python-Applications-in-Production-with-Choreo.webp" />
                        <div className={styles.cResoucesCardInfo}>
                           <h3>Monitoring and Debugging Python Applications in Production with Choreo</h3>
                        </div>
                        <span className={styles.cReadBlogLink}>Read Blog</span>

                     </div>
                  </a>
               </Col>

               <Col sm={12} md={4}>
                  <a href="https://medium.com/choreo-tech-blog/using-choreos-vs-code-extension-for-seamless-python-development-2a2edb4a367e" target='_blank'>
                     <div className={styles.cResoucesCard}>
                        <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/Using-Choreo-VS-Code-Extension-for-Seamless-Python-Development-2.webp" />
                        <div className={styles.cResoucesCardInfo}>
                           <h3>Using Choreo’s VS Code Extension for Seamless Python Development</h3>
                        </div>
                        <span className={styles.cReadBlogLink}>Read Blog</span>
                     </div>
                  </a>
               </Col>

       <Col sm={12} md={4}>
                  <a href="https://medium.com/choreo-tech-blog/building-and-scaling-a-genai-application-with-python-and-choreo-2679d68c0648" target='_blank'>
                     <div className={styles.cResoucesCard}>
                        <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/Building-a-Scalable-REST-API-with-FastAPI-and-Choreo.webp" />
                        <div className={styles.cResoucesCardInfo}>
                           <h3>Building and Scaling a GenAI Application with Python and Choreo</h3>
                        </div>
                        <span className={styles.cReadBlogLink}>Read Blog</span>
                     </div>
                  </a>
               </Col>

               <Col sm={12} md={4}>
                  <a href="https://medium.com/choreo-tech-blog/building-a-scalable-rest-api-with-fastapi-and-choreo-cb9563b1c38d" target='_blank'>
                     <div className={styles.cResoucesCard}>
                        <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/Building-a-Scalable-REST-API-with-FastAPI-and-Choreo.webp" />
                        <div className={styles.cResoucesCardInfo}>
                           <h3> Building a Scalable REST API with FastAPI and Choreo</h3>
                        </div>
                        <span className={styles.cReadBlogLink}>Read Blog</span>
                     </div>
                  </a>
               </Col>

               <Col sm={12} md={4}>
                  <a href="https://medium.com/choreo-tech-blog/crafting-production-ready-genai-a-step-by-step-guide-with-langchain-and-choreo-5e58cdc8afcb" target='_blank'>
                     <div className={styles.cResoucesCard}>
                        <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/LangChain-and-Choreo.webp" />
                        <div className={styles.cResoucesCardInfo}>
                           <h3>Crafting Production-Ready GenAI: A Step-by-Step Guide with LangChain and Choreo</h3>
                        </div>
                        <span className={styles.cReadBlogLink}>Read Blog</span>
                     </div>
                  </a>
               </Col>


               <Col sm={12} md={4}>
                  <a href="https://medium.com/choreo-tech-blog/effortless-development-of-cloud-native-applications-in-django-with-choreo-1ca4b349c58c" target='_blank'>
                     <div className={styles.cResoucesCard}>
                        <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/Effortless-Development-of-Cloud-Native-Applications-in-Django-with-Choreo.webp" />
                        <div className={styles.cResoucesCardInfo}>
                           <h3>Effortless Development of Cloud-Native Applications in Django with Choreo</h3>
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
                    <h2> Ready to unleash the full potential of your Python projects? 
                    </h2>
<h5> Sign up for a free Choreo account today!
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