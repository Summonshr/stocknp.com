import React from 'react'
import Content from '../../components/content'
import Meaning from '../../components/meaning'
import Points from '../../components/points'
import Youtube from 'react-youtube'
import InterestTaxImage from '../../images/interest-tax-image.jpg'

export default () => (
  <Meaning previous={{title:"Financial statement", link: "/financial-statement"}} title="Interest income">
    <Content>
      Interest income is the revenue earned by the financial institution which had lend its money over a period of time to borrowers. All financial instutution holds some sort of financial assets that earn interest in some period of time.
    </Content>
    <Points>
      <ul>
        <li>Bank earns interest from borrowers who uses their funds.</li>
        <li>Hydropower earns interest from the deposits they have on their banks.</li>
        <li>Even NTC has created fixed deposits on various banks of nepal which returns interest.</li>
        <li>If you had invested in NICA 11% debenture than you would have interest income too.</li>
      </ul>
    </Points>
    <Content>
      <img src={InterestTaxImage} alt="Interest Income"/>
    </Content>
    <Content>
      This income is taxable i.e. whoever earns the income in the means of interest has to pay the tax to government.
    </Content>
    <Points>
      <ul>
        <li>Just because the interest income is higher does not mean the company is doing well. </li>
        <li>It is also manadatory to look out on how much expenses is happening too.</li>
      </ul>
    </Points>
    <Youtube opts={{ width: '100%' }} videoId="gD4ZFhRAvhg"/>
  </Meaning>
)