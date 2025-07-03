import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Layout from '../../layouts/LayoutChallangeBR';
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
            <span><p>PT</p> <img className={`${styles.cCyberTruckIntro} ${styles.cGlobe}`} src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/cybertruck/world.png" alt="WSO2 Language" loading="lazy" /></span>
            <div className={styles.DropPannel} >
              <a className={styles.cLang} href="/cybertruck"><img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/4x3/gb.svg" /> <span>English</span></a>
              <a className={styles.cLang} href="/es/cybertruck"><img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/4x3/es.svg" /> <span>Spanish</span></a>

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
              <h1>DESAFIO DO CÓDIGO WSO2

                <span>GANHE UM CYBERTRUCK DA TESLA!!</span>
              </h1>
              <p>
              Pronto para o desafio final de codificação? Crie um app no <a className={styles.cNewWindow} target='_blank' href="https://choreo.dev/?utm_source=CybertruckCodeChallenge&utm_medium=website&utm_campaign=website_CybertruckCodeChallenge_240207">Choreo</a> e tenha a chance de ganhar um Tesla Cybertruck ou 100 mil dólares!

              </p>
              {/* <h2>FEBRUARY 7 - APRIL 30 </h2> */}


              <h3 className={styles.cThin}>Your chance to win big starts now.</h3>

              <a href="#challenge" className={`${styles.cButtonN_Standard} ${styles.cLeftCyberButton}`} aria-label="Learn More">O QUE EU TENHO QUE FAZER?</a>
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
              <h2 id="challenge" className={styles.cH2a}>DESAFIO</h2>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-12 ">
              <div className={styles.cNoheight} data-aos="zoom-in">
                {/* <h3>Code and <br />Deploy</h3> */}
                
              <p> O objetivo deste desafio é para que desenvolvedores individuais experimentem o <a className={styles.cNewWindow} target='_blank' href="https://choreo.dev/?utm_source=CybertruckCodeChallenge&utm_medium=website&utm_campaign=website_CybertruckCodeChallenge_240207">Choreo</a>, a plataforma interna de desenvolvimento como serviço da WSO2, usando o Nível de Desenvolvedor gratuito. Quanto mais você fizer com o Choreo, mais chances terá de ganhar!</p>
              </div>
            </div>


            <div className="col-sm-12 col-md-12 col-lg-12 ">
              <p className={styles.cCenterText2}>Cada app elegível ganha uma entrada no sorteio. Para ser elegível, você precisa fazer o seguinte:</p>
            </div>
            


            <div className="col-sm-12 col-md-4 col-lg-4 ">
              <div className={styles.cChallenge} data-aos="fade-up-right">
                <h3>DESENVOLVER E IMPLEMENTAR</h3>
                <p>Use qualquer linguagem, qualquer IDE e GitHub para desenvolver seu app e executá-lo no Choreo gratuitamente.</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 ">
              <div className={styles.cChallenge} data-aos="fade-up">
                <h3>FRONTEND E BACKEND</h3>
                <p>Seu app precisa tanto de um frontend quanto de APIs de backend.



                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 ">
              <div className={styles.cChallenge} data-aos="fade-up-left">
                <h3>IMPLANTAR EM PRODUÇÃO</h3>
                
              <p> Promova seu app para o <a target='_blank' href="https://wso2.com/choreo/docs/choreo-concepts/environments/">ambiente</a> de produção do Choreo.</p> 
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12  cHeight">
              <div className={styles.cChallenge} data-aos="fade-up">
                <div className="col-sm-12 col-md-6 col-lg-12 "></div>
                <h3>MAXIMIZE SUAS CHANCES DE GANHAR</h3>

                <p>Aumente suas chances com as seguintes adições:</p>
                <ul>
                  <li>Use uma conexão para integrar a API de backend ao frontend</li>
                  <li>
                  Mais componentes<sup>*</sup>: 
                    <ul>
                      <li>Bancos de dados </li>
                      <li>Trabalhos manuais ou agendados</li>
                      <li>Múltiplos <a target='_blank' href="https://wso2.com/choreo/docs/choreo-concepts/project/" rel="noopener" aria-label="projects Internal and external APIs">projetos</a></li>
                      <li><a target='_blank' href="https://wso2.com/choreo/docs/references/faq/#q-what-is-the-difference-between-an-internal-and-external-api">Internal and external APIs</a></li>
                    </ul>
                  </li>
                  <li>Use <a href="https://wso2.com/asgardeo/?utm_source=CybertruckCodeChallenge&utm_medium=website&utm_campaign=website_CybertruckCodeChallenge_240207" target='_blank' rel="noopener" aria-label="Asgardeo">Asgardeo</a> para autenticação de apps</li>
                  <li>Use <a href="https://ballerina.io/?utm_source=CybertruckCodeChallenge&utm_medium=website&utm_campaign=website_CybertruckCodeChallenge_240207" target='_blank' rel="noopener" aria-label="Ballerina">Ballerina</a> para implementar lógica de backend ou APIs</li>

                  <br />
                </ul>
                <p>Quanto mais você fizer, maiores serão suas chances de ganhar o Cybertruck ou 100 mil dólares!
                </p>


                <p className={styles.cHighligtedText}> Cada Adição = 1 Entrada Adicional
                </p>
<p className={styles.cItalic}>* Até o limite do nível gratuito
</p>


              </div>


            




            </div>
            <div className="col-sm-12 col-md-12 col-lg-12 ">
              <div className={styles.cNoHeightBox} data-aos="fade-up">
                <Row>
                  <div className="col-sm-12 col-md-4 col-lg-4 ">
                  <p>Siga a <a target='_blank' href="https://wso2.com/choreo/docs/">documentação do Choreo  </a> para começar.</p>
                  
                  </div>
                  <div className="col-sm-12 col-md-4 col-lg-4 ">
                    <div className={styles.cCenterText} >
                    <p>Dúvidas? <a target='_blank' href="https://discord.com/invite/wso2"><img className={styles.cDiscord} src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/cybertruck/discord.png"/></a></p>
                    </div>
                  
                  </div>
                  <div className="col-sm-12 col-md-4 col-lg-4 ">
                  <p>Termos e condições que se aplicam. Leia mais<a target='_blank' href="/cybertruck/terms-and-conditions/"> aqui</a>.</p>
                 
                  </div>
                 
                </Row>
              
              
              


              </div>
            </div>
            {/* <div className="col-sm-12 col-md-12 col-lg-12">
            <div className={styles.cCybertrucCenterText}>
                <a href="https://choreo.dev/?utm_source=CybertruckCodeChallenge&utm_medium=website&utm_campaign=website_CybertruckCodeChallenge_240207" target='_blank' className={`${styles.cButtonN_Standard} ${styles.cLeftCyberButton} ${styles.cButtonWidth}`}>INSCREVA-SE NO CHOREO E GANHE UM TESLA CYBERTRUCK</a>


              </div>
            </div> */}
          </Row>
        </Container>
      </section>
      <section className={`${styles.cHackSections} ${styles.cKeydates}`} >
        <div className="container">
          <Row>

            <div className="col-sm-12 col-md-12 col-lg-12 ">
              <h2>DATAS IMPORTANTES</h2>
            </div>


            <div className={styles.cTimeLine}>
              <div data-aos="fade-right">
                <h3>14 DE FEVEREIRO</h3>
                <img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/cybertruck/icons-05-01.webp" />
                <p>Desafio de código começa</p>
              </div>
            </div>
            <div className={`${styles.cTimeLine} ${styles.cCommingSoonComtainer }`}>
              <div  data-aos="fade-right">
                <h3>1 DE MARÇO</h3>
                {/* <img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/cybertruck/coming-soon2.png"/> */}
                <img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/cybertruck/icons-02.webp" />
                {/* <img className={styles.cComminSoonLabel} src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/cybertruck/coming-soon4-01.webp" />  */}
                
                <p >Abertura das inscrições</p>
              
            
              </div>
            </div>
            <div className={styles.cTimeLine}>
              <div data-aos="fade-left">
                <h3>30 DE ABRIL</h3>
                <img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/cybertruck/icons-01.webp" />
                <p>Fechamento das inscrições</p>
              </div>
            </div>
            <div className={styles.cTimeLine}>
              <div data-aos="fade-right">
                <h3>5 A 7 DE MAIO</h3>
                <img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/cybertruck/icons-03.webp" />
                <p>Anúncio dos  <a target='_blank' href="https://choreo.dev/cybertruck/terms-and-conditions">candidatos elegíveis</a>
                </p>
              </div>
            </div>
            <div className={styles.cTimeLine}>
              <div data-aos="fade-left">
                <h3>9 DE MAIO</h3>
                <a href="https://wso2.com/wso2con/2024/" target='_blank'><img className={styles.wso2conlogo} src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/cybertruck/wso2con2024-01.webp" /></a>
                <p>Seleção do vencedor</p>
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
              <h2>COMO SUBMETER</h2>
            </div>
          
              <div className="col-sm-12 col-md-4 col-lg-4 ">
                <div className={`${styles.cChallenge} ${styles.cSteps} ${styles.cHeight} ${styles.cMinheightcHowtoSubmit}`} data-aos="zoom-in">
                  <h3>REGISTRAR</h3>
            
                 <ul>
              
                  <li>Clique no botão <strong>Registre-se para Participar </strong>no banner no topo do console do Choreo.</li>
                 </ul>
                 
                  </div>
              </div>
              <div className="col-sm-12 col-md-4 col-lg-4 ">
                <div className={`${styles.cChallenge} ${styles.cSteps} ${styles.cHeight} ${styles.cMinheightcHowtoSubmit}`} data-aos="zoom-in">
                  <h3>COMPLETE O DESAFIO</h3>
              <ul>
                <li>Implante seu app no ambiente de produção do Choreo.</li>
       
              </ul>
               </div>
                </div>
              
              <div className="col-sm-12 col-md-4 col-lg-4 ">
                <div className={`${styles.cChallenge} ${styles.cSteps} ${styles.cHeight} ${styles.cMinheightcHowtoSubmit}`} data-aos="zoom-in">
                  <h3>SUBMETER</h3>
         <ul>
          <li>Clique no botão <strong>Submeter</strong> no banner no topo do console do Choreo e veja suas entradas no sorteio.</li>
         
         <li>Integre mais recursos até terça-feira, 30 de abril, e reenvie seu app para aumentar suas chances de ganhar.</li>
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
            <h3 className={styles.cWinnerContentH3}>GRANDE PRÊMIO:</h3>
                <img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/cybertruck/gb2.webp" />
                </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-6 ">
            <p className={styles.cContext}>
           
            Os vencedores serão anunciados em 9 de maio de 2024 no <a target='_blank' href="https://wso2.com/wso2con/2024/"><img className={styles.cConLogo} src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/cybertruck/wso2con2024-01.webp" /></a> que será realizado no Seminole Hard Rock Hotel e Casino em Hollywood, Flórida, EUA.

                </p>
                
                <p className={styles.cContext}>which will be held at the Seminole Hard Rock Hotel and Casino in Hollywood, FL, USA.</p>

                <p className={styles.cPrizes}>Plus, 10 other lucky winners <br/> will each receive a 14-inch MacBook Pro<br /> with an Apple M3 chip.</p>
           </div>




  
         
          </Row>
        </Container>

        

      </section>

 

    </Layout>
  )
}


