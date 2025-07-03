
import Container from 'react-bootstrap/Container';


import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const TopNav = () => {
    return (
        <>



<Navbar bg="light" expand="lg" variant="light" sticky="top" className="cChoreoNav cSmallNav ">
      <Container fluid className="container-transition" id="myContainer">
        <Navbar.Brand href="/" aria-label="">
          <img
            src="https://wso2.cachefly.net/wso2/sites/all/2022/images/logos/choreo-by-wso2-black.svg"
            alt="Choreo Logo"
            className="ls-is-cached lazyloaded"
            loading="lazy"
            style={{ height: '32px', width: '120px' }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarTogglerDemo02" className="cnavbutton">
          Menu
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarTogglerDemo02">
          <Nav className="me-auto"></Nav>
          <Nav>
          <Nav.Link href="https://wso2.com/choreo/docs/" id="ChoreoDocs" target="_blank" aria-label="Docs">
              Docs 
            </Nav.Link>
            <NavDropdown title="Use Cases" id="navbarDropdownSolutions" >
            <div className="cSelectedChoreo"></div>
              <Row>
    <div className='cDropUse'>
    <Row>
   
   
                <Col sm={12} md={6} lg={6}>
                  <h5>Solutions</h5>
                 <ul>
                            <li><a class="dropdown-item" href="https://wso2.com/choreo/api-management" aria-label="API Management">API Management</a></li>
                            <li><a class="dropdown-item" href="https://wso2.com/choreo/usecases/automating-etl-tasks-effectively-with-choreo/" aria-label="Automating ETL Tasks">Automating ETL Tasks</a></li>
                            {/* <li><a class="dropdown-item" href="https://wso2.com/choreo/usecases/b2b-edi-integration-with-choreo/" aria-label="B2B EDI Integration">B2B EDI Integration</a></li> */}
                            <li><a class="dropdown-item" href="https://wso2.com/choreo/usecases/fast-track-your-flask-app-to-the-cloud-with-choreo/" aria-label="Deploy a Flask App">Deploy a Flask App</a></li>
                            <li><a class="dropdown-item" href="https://wso2.com/choreo/usecases/deploy-your-web-application-with-choreo/" aria-label="Deploy a Web App">Deploy a Web App</a></li>
                            <li><a class="dropdown-item" href="https://wso2.com/choreo/usecases/event-driven-graphql-bff-with-real-time-notifications/" aria-label="Event-driven GraphQL BFF">Event-driven GraphQL BFF</a></li>
                            <li><a class="dropdown-item" href="https://wso2.com/choreo/usecases/unleash-the-power-of-generative-ai-with-choreo/" aria-label="Generative AI">Generative AI</a></li>
                            <li><a class="dropdown-item" href="https://wso2.com/choreo/integration" aria-label="Integration">Integration</a></li>
                            <li><a class="dropdown-item" href="https://wso2.com/choreo/usecases/deploying-scalable-microservices-with-choreo/" aria-label="Microservices">Microservices</a></li>
                            <li><a class="dropdown-item" href="https://wso2.com/choreo/usecases/empowering-observability-and-insightful-monitoring-with-choreo/" aria-label="Observability and Monitoring">Observability and Monitoring</a></li>
                       
                    </ul>
 
                </Col>
                <Col sm={12} md={6} lg={6}>
                <h5>Languages</h5>
                 <ul>
                   <li><a className="dropdown-item" href="/react" aria-label="React">React</a></li>
                   <li><a className="dropdown-item" href="/python" aria-label="React">Python</a></li>
                       
                    </ul>
                </Col>
                
                
                </Row>
    </div>
                
              </Row>
            </NavDropdown>
            <Nav.Link href="https://medium.com/choreo-tech-blog" id="Blog" target="_blank" aria-label="Choreo Blog">
              Blog
            </Nav.Link>

            <Nav.Link href="https://wso2.com/choreo/pricing/" id="Pricing" target="_blank">
              Pricing
            </Nav.Link>

            <Nav.Link href="https://discord.com/invite/wso2" id="Community" target="_blank" aria-label="Choreo Community">
            Community
            </Nav.Link>

            <Nav.Link href="http://wso2.com/choreo" id="Enterprise" target="_blank" aria-label="Choreo Enterprise">
            Enterprise
            </Nav.Link>

            <Nav.Link className='cNavContact' href="https://wso2.com/contact/?ref=choreo" id="ContactUs" target="_blank" aria-label="Contact Us">
           Contact Us
            </Nav.Link>

            <Nav.Link href="https://console.choreo.dev/?visitor_id=645a09031d3023.48602168&utm_source=site&utm_medium=organic" id="login" target="_blank" aria-label="Choreo login">
            Login
            </Nav.Link>
           
           
           
     
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>







        </>
    )
}
export default TopNav;






