import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Nav from 'react-bootstrap/Nav';


import Tab from 'react-bootstrap/Tab';
import Layout from '../..//layouts/LayoutHome';
import Table from 'react-bootstrap/Table';

import Accordion from 'react-bootstrap/Accordion';


import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';






export default function Pricing() {
  return (
    <Layout>
{/* <script src="https://code.jquery.com/jquery-3.6.0.js" crossorigin="anonymous"></script>

<link rel="stylesheet" href="https://wso2.cachefly.net/wso2/sites/all/2023/sliders/jqueryui.min.css" crossorigin="anonymous"/>
  <link rel="stylesheet" href="https://wso2.cachefly.net/wso2/sites/all/2023/sliders/jquery-ui-slider-pips.css" crossorigin="anonymous"/>
  <script src="https://wso2.cachefly.net/wso2/sites/all/2023/sliders/jquery-ui.min.js" crossorigin="anonymous"></script>
  <script src="https://wso2.cachefly.net/wso2/sites/all/2023/sliders/jquery-ui-slider-pips.js" crossorigin="anonymous"></script>
  <script src=" https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/choreo-calculator.js" crossorigin="anonymous"></script> */}
 
<section className="cChoreoSection cGrayBackground cInnerPage cTandC">
      <Container>
        <Row>
          <Col sm={12} md={2} lg={2}></Col>
          <Col sm={12} md={8} lg={8} className="cCenterTitleContainer cTnCText" style={{ paddingBottom: 0 }}>




          <h2> WSO2 Code Challenge</h2>
<h2>Terms and Conditions</h2>


<h3>Participation Rules</h3>
<p>The goal of this challenge is for individual developers to experience <a href="https://choreo.dev/">Choreo</a>, WSO2's Internal Developer Platform as a Service using the Free Developer Tier. Build an application in any language and deploy it on Choreo.&nbsp;</p>
<p>Every eligible participant wins an entry in the draw. To be eligible you need to do the following:</p>
<ul className='cListStyle'>
<li>include both a frontend as well as backend APIs, and</li>
<li>run in a Choreo production environment.</li>
</ul>
<p>Boost your odds of winning :&nbsp;</p>
<p>Adding more components up to the Choreo free <a href="https://choreo.dev/pricing">Developer tier</a> limit to the application will increase your chances of winning. With each component, you will receive an extra entry to the Draw. Additional components are defined as follows:</p>
<ul className='cListStyle'>
<li>Using a connection to integrate the backend API to the frontend</li>
<li>Databases</li>
<li>Manual or scheduled jobs</li>
<li>Multiple <a href="https://wso2.com/choreo/docs/choreo-concepts/project/">projects</a></li>
<li><a href="https://wso2.com/choreo/docs/references/faq/#q-what-is-the-difference-between-an-internal-and-external-api">Internal and external APIs</a></li>
<li>Use <a href="https://wso2.com/asgardeo">Asgardeo</a> for application authentication</li>
<li>Use <a href="https://ballerina.io">Ballerina</a> to implement backend logic or APIs</li>
</ul>
<p><strong>Submission process will be communicated via </strong><a href="https://choreo.dev/cybertruck"><strong>https://choreo.dev/cybertruck</strong></a><strong></strong><strong> on</strong><strong> March 1, 2024.</strong></p>
<ul className='cListStyle'>
<li>The participants who are eligible for the Draw shall be notified via email (<a href="mailto:code-challenge-evaluator@wso2.com">code-challenge-evaluator@wso2.com</a>).</li>
</ul>
<h3>Selection of winners&nbsp;</h3>
<p>The winner will be selected by way of a draw &ldquo;(the Draw&rdquo;). Announcement of the winners shall be made on <strong>May 9, 2024.&nbsp;</strong></p>
<p>Winners will be notified via email to the email address submitted with their entry.&nbsp;</p>
<p><strong>Grand prize: </strong>Tesla Cybertruck or US$ 100,000 in cash will be awarded to the selected winner from the Draw. The winner may opt to take the prize in cash or the Tesla Cybertruck. The prize will be subject to the additional terms and conditions as specified in<strong> Annex A</strong>.&nbsp;</p>
<p>WSO2 takes no responsibility or liability for any costs associated with importation, shipping, transportation, customs, clearance, taxes, and such other incidental costs in relation to the transportation and/or importation of the Tesla Cybertruck and such costs shall be borne solely by the winner. In the event the cash prize is to be transferred to the winner, all costs such as bank charges, taxes, etc. will be the sole responsibility of the winner.&nbsp;</p>
<p><strong>Additional prizes.</strong> 10 additional selected winners from the Draw will each get a 14-inch Macbook Pro with an Apple M3 chip, with 8GB Memory, 512GB SSD Storage.&nbsp;</p>
<h3>Eligibility&nbsp;</h3>
<p>WSO2 employees or immediate family members of WSO2 employees are <strong>not eligible</strong> to participate.&nbsp;</p>
<p>The Code Challenge is open to individuals of all ages. If participants are under the age of thirteen (13), consent of a parent or guardian to participate is required. Additionally, in the event we select a winner who is below the age of eighteen (18), they must obtain consent from their parent or guardian to receive any eligible prize.&nbsp;</p>
<p>Only one submission per participant will be accepted. </p>
<h3 className='cAnchorTag' id="Disqualification">Disqualification&nbsp;</h3>
<p>A participant will be disqualified:</p>
<ol type='i' className='cListStyle'>
    <li>if such person is a sanctioned individual as per USA, UK, or the EU regulations or is from an entity or nation sanctioned or embargoed by one of the above countries or is in any other way not permitted by law to receive their winnings, or&nbsp;</li>
    <li>if the application does not meet the requirements of the participation rules referred to above, or&nbsp;</li>
    <li>in the event WSO2 finds plagiarized or improperly licensed content within submissions</li>
    <li>in the event that multiple submissions are made by the same individual, that individual shall be disqualified.</li>
</ol>
<p>If WSO2 finds the winner/s to be ineligible for any reason pursuant to the terms and conditions, WSO2 may hold a redraw and WSO2’s decision on the matter shall be final.</p>

<h3>Data Collection</h3>
<p>As part of the registration for this Code Challenge, we will collect your personal information as specified on (<a href="https://choreo.dev/cybertruck">https://choreo.dev/cybertruck</a>). Data is processed in accordance with our <a href="https://ballerina.io/privacy-policy/">privacy policy</a>.</p>
<h3>Publicity&nbsp;</h3>
<p>The participants/winners consent to WSO2 using their name and image in WSO2 marketing and promotional material.</p>
<h3>Participant warranties&nbsp;</h3>
<p>The participants warrant that</p>
<ol type='i' className='ollist'>
<li>all submissions are their original works and that they have all ownership, rights, title, and interest to or have obtained all necessary licenses, permissions, and approvals required to create and publicly display their application and to copy, reproduce and distribute the same in WSO2 websites and marketing materials, and&nbsp;</li>
<li>they will comply with all applicable laws and regulations including, without limitation, regulations governing U.S. economic sanctions programs and all other applicable laws and regulations that govern export control, and economic sanctions.</li>
</ol>
<h3>Compliance&nbsp;</h3>
<p>If the participant/s uses any third-party proprietary component, the participant shall be in compliance with the respective license terms and, if any open source component/s are used, that shall be as per the respective open source license.&nbsp;</p>
<h3>Notices</h3>
<p>All announcements and discussions in connection with this Code Challenge will be done via (<a href="https://choreo.dev/cybertruck">https://choreo.dev/cybertruck</a>) and winners shall be informed via mail.&nbsp;</p>
<h3>Severability</h3>
<p>If any provision of the contract is found to be invalid or unenforceable, the remaining provisions will continue to apply.</p>
<h3>Governing law</h3>
<p>These Terms and Conditions will be governed by the laws of California. Any disputes arising from these Terms and Conditions will be determined and settled by arbitration in Santa Clara, California, in accordance with the rules of the American Arbitration Association (&ldquo;AAA&rdquo;). The award rendered by the arbitrator shall be final and binding on the parties thereto, and judgment may be entered in any court of competent jurisdiction. Nothing in the above provision shall prevent either party from applying to a court of competent jurisdiction for equitable or injunctive relief.</p>


<p><strong>WSO2 reserves the right to amend these Terms and Conditions at any time, at its sole discretion.&nbsp;</strong></p>
<p><strong>WSO2&rsquo;s decision is final, and no correspondence will be entertained with participants.</strong></p>

<span className='cSeparate'></span>
<h2>Annexure A</h2>

<p><strong>(Terms and Conditions for the Tesla CyberTruck)</strong></p>

<ol className='ollist'>
<li>WSO2 will transfer a pre-order reservation slot to the waiting list for the purchase of the Tesla Cybertruck to the winner upon announcement of the winner.&nbsp;</li>

<li>WSO2&rsquo;s commitment to the winner is limited to facilitating the purchase of a Tesla Cybertruck valued at USD 100,000 at the time of delivery, or its equivalent in cash (USD 100,000) as stated in items 4), 5), 6), 8) 10) or 11) below.&nbsp;</li>

