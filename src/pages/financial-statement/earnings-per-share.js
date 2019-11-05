import React from 'react'
import Content from '../../components/content'
import Meaning from '../../components/meaning'
import Points from '../../components/points'


export default () => (
  <Meaning previous={{title:"Financial statement", link: "/financial-statement"}} title="Basic Earning per Share">
    <Content>
      Basic earnings per share is a rough measurement of the amount of a company's profit that can be allocated to one share of its stock.
    </Content>
    <Content>
      <img src="https://cdn.corporatefinanceinstitute.com/assets/earnings-per-share.png" alt="Earnign per share" />
    </Content>
    <Points>
      <ul>
        <li>Higher is the better. (In most cases)</li>
        <li>But, if company is new, earning per share will be significantly lower because most of its capital are spent on non current assets.</li>
        <li>First quarter report of any financial institution report will have considerably lower eps because it is adjusted after distributing dividends.</li>
        <li>EPS will dive down in case of right shares are issued.</li>
        <li>When eps increases drastically in any quarter report, thats when the share prices go up.</li>
      </ul>
    </Points>
  </Meaning>
)