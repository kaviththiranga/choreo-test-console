import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Layout from '../../layouts/LayoutChallange';
import styles from '../../styles/CodeChallange.module.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';









export default function cybertruck() {

  const [isMuted, setIsMuted] = useState(true); // Initialize with muted state
  const [cSoundOn, setButtonClass] = useState(''); // Initialize with an empty class



  const toggleMute = () => {

    setIsMuted(!isMuted);

    // setButtonClass(isMuted ? styles.cEnable : styles.cDisable);

    setButtonClass(isMuted ? 'enabled' : 'disabled');





  };












  return (
    <Layout className={styles.cBodyBg}>
      <section className={`${styles.cHackSections} ${styles.cCyberTruckIntro}`}>
        {/* <video id="myVideo" autoPlay muted loop className={styles.cCybertruckvideo}>
      <source src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/cybertruck/cybertruck.mp4" type="video/mp4" />
   </video> */}


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
            <span><p>ES</p> <img className={`${styles.cCyberTruckIntro} ${styles.cGlobe}`} src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/cybertruck/world.png" alt="WSO2 Language" loading="lazy" /></span>
            <div className={styles.DropPannel} >
              <a className={styles.cLang} href="/br/cybertruck"><img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/4x3/br.svg" /> <span>Portuguese</span></a>
              <a className={styles.cLang} href="/cybertruck"><img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/4x3/gb.svg" /> <span>English</span></a>

            </div>
          </div>
        </div>


          <div className={styles.cCarImage} data-aos="fade-up" data-aos-duration="3000"></div>
          {/* <a className={styles.cWatchFullVideo} href="https://www.youtube.com/watch?v=3nwDB7O_kCI" target='_blank'>Watch Full Video</a> */}
          {/* <div className={styles.cBgGradient}></div> */}
          <Row>
            <div className="col-sm-12 col-md-2 col-lg-1"></div>
            {/* {`${styles.xxxx} navbar-dark`} */}
            <div className={`col-sm-12 col-md-8 col-lg-10 ${styles.cCyberTruckIntroTextContainer}`}>
              <h1>DESAFÍO DEL CÓDIGO WSO2


                <span>¡¡GANA UN CYBERTRUCK TESLA!!</span>
              </h1>
              <p>
              ¿Listo para el desafío de codificación extremo? ¡Crea una aplicación en <a className={styles.cNewWindow} target='_blank' href="https://choreo.dev/?utm_source=CybertruckCodeChallenge&utm_medium=website&utm_campaign=website_CybertruckCodeChallenge_240207">Choreo</a>  y ten la oportunidad de ganar un Tesla Cybertruck o 100 mil dólares!
              </p>
              {/* <h2>FEBRUARY 7 - APRIL 30 </h2> */}


              <h3 className={styles.cThin}>TU OPORTUNIDAD DE GANAR A LO GRANDE EMPIEZA AHORA.</h3>

              <a href="#challenge" className={`${styles.cButtonN_Standard} ${styles.cLeftCyberButton}`} aria-label="Learn More">¿QUÉ TENGO QUE HACER?</a>
            </div>
            <div className="col-sm-12 col-md-2 col-lg-1">

            </div>
          </Row>
          <div className={styles.box}>
            <a href="#Challenge">
            <span></span>
            <span></span>
            <span></span>
            </a>
          </div>
        </div>
      </section>

      <section className={`${styles.cHackSections} ${styles.cChallengeSection}`}  id="Challenge">
        <Container>
          <Row>
            <div className="col-sm-12 col-md-12 col-lg-12 ">
              <h2 id="challenge" className={styles.cH2a}>DESAFÍO</h2>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-12 ">
              <div className={styles.cNoheight} data-aos="zoom-in">
                {/* <h3>Code and <br />Deploy</h3> */}
                
              <p>El objetivo de este desafío es que los desarrolladores de aplicaciones prueben <a className={styles.cNewWindow} target='_blank' href="https://choreo.dev/?utm_source=CybertruckCodeChallenge&utm_medium=website&utm_campaign=website_CybertruckCodeChallenge_240207">Choreo</a>, la plataforma de desarrollo interno como servicio de WSO2, utilizando el nivel de desarrollador gratuito. ¡Cuanto más hagas con Choreo, más oportunidades tendrás de ganar!</p>
              

              </div>
            </div>


            <div className="col-sm-12 col-md-12 col-lg-12 ">
              <p className={styles.cCenterText2}>Cada aplicación elegible obtiene una entrada al sorteo. Para ser elegible, debe hacer lo siguiente:
</p>
            </div>
            


            <div className="col-sm-12 col-md-4 col-lg-4 ">
              <div className={styles.cChallenge} data-aos="fade-up-right">
                <h3>DESARROLLAR E IMPLEMENTAR</h3>
                <p>Utilice cualquier lenguaje, cualquier IDE y GitHub para desarrollar su aplicación y ejecutarla en Choreo de forma gratuita.</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 ">
              <div className={styles.cChallenge} data-aos="fade-up">
                <h3>FRONTEND Y BACKEND</h3>
                <p>Su aplicación necesita API tanto de frontend como de backend.



                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 ">
              <div className={styles.cChallenge} data-aos="fade-up-left">
                <h3>IMPLEMENTAR EN PRODUCCIÓN</h3>
               
                <p>Promocione su aplicación en <a target='_blank' href="https://wso2.com/choreo/docs/choreo-concepts/environments/">el entorno</a> de producción de Choreo</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12  cHeight">
              <div className={styles.cChallenge} data-aos="fade-up">
                <div className="col-sm-12 col-md-6 col-lg-12 "></div>
                <h3>MAXIMIZA TUS OPORTUNIDADES DE GANAR</h3>

                <p>Aumente sus posibilidades con las siguientes incorporaciones:</p>
                <ul>
                  <li>Utilice una conexión para integrar la API de backend a frontend</li>
                  <li>
                  Más componentes<sup>*</sup>: 
                    <ul>
                      <li>Bases de datos </li>
                      <li>Trabajo manual o programado</li>
                      <li>Múltiples <a target='_blank' href="https://wso2.com/choreo/docs/choreo-concepts/project/" rel="noopener" aria-label="projects Internal and external APIs">proyectos</a></li>
                      <li><a target='_blank' href="https://wso2.com/choreo/docs/references/faq/#q-what-is-the-difference-between-an-internal-and-external-api">API internas y externas</a></li>
                    </ul>
                  </li>
                  <li>Utilice <a href="https://wso2.com/asgardeo/?utm_source=CybertruckCodeChallenge&utm_medium=website&utm_campaign=website_CybertruckCodeChallenge_240207" target='_blank' rel="noopener" aria-label="Asgardeo">Asgardeo</a> para la autenticación de aplicaciones</li>
                  <li>Utilice <a href="https://ballerina.io/?utm_source=CybertruckCodeChallenge&utm_medium=website&utm_campaign=website_CybertruckCodeChallenge_240207" target='_blank' rel="noopener" aria-label="Ballerina">Ballerina</a> para implementar lógica de backend o API</li>

                  <br />
                </ul>
                <p>The more you do, the greater your chances of winning the Cybertruck or $100,000!
                </p>


                <p className={styles.cHighligtedText}> Cada adición = 1 entrada adicional
                </p>
<p className={styles.cItalic}>* Hasta el límite del nivel gratuito</p>


              </div>


            




            </div>
            <div className="col-sm-12 col-md-12 col-lg-12 ">
              <div className={styles.cNoHeightBox} data-aos="fade-up">
                <Row>
                  <div className="col-sm-12 col-md-4 col-lg-4 ">
                  <p>Siga la  <a target='_blank' href="https://wso2.com/choreo/docs/">documentación de Choreo</a> para comenzar.</p>
                  </div>
                  <div className="col-sm-12 col-md-4 col-lg-4 ">
                    <div className={styles.cCenterText} >
                    <p>¿Dudas? <a target='_blank' href="https://discord.com/invite/wso2"><img className={styles.cDiscord} src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/cybertruck/discord.png"/></a></p>
                    </div>
                  
                  </div>
                  <div className="col-sm-12 col-md-4 col-lg-4 ">
                  <p>Términos y condiciones que aplican. Leer más <a target='_blank' href="/cybertruck/terms-and-conditions/">aquí</a>.</p>
                 
                  </div>
                 
                </Row>
              
              
              


              </div>
            </div>
            {/* <div className="col-sm-12 col-md-12 col-lg-12">
            <div className={styles.cCybertrucCenterText}>
                <a href="https://choreo.dev/?utm_source=CybertruckCodeChallenge&utm_medium=website&utm_campaign=website_CybertruckCodeChallenge_240207" target='_blank' className={`${styles.cButtonN_Standard} ${styles.cLeftCyberButton} ${styles.cButtonWidth}`}>REGÍSTRESE EN CHOREO Y GANE UN TESLA CYBERTRUCK</a>


              </div>
            </div> */}
          </Row>
        </Container>
      </section>
      <section className={`${styles.cHackSections} ${styles.cKeydates}`} >
        <div className="container">
          <Row>

            <div className="col-sm-12 col-md-12 col-lg-12 ">
              <h2>FECHAS IMPORTANTES</h2>
            </div>


            <div className={styles.cTimeLine}>
              <div data-aos="fade-right">
                <h3>14 DE FEBRERO</h3>
                <img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/cybertruck/icons-05-01.webp" />
                <p>Comienza el desafío de codificación</p>
              </div>
            </div>
            <div className={`${styles.cTimeLine} ${styles.cCommingSoonComtainer }`}>
              <div  data-aos="fade-right">
                <h3>01 DE MARZO</h3>
                {/* <img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/cybertruck/coming-soon2.png"/> */}
                <img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/cybertruck/icons-02.webp" />
                {/* <img className={styles.cComminSoonLabel} src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/cybertruck/coming-soon4-01.webp" />  */}
                
                <p >Apertura de inscripciones</p>
              
            
              </div>
            </div>
            <div className={styles.cTimeLine}>
              <div data-aos="fade-left">
                <h3>30 DE ABRIL</h3>
                <img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/cybertruck/icons-01.webp" />
                <p>Cierre de inscripciones</p>
              </div>
            </div>
            <div className={styles.cTimeLine}>
              <div data-aos="fade-right">
                <h3>DEL 5 AL 7 DE MAYO</h3>
                <img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/cybertruck/icons-03.webp" />
                <p>Anuncio de <a target='_blank' href="https://choreo.dev/cybertruck/terms-and-conditions">candidatos elegibles</a>
                </p>
              </div>
            </div>
            <div className={styles.cTimeLine}>
              <div data-aos="fade-left">
                <h3>9 DE MAYO</h3>
                <a href="https://wso2.com/wso2con/2024/" target='_blank'><img className={styles.wso2conlogo} src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/cybertruck/wso2con2024-01.webp" /></a>
                <p>Selección del ganador</p>
              </div>
            </div>





            {/* 
    <div class="row show-grid">
        
        <div class="col-sm-6 col-md-4-5 col-lg-1-5"><span class="">sm-6 md-4-5 lg-1-5 xxxxxxx</span>
        </div>
        <div class="col-sm-6 col-md-5-5 col-lg-1-5"><span class="">sm-6 md-5-5 lg-1-5</span>
        </div>
        <div class="col-sm-6 col-md-3-5 col-lg-1-5"><span class="">sm-6 md-3-5 lg-1-5</span>
        </div>
        <div class="col-sm-6 col-md-2-5 col-lg-1-5"><span class="">sm-6 md-2-5 lg-1-5</span>
        </div>
        <div class="col-sm-6 col-md-4-5 col-lg-1-5"><span class="">sm-6 md-4-5 lg-1-5</span>
        </div>
    </div> */}



            {/* <table className={styles.cTable}>
<tbody>
  <tr>
    <td>
   
    </td>
    <td>
  
    </td>
    <td>  
    
              </td>
    <td>
    
    </td>
    <td>
   
    </td>
  </tr>
  </tbody>
</table> */}






            {/* <div className="col-sm-12 col-md-3 col-lg-3 " >
           
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3 " >
             
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3  " >
             
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3 " >
             
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3  " >
           
            </div> */}
          </Row>
        </div>
      </section>

      {/* <section className={`${styles.cHackSections} ${styles.cHowtoSubmit}`}>
      
        <Container>
          <Row>
            <div className="col-sm-12 col-md-12 col-lg-12 ">
              <h2>How to Submit</h2>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 ">
             
                <div className={`${styles.cChallenge} ${styles.cSteps}`} data-aos="zoom-in">
                  <h3>Develop Your App</h3>
                   <p>Ensure your app is developed and your code is finalized.</p>
               </div>
            
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 ">
                <div className={`${styles.cChallenge} ${styles.cSteps}`} data-aos="zoom-in">
                  <h3>Deploy Your App on Choreo</h3>
                  <p>Deploy your application in the Choreo production environment.
                  </p>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4 ">
                <div className={`${styles.cChallenge} ${styles.cSteps}`} data-aos="zoom-in">
                  <h3>Await Further Instructions</h3>
                  <p>Keep an eye out for upcoming submission details and instructions.
                  </p>
                </div>
              </div>
<div className="col-sm-12 col-md-4 col-lg-4 ">&nbsp;</div>
<div className="col-sm-12 col-md-12 col-lg-12 ">
             
             <div className={styles.cNotification} data-aos="zoom-in">
              <h4>Await Further Instructions</h4>
              <p>Keep an eye out for upcoming submission details and instructions.</p>
            </div>
         
         </div>
         <div className="col-sm-12 col-md-4 col-lg-4 ">&nbsp;</div>

              
            
          </Row>
        </Container>
      </section> */}
      
      <section id='submissions' className={`${styles.cHackSections} ${styles.cHowtoSubmit} ${styles.cH2a}`}>
        <Container>
          <Row>
            <div className="col-sm-12 col-md-12 col-lg-12 ">
              <h2>CÓMO ENVIAR</h2>
            </div>
          
              <div className="col-sm-12 col-md-4 col-lg-4 ">
                <div className={`${styles.cChallenge} ${styles.cSteps} ${styles.cHeight} ${styles.cMinheightcHowtoSubmit}`} data-aos="zoom-in">
                  <h3>REGISTRO</h3>
            
                 <ul>
                  <li>Haga clic en el botón <strong>Registrarse para Unirse </strong> en el banner en la parte superior de la consola Choreo.</li>
                  
                 </ul>
                 
                  </div>
              </div>
              <div className="col-sm-12 col-md-4 col-lg-4 ">
                <div className={`${styles.cChallenge} ${styles.cSteps} ${styles.cHeight} ${styles.cMinheightcHowtoSubmit}`} data-aos="zoom-in">
                  <h3>COMPLETE EL DESAFÍO</h3>
              <ul>
                <li>Implemente su aplicación en el entorno de producción de Choreo.</li>
       
              </ul>
               </div>
                </div>
              
              <div className="col-sm-12 col-md-4 col-lg-4 ">
                <div className={`${styles.cChallenge} ${styles.cSteps} ${styles.cHeight} ${styles.cMinheightcHowtoSubmit}`} data-aos="zoom-in">
                  <h3>ENVÍO</h3>
         <ul>
          <li>Haga clic en el botón  <strong>Enviar</strong> en el banner en la parte superior de la consola Choreo y vea sus participaciones en el sorteo.</li>
         
         <li>Integre más funciones antes del martes 30 de abril y vuelva a enviar su aplicación para aumentar sus posibilidades de ganar.</li>
         </ul>
                  
                </div>
              </div>
              
           
            
            {/* <div className="col-sm-12 col-md-6 col-lg-6 ">
              <Row>
              <div className="col-sm-12 col-md-6 col-lg-6 ">
                <div className={`${styles.cChallenge} ${styles.cSteps} ${styles.cWithMinHeight}`} data-aos="zoom-in">
                  <h3>STEP 2</h3>
                  <p>Deploy your app in Choreo's production environment.</p>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 ">
                <div className={`${styles.cChallenge} ${styles.cSteps} ${styles.cWithMinHeight}`} data-aos="zoom-in">
                  <h3>STEP 3</h3>
                  <p> Once complete, click the Submit button on the Choreo console’s top banner to <strong>submit</strong> your organization for evaluation. You’ll be able to see your draw entries. Integrate more features until April 30th and resubmit your app to increase your odds.
                  </p>
                </div>
              </div>
              </Row>
            </div> */}
          </Row>
        </Container>
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
        {/* <div className={styles.cBgGradient2}></div> */}
        <Container className={styles.cWinnerContent}>

          <Row>
         


            <div className="col-sm-12 col-md-6 col-lg-6 ">

            <div className={styles.cybertrucklogo}>
            <h3 className={styles.cWinnerContentH3}>GRAN PREMIO:</h3>
                <img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/cybertruck/gb2.webp" />
                </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-6 ">
            <p className={styles.cContext}>Los ganadores serán anunciados el 9 de mayo de 2024 en  <br/><a target='_blank' href="https://wso2.com/wso2con/2024/"><img className={styles.cConLogo} src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/cybertruck/wso2con2024-01.webp" />
           
                </a></p>
                
                <p className={styles.cContext}>que se llevará a cabo en el Seminole Hard Rock Hotel and Casino en Hollywood, Florida, Estados Unidos.</p>

                <p className={styles.cPrizes}>Además, otros 10  afortunados ganadores recibirán cada uno una  MacBook Pro de 14 pulgadas con un chip Apple M3.
</p>
                
           </div>




  
         
          </Row>
        </Container>

        

      </section>

 

    </Layout>
  )
}