<li>Upon transfer of the pre- order reservation slot to the winner by WSO2, the winner will be bound by the Tesla terms and conditions.&nbsp;</li>

<li>WSO2 will not offer the Tesla Cybertruck to the winner in the event there are country specific import or other governmental restrictions. In such an event, the selected winner will be awarded the cash prize of US$100,000.&nbsp;</li>

<li>In the event Tesla&rsquo;s terms do not permit transfer of the pre-order reservation slot, the winner will be awarded USD 100,000 in cash.&nbsp;</li>

<li>If Tesla&rsquo;s terms do not permit transfer of the pre-order reservation slot to a winner under the age of 18 years, such winner will be awarded the cash prize of USD 100,000.&nbsp;</li>

<li>The winner will be on the waiting list as per the pre -order reservation made by WSO2 until a Tesla Cybertruck is available.</li>

<li>The delivery time is beyond WSO2&rsquo;s control and WSO2 cannot guarantee the delivery date. If the waiting time exceeds twelve months from the date of announcement of the winner, WSO2 will pay USD 100,000 to the winner and the winner may, at their discretion, either cancel the pre-order reservation, or continue to stay on the waiting list.&nbsp;</li>

<li>WSO2 will not guarantee the functionality of the Tesla Cybertruck and will not be responsible for defects, malfunction, or performance related deficiencies of the Tesla Cybertruck.</li>

<li>If Tesla discontinues producing Tesla Cybertruck prior to delivery, WSO2 will pay USD 100,000 to the winner.</li>

<li>If the price (including taxes) of the Tesla Cybertruck exceeds USD 100,000 at the time of delivery, WSO2 will pay USD 100,000 to the winner and the winner may, at their discretion, either cancel the reservation, or continue to stay on the waiting list and take delivery.&nbsp;</li>
</ol>












</Col>

















        </Row>
      </Container>
    </section>


   







    </Layout>
  )
}



