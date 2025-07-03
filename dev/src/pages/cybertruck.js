import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Layout from '../layouts/LayoutChallange';
import styles from '../styles/CodeChallange.module.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useRouter } from 'next/router';
import Image from 'next/image'
export default function cybertruck() {
  const [showModal, setShowModal] = React.useState(false);
  const [vSource, setVSource] = React.useState('');
  const handleClose = () => {
    setShowModal(false);
    setShowModal2(false);
    setShowModal3(false);
    setShowModal4(false);
  }
  const handleShow = (e) => {
    setVSource(e);
    setShowModal(true);
  }
  const [showModal2, setShowModal2] = React.useState(false);
  const handleShow2 = (e) => {
    setVSource(e);
    setShowModal2(true);
  }

  const [showModal3, setShowModal3] = React.useState(false);
  const handleShow3 = (e) => {
    setVSource(e);
    setShowModal3(true);
  }
  const [showModal4, setShowModal4] = React.useState(false);
  const handleShow4 = (e) => {
    setVSource(e);
    setShowModal4(true);
  }
  // VIDEOS
  const [isMuted, setIsMuted] = useState(true); // Initialize with muted state
  const [cSoundOn, setButtonClass] = useState(''); // Initialize with an empty class
  const router = useRouter();
  const { query } = router;
  let baseIframeUrl = "";
  const toggleMute = () => {
    setIsMuted(!isMuted);
    // setButtonClass(isMuted ? styles.cEnable : styles.cDisable);
    setButtonClass(isMuted ? 'enabled' : 'disabled');
  };
  const appendQueryParameters = (originalUrl, queryParams) => {
    const url = new URL(originalUrl);
    Object.keys(queryParams).forEach((key) => {
      url.searchParams.append(key, queryParams[key]);
    });
    return url.toString();
  };
  if (Object.keys(query).length > 0) {
    const baseDestinationUrl = "https://choreo.dev?ref=CybertruckCodeChallenge";
    baseIframeUrl = appendQueryParameters(baseDestinationUrl, query);
  } else {
    baseIframeUrl = "https://choreo.dev/?utm_source=CybertruckCodeChallenge&utm_medium=website&utm_campaign=website_CybertruckCodeChallenge_240207&ref=CybertruckCodeChallenge";
  }
  return (
    <Layout className={styles.cBodyBg}>
      <section className={`${styles.cHackSections} ${styles.cCyberTruckIntro}`}>
        {/* 
   <video id="myVideo" autoPlay muted loop className={styles.cCybertruckvideo}>
      <source src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/cybertruck/cybertruck.mp4" type="video/mp4" />
   </video>
   */}
        <video
          id="myVideo"
          autoPlay
          muted={isMuted} // Set the muted attribute based on the state
          loop
          className={`${styles.cCybertruckvideo} ${styles.cDeskVideo}`}
        >
          <source
            src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/cybertruck/dev-intro.webm"
            type="video/webm"
          />
        </video>
        <video
          id="myVideo"
          autoPlay
          muted={isMuted} // Set the muted attribute based on the state
          loop
          className={`${styles.cCybertruckvideo} ${styles.cMobileVideo}`}
        >
          <source
            src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/cybertruck/dev-intro.webm"
            type="video/webm"
          />
        </video>
        {/* Button to toggle sound */}
        {/* <button className={styles.cMuteButton} onClick={toggleMute}>
   {isMuted ? 'Enable Sound' : 'Mute Sound'}
   </button>
   */}
        <div className="container">
          <div className={styles.cTranslationsBox}>
            <div className={styles.dropdown}>
              <span>
                <p>EN</p>
                <Image
                  src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/cybertruck/world.webp"
                  alt="WSO2 Language"
                  width={20}
                  height={20}
                  className={`${styles.cCyberTruckIntro} ${styles.cGlobe}`}
                />
              </span>
              {/* <Image style={{ height: '20px', width: '20px' }} className={`${styles.cCyberTruckIntro} ${styles.cGlobe}`} src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/cybertruck/world.webp" alt="WSO2 Language" loading="lazy" /></span> */}
              <div className={styles.DropPannel} >
                <a className={styles.cLang} href="/br/cybertruck" aria-label='Portuguese'>
                  {/* <img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/4x3/br.svg" />  */}
                  <Image
                    src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/cybertruck/br.webp"
                    alt="Brazil Flag"
                    width={20}
                    height={15}
                  />
                  <span>Portuguese</span>
                </a>
                <a className={styles.cLang} href="/es/cybertruck" aria-label='Spanish'>
                  {/* <img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/4x3/es.svg" />  */}
                  <Image
                    src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/cybertruck/es.webp"
                    alt="Spain Flag"
                    width={20}
                    height={15}
                  />
                  <span>Spanish</span>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.cCarImage} data-aos="fade-up" data-aos-duration="3000"></div>
          {/* <a className={styles.cWatchFullVideo} href="https://www.youtube.com/watch?v=3nwDB7O_kCI" target='_blank'>Watch Full Video</a> */}
          {/* 
      <div className={styles.cBgGradient}></div>
      */}
          <Row>
            <div className="col-sm-12 col-md-2 col-lg-1"></div>
            {/* {`${styles.xxxx} navbar-dark`} */}
            <div className={`col-sm-12 col-md-8 col-lg-10 ${styles.cCyberTruckIntroTextContainer}`}>
              <h1>WSO2 CODE CHALLENGE
                <span>WIN $100,00 OR A <br />TESLA CYBERTRUCK</span>
              </h1>
              <p>Ready for the ultimate coding challenge? Build an app on <a className={styles.cNewWindow} target='_blank' href="https://choreo.dev/?utm_source=CybertruckCodeChallenge&utm_medium=website&utm_campaign=website_CybertruckCodeChallenge_240207">Choreo</a> and stand a chance to win $100,000 or a Tesla Cybertruck!
              </p>
              {/* 
         <h2>FEBRUARY 7 - APRIL 30 </h2>
         */}
              <h2 className={styles.cThin}>Your chance to win big starts now.</h2>
              <a href="#challenge" className={`${styles.cButtonN_Standard} ${styles.cLeftCyberButton}`} aria-label="What do I have to do?">What do I have to do?</a>
            </div>
            <div className="col-sm-12 col-md-2 col-lg-1">
            </div>
          </Row>
          <div className={styles.box}>
            <a aria-label="Choreo Challenge" href="#Challenge">
              <span></span>
              <span></span>
              <span></span>
            </a>
          </div>
        </div>
      </section>
      <section className={`${styles.cHackSections} ${styles.cChallengeSection}`} id="Challenge">
        <Container>
          <Row>
            <div className="col-sm-12 col-md-12 col-lg-12 ">
              <h2 id="challenge" className={styles.cH2a}>Challenge</h2>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12 ">
              <div className={styles.cNoheight} data-aos="zoom-in">
                {/* 
               <h3>Code and <br />Deploy</h3>
               */}
                <p>The goal of this challenge is for individual developers to experience <a aria-label='Choreo' className={styles.cNewWindow} target='_blank' href="https://choreo.dev/?utm_source=CybertruckCodeChallenge&utm_medium=website&utm_campaign=website_CybertruckCodeChallenge_240207">Choreo</a>, WSO2's internal developer platform as a service, using the free Developer Tier. The more you do with Choreo, the more chances you have to win! </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12 ">
              <p className={styles.cCenterText2}>Every eligible app wins an entry in the draw. To be eligible, you need to do the following:</p>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 ">
              <div className={styles.cChallenge} data-aos="fade-up-right">
                <h3>Develop and Deploy</h3>
                <p>Use any language, any IDE, and GitHub to develop your app and run it in Choreo for free.</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 ">
              <div className={styles.cChallenge} data-aos="fade-up">
                <h3>Frontend and Backend</h3>
                <p>Your app needs both a frontend as well as backend APIs.
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 ">
              <div className={styles.cChallenge} data-aos="fade-up-left">
                <h3>Deploy to Production</h3>
                <p>Promote your app to the Choreo production <a aria-label='environment' target='_blank' href="https://wso2.com/choreo/docs/choreo-concepts/environments/">environment</a>.</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12  cHeight">
              <div className={styles.cChallenge} data-aos="fade-up">
                <div className="col-sm-12 col-md-6 col-lg-12 "></div>
                <h3>Maximize Your Chances of Winning</h3>
                <p>Boost your odds by enhancing your app with the following additions:</p>
                <ul className={styles.cChallengeULmargin}>
                  <li>Use a connection to integrate the backend API to the frontend</li>
                  <li>
                    More components<sup>*</sup>:
                    <ul>
                      <li>Databases </li>
                      <li>Manual or scheduled jobs</li>
                      <li>Multiple <a target='_blank' href="https://wso2.com/choreo/docs/choreo-concepts/project/" rel="noopener" aria-label="projects">projects</a></li>
                      <li><a target='_blank' href="https://wso2.com/choreo/docs/references/faq/#q-what-is-the-difference-between-an-internal-and-external-api" aria-label="Internal and external APIs">Internal and external APIs</a></li>
                    </ul>
                  </li>
                  <li>Use <a href="https://wso2.com/asgardeo/?utm_source=CybertruckCodeChallenge&utm_medium=website&utm_campaign=website_CybertruckCodeChallenge_240207" target='_blank' rel="noopener" aria-label="Asgardeo">Asgardeo</a> for app authentication</li>
                  <li>Use <a href="https://ballerina.io/?utm_source=CybertruckCodeChallenge&utm_medium=website&utm_campaign=website_CybertruckCodeChallenge_240207" target='_blank' rel="noopener" aria-label="Ballerina">Ballerina</a> to implement backend logic or APIs</li>
                </ul>
                <p>The more you do, the greater your chances of winning the Cybertruck or $100,000!
                </p>
                <p className={styles.cHighligtedText}> Each Addition = 1 Additional Entry
                </p>
                <p className={styles.cItalic}>* Up to the free tier limit</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12 ">
              <div className={styles.cNoHeightBox} data-aos="fade-up">
                <Row>
                  <div className="col-sm-12 col-md-4 col-lg-4 ">
                    <p>Follow <a target='_blank' href="https://wso2.com/choreo/docs/" aria-label='Choreo docs'>Choreo docs</a> to get started.</p>
                  </div>
                  <div className="col-sm-12 col-md-4 col-lg-4 ">
                    <div className={styles.cCenterText} >
                      <p>Questions? <a aria-label='Discord' target='_blank' href="https://discord.com/invite/wso2">
                        <Image
                          src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/cybertruck/discord.webp"
                          alt="Discord"
                          width={30}
                          height={35}
                          className={styles.cDiscord} style={{ height: '30px', width: '35px' }}
                        />
                        {/* <img alt='Discord' className={styles.cDiscord} style={{ height: '30px', width: '35px' }} src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/cybertruck/discord.webp"/>
                           */}
                      </a>
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-4 col-lg-4 ">
                    <p>Terms and conditions apply. Read more <a aria-label='Terms and conditions' target='_blank' href="/cybertruck/terms-and-conditions/">here</a>.</p>
                  </div>
                </Row>
              </div>
            </div>
            {/* <div className="col-sm-12 col-md-12 col-lg-12">
              <div className={styles.cCybertrucCenterText}>
                <a aria-label='Sign Up' href={baseIframeUrl} target='_blank' className={`${styles.cButtonN_Standard} ${styles.cLeftCyberButton} ${styles.cButtonWidth}`}>Sign Up to Choreo and Win a Tesla Cybertruck</a>
              </div>
            </div> */}
          </Row>
        </Container>
      </section>
     



      <section className={`${styles.cHackSections} ${styles.cWinnerAnnouncement}`} id="winners">
        <div className="container">
          <Row>
            <div className="col-sm-12 col-md-12 col-lg-12 ">
              <h2 className={styles.cWinnerVideoSectionH2}>Congratulations <span>to all the winners!</span></h2>

            </div>
</Row>
            <Row className={styles.cWinnerVideoSection}>
            <Col sm={12} md={6} className={styles.videoImage2}>

              {/* <h3>Why should you start programming with Ballerina?</h3><br /> */}
              {/* <h3></h3> */}
              
              <a onClick={() => handleShow('https://www.youtube.com/embed/sX3fOk5118g')}  id="cMainVideoFrame1" data-toggle="modal" data-src="https://www.youtube.com/embed/sX3fOk5118g" data-target="">
              <img className={styles.CTimage} src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/cybertruck/V_thumbnail.webp" alt="Getting Started with Choreo for the WSO2 Code Challenge!  Community Call 4" width={100} height={100} />
                <Image className={styles.cGPvideo} src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/cybertruck/icons-06-01.webp" alt="Cyber truck winners" width={100} height={100} />
                {/* <span id="cplayvideo" className={styles.videoPlayButton} data-toggle="modal" data-src="https://www.youtube.com/embed/NYrKeElltg8" data-target="#iBallerinaVideo">
                <span></span>
              </span> */}
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

            </Col>
            <div className="col-sm-12 col-md-6">
              
              <div className={styles.cGPwinnerCard} data-aos="zoom-in">
              <h3>Grand Prize <span>Winner</span></h3>
              <img  className={styles.cGPWinnerProfile} src="https://wso2.cachefly.net/wso2/sites/all/2023/images/webp/winners/PasinduJayaweera2.jpg" />
              <span className={styles.cGPWinnerName}>Pasindu Jayaweera</span>
              {/* <span className={styles.cGPWinnerDetails}>Adipiscing elit sed do eiusmod</span> */}
              </div>
               
            </div>
            </Row>

         
          <Row>
            <div className="col-sm-12 col-md-12 col-lg-12 ">


              <Row>
              <h3 className={styles.cH3Winners}>10 MacBook Pro Winners</h3>
             


            



                <div>
                  <ul className={styles.cWinnersListModel}>
                    <li>
                      <div className={styles.cOtherWinnerCard} data-aos="zoom-in">
                          <img className={styles.cOtherWinnerProfile} src="https://wso2.cachefly.net/wso2/sites/all/2023/images/webp/winners/Ali-Ahamed-Thowfeek.jpg" />
                          <span className={styles.cOtherWinnerName}>Ali Ahamed Thouwfeek</span>
                          {/* <span className={styles.cOtherWinnerDetails}>Adipiscing elit sed do eiusmod</span> */}
                        </div>
                    </li>
                    <li>
                      <div className={styles.cOtherWinnerCard} data-aos="zoom-in">
                      <img className={styles.cOtherWinnerProfile} src="https://wso2.cachefly.net/wso2/sites/all/2023/images/webp/winners/Anuradha-Basnayake.jpg" />
                          <span className={styles.cOtherWinnerName}>Anuradha Basnayake</span>
                          {/* <span className={styles.cOtherWinnerDetails}>Adipiscing elit sed do eiusmod</span> */}
                        </div>
                    </li>
                    <li>
                      <div className={styles.cOtherWinnerCard} data-aos="zoom-in">
                      <img className={styles.cOtherWinnerProfile} src="https://wso2.cachefly.net/wso2/sites/all/2023/images/webp/winners/Atheeque-Ahmed.jpg" />
                          <span className={styles.cOtherWinnerName}>Atheeque Ahmed</span>
                          {/* <span className={styles.cOtherWinnerDetails}>Adipiscing elit sed do eiusmod</span> */}
                        </div>
                    </li>
                    <li>
                      <div className={styles.cOtherWinnerCard} data-aos="zoom-in">  
                      <img className={styles.cOtherWinnerProfile} src="https://wso2.cachefly.net/wso2/sites/all/2023/images/webp/winners/Daham-Positha.jpg" />
                          <span className={styles.cOtherWinnerName}>Daham Pathiraja</span>
                          {/* <span className={styles.cOtherWinnerDetails}>Adipiscing elit sed do eiusmod</span> */}
                        </div>
                    </li>
                    <li>
                      <div className={styles.cOtherWinnerCard} data-aos="zoom-in">
                      <img className={styles.cOtherWinnerProfile} src="https://wso2.cachefly.net/wso2/sites/all/2023/images/webp/winners/Dilantha-Silva.jpg" />
                          <span className={styles.cOtherWinnerName}>Dilantha <br/>Silva</span>
                          {/* <span className={styles.cOtherWinnerDetails}>Adipiscing elit sed do eiusmod</span> */}
                        </div>
                    </li>
                    <li>
                      <div className={styles.cOtherWinnerCard} data-aos="zoom-in">
                      <img className={styles.cOtherWinnerProfile} src="https://wso2.cachefly.net/wso2/sites/all/2023/images/webp/winners/Kasun-Dissanayake.jpg" />
                          <span className={styles.cOtherWinnerName}>Kasun <br/>Dissanayake</span>
                          {/* <span className={styles.cOtherWinnerDetails}>Adipiscing elit sed do eiusmod</span> */}
                        </div>
                    </li>
                    <li>
                      <div className={styles.cOtherWinnerCard} data-aos="zoom-in">
                      <img className={styles.cOtherWinnerProfile} src="https://wso2.cachefly.net/wso2/sites/all/2023/images/webp/winners/Lahiru-Perera.jpg" />
                          <span className={styles.cOtherWinnerName}>Lahiru <br/>Perera</span>
                          {/* <span className={styles.cOtherWinnerDetails}>Adipiscing elit sed do eiusmod</span> */}
                        </div>
                    </li>
                    <li>
                      <div className={styles.cOtherWinnerCard} data-aos="zoom-in">
                      <img className={styles.cOtherWinnerProfile} src="https://wso2.cachefly.net/wso2/sites/all/2023/images/webp/winners/Rohith-Kumar.jpg" />
                          <span className={styles.cOtherWinnerName}>Rohith <br/>Kumar</span>
                          {/* <span className={styles.cOtherWinnerDetails}>Adipiscing elit sed do eiusmod</span> */}
                        </div>
                    </li>
                    <li>
                      <div className={styles.cOtherWinnerCard} data-aos="zoom-in">
                      <img className={styles.cOtherWinnerProfile} src="https://wso2.cachefly.net/wso2/sites/all/2023/images/webp/winners/Sachintha-Rajith.jpg" />
                          <span className={styles.cOtherWinnerName}>Sachintha  <br/>Rajith</span>
                          {/* <span className={styles.cOtherWinnerDetails}>Adipiscing elit sed do eiusmod</span> */}
                        </div>
                    </li>
                    <li>
                      <div className={styles.cOtherWinnerCard} data-aos="zoom-in">
                      <img className={styles.cOtherWinnerProfile} src="https://wso2.cachefly.net/wso2/sites/all/2023/images/webp/winners/Viraj-Danushka.jpg" />
                          <span className={styles.cOtherWinnerName}>Viraj <br/>Danushka</span>
                          {/* <span className={styles.cOtherWinnerDetails}>Adipiscing elit sed do eiusmod</span> */}
                        </div>
                    </li>
                  </ul>
                </div>


              
                


               
                
                

              </Row>

            </div>


          </Row>
        </div>
      </section>

      <section className={`${styles.cHackSections} ${styles.cKeydates}`} >
        <div className="container">
          <Row>
            <div className="col-sm-12 col-md-12 col-lg-12 ">
              <h2>Key Dates</h2>
            </div>
            <div className={styles.cTimeLine}>
              <div data-aos="fade-right">
                <h3>February 14</h3>
                <Image
                  src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/cybertruck/icons-05-01.webp"
                  alt="Code challenge starts"
                  width={80}
                  height={80}
                />
                {/* <img style={{ height: '80px', width: '80px' }} alt="Code challenge starts" src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/cybertruck/icons-05-01.webp" /> */}
                <p>Code challenge starts</p>
              </div>
            </div>
            <div className={`${styles.cTimeLine} ${styles.cCommingSoonComtainer}`}>
              <div data-aos="fade-right">
                <h3>March 1</h3>
                {/* <img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/cybertruck/coming-soon2.png"/> */}
                {/* <img style={{ height: '80px', width: '80px' }} alt='Submissions open' src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/cybertruck/icons-02.webp" /> */}
                <Image
                  src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/cybertruck/icons-05-01.webp"
                  alt="Submissions open"
                  width={80}
                  height={80}
                />
                {/* <img className={styles.cComminSoonLabel} src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/cybertruck/coming-soon4-01.webp" />  */}
                <p >Submissions open</p>
              </div>
            </div>
            <div className={styles.cTimeLine}>
              <div data-aos="fade-left">
                <h3>April 30</h3>
                <Image
                  src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/cybertruck/icons-01.webp"
                  alt="Submissions close"
                  width={80}
                  height={80}
                />
                {/* <img style={{ height: '80px', width: '80px' }} alt='Submissions close' src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/cybertruck/icons-01.webp" /> */}
                <p>Submissions close</p>
              </div>
            </div>
            <div className={styles.cTimeLine}>
              <div data-aos="fade-right">
                <h3>May 5 - May 7</h3>
                <Image
                  src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/cybertruck/icons-03.webp"
                  alt="Announcement of eligible candidates"
                  width={80}
                  height={80}
                />
                {/* <img style={{ height: '80px', width: '80px' }} alt='Announcement of eligible candidates' src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/cybertruck/icons-03.webp" /> */}
                <p>Announcement of <a aria-label='terms and conditions' target='_blank' href="https://choreo.dev/cybertruck/terms-and-conditions">eligible candidates</a>
                </p>
              </div>
            </div>
            <div className={styles.cTimeLine}>
              <div data-aos="fade-left">
                <h3>May 9</h3>
                <a href="https://wso2.com/wso2con/2024/" target='_blank' aria-label='WSO2Con 2024'>
                  <Image
                    src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/cybertruck/wso2con2024-01.webp"
                    alt="wso2con 2024 logo"
                    width={196}
                    height={90}
                    className={styles.wso2conlogo}
                  />
                  {/* <img style={{ height: '90px', width: '196px' }} alt='wso2con 2024 logo' className={styles.wso2conlogo} src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/cybertruck/wso2con2024-01.webp" />
   */}
                </a>
                <p>Winner selection</p>
              </div>
            </div>
          </Row>
        </div>
      </section>


{/* 

      <section id='submissions' className={`${styles.cHackSections} ${styles.cHowtoSubmit} ${styles.cH2a}`}>
        <Container>
          <Row>
            <div className="col-sm-12 col-md-12 col-lg-12 ">
              <h2>How to Submit</h2>
              <div className={styles.cSubmissionsClosedText}>Submissions are now closed</div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 ">
              <div className={`${styles.cChallenge} ${styles.cSteps} ${styles.cHeight} ${styles.cMinheightcHowtoSubmit}`} data-aos="zoom-in">
                <h3>Register</h3>
                <ul>
                  <li>Click the <strong>Register to Participate</strong> button in the banner at the top of the Choreo console.</li>
                </ul>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 ">
              <div className={`${styles.cChallenge} ${styles.cSteps} ${styles.cHeight} ${styles.cMinheightcHowtoSubmit}`} data-aos="zoom-in">
                <h3>Complete the challenge</h3>
                <ul>
                  <li>Deploy your app to the Choreo production environment.</li>
                </ul>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 ">
              <div className={`${styles.cChallenge} ${styles.cSteps} ${styles.cHeight} ${styles.cMinheightcHowtoSubmit}`} data-aos="zoom-in">
                <h3>Submit</h3>
                <ul>
                  <li> Click the <strong>Submit</strong> button in the banner at the top of the Choreo console and view your draw entries.</li>
                  <li>Integrate more features until Tuesday, April 30, and resubmit your app to increase your odds of winning.</li>
                </ul>
              </div>
            </div>

          </Row>
        </Container>
      </section> */}


      <section className={`${styles.cHackSections} ${styles.cAdditionalResources} ${styles.cH2a}`}>
        <Container>













          <Row>
            <div className="col-sm-12 col-md-12 col-lg-12">
              <h2>Additional Resources </h2>
            </div>



          </Row>

          <Row>
            <Col sm={12} md={4} className={styles.videoImage}>
              {/* <h3>Why should you start programming with Ballerina?</h3><br /> */}
              <a onClick={() => handleShow('https://www.youtube.com/embed/eeIJ-KO2adE')} id="cMainVideoFrame1" className={styles.videoLink} data-toggle="modal" data-src="https://www.youtube.com/embed/eeIJ-KO2adE" data-target="">
                <Image src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/cybertruck/Thumbnail-06.webp" alt="Getting Started with Choreo for the WSO2 Code Challenge!  Community Call 4" width={553} height={308} />
                {/* <span id="cplayvideo" className={styles.videoPlayButton} data-toggle="modal" data-src="https://www.youtube.com/embed/NYrKeElltg8" data-target="#iBallerinaVideo">
                <span></span>
              </span> */}
              </a>

            </Col>
            <Col sm={12} md={4} className={styles.videoImage}>
              {/* <h3>Tutorial: Creating a service in Ballerina</h3><br /> */}
              <a onClick={() => handleShow2('https://www.youtube.com/embed/c-QsfbznSXI')} className={styles.videoLink} data-toggle="modal" data-src="https://www.youtube.com/embed/c-QsfbznSXI" data-target="">
                <Image src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/cybertruck/Thumbnail-05.webp" alt="Django & React Web App Tutorial - Authentication, Databases, Deployment & More..." width={551} height={307} />
                {/* <span id="cplayvideo" className={styles.videoPlayButton} data-toggle="modal" data-src="https://www.youtube.com/embed/NxyIKoHl3Dw" data-target="#iBallerinaVideo">
                <span></span>
              </span> */}
              </a>


            </Col>
            <Col sm={12} md={4} className={styles.videoImage}>
              {/* <h3>Tutorial: Creating a service in Ballerina</h3><br /> */}
              <a onClick={() => handleShow3('https://www.youtube.com/embed/fdF4a51kPss')} className={styles.videoLink} data-toggle="modal" data-src="https://www.youtube.com/embed/fdF4a51kPss" data-target="">
                <Image src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/cybertruck/Thumbnail-06-a.webp" alt="Mastering the WSO2 Code Challenge with Choreo" width={551} height={307} />
                {/* <span id="cplayvideo" className={styles.videoPlayButton} data-toggle="modal" data-src="https://www.youtube.com/embed/NxyIKoHl3Dw" data-target="#iBallerinaVideo">
                <span></span>
              </span> */}
              </a>


            </Col>

          </Row>


        </Container>
        {/* <Modal show={showModal} onHide={handleClose} >
          <Modal.Header closeButton >
          </Modal.Header>
          <Modal.Body >
            <iframe allow="fullscreen;autoplay;"
              id="video"
              src={vSource + `?autoplay=1`}>
            </iframe>
          </Modal.Body>
        </Modal> */}
        <Modal show={showModal} onHide={handleClose} className={styles.videoModal}>
          <Modal.Header closeButton className={styles.videoHeader}>
          </Modal.Header>
          <Modal.Body className={styles.videoBody}>
            <iframe className={styles.videoIframe}
              allow="fullscreen;autoplay;"
              id="video"
              src={vSource + `?autoplay=1`}>
            </iframe>
          </Modal.Body>
        </Modal>


        <Modal show={showModal2} onHide={handleClose} className={styles.videoModal}>
          <Modal.Header closeButton className={styles.videoHeader}>
          </Modal.Header>
          <Modal.Body className={styles.videoBody}>
            <iframe className={styles.videoIframe}
              allow="fullscreen;autoplay;"
              id="video"
              src={vSource + `?autoplay=1&start=6740`}>
            </iframe>
          </Modal.Body>
        </Modal>

        <Modal show={showModal3} onHide={handleClose} className={styles.videoModal}>
          <Modal.Header closeButton className={styles.videoHeader}>
          </Modal.Header>
          <Modal.Body className={styles.videoBody}>
            <iframe className={styles.videoIframe}
              allow="fullscreen;autoplay;"
              id="video"
              src={vSource + `?autoplay=1&start=138`}>
            </iframe>
          </Modal.Body>
        </Modal>




      </section>
      <section className={`${styles.cHackSections} ${styles.cWinnerSelection}`} id="winner-selection">
        <video
          id="myVideo2"
          autoPlay
          muted={isMuted} // Set the muted attribute based on the state
          loop
          className={styles.cCybertruckvideo2}
        >
          <source
            src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/cybertruck/cybertruck-lastblade.webm"
            type="video/webm"
          />
        </video>
        {/* 
   <div className={styles.cBgGradient2}></div>
   */}
        <Container className={styles.cWinnerContent}>
          <Row>
            <div className="col-sm-12 col-md-6 col-lg-6 ">
              <div className={styles.cybertrucklogo}>
                <h3 className={styles.cWinnerContentH3}>Grand Prize:</h3>
                <Image
                  src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/cybertruck/gb2.webp"
                  alt="Cybertruck logo"
                  width={291}
                  height={100}
                />
                {/* <img style={{ height: '100px', width: '291px' }} alt='Cybertruck logo' src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/cybertruck/gb2.webp" /> */}
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 ">
              <p className={styles.cContext}>
                Winners will be announced on May 9, 2024 at <br />
                <a target='_blank' href="https://wso2.com/wso2con/2024/">
                  <Image
                    src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/cybertruck/wso2con2024-01.webp"
                    alt="Cybertruck logo"
                    width={271}
                    height={28}
                    className={styles.cConLogo}
                  />
                  {/* <img style={{ height: '28px', width: '271px' }} alt='WSO2Con Logo 2024' className={styles.cConLogo} src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/cybertruck/wso2con2024-01.webp" /> */}
                </a>
              </p>
              <p className={styles.cContext}>which will be held at the Seminole Hard Rock Hotel and Casino in Hollywood, FL, USA.</p>
              <p className={styles.cPrizes}>Plus, 10 other lucky winners <br /> will each receive a 14-inch MacBook Pro<br /> with an Apple M3 chip.</p>
            </div>
          </Row>
        </Container>
      </section>
    </Layout>
  )
}