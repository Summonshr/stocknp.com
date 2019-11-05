import React from 'react'
import Content from '../../components/content'
import Meaning from '../../components/meaning'
import Points from '../../components/points'

export default () => (
  <Meaning previous={{title:"Financial statement", link: "/financial-statement"}} title="Capital funds to RWA">
    <Content>
      Capital funding is the money that lenders and equity holders provide to a business. A company's capital funding consists of both debt (bonds) and equity (stock). The business uses this money for operating capital. The bond and equity holders expect to earn a return on their investment in the form of interest, dividends, and stock appreciation.
    </Content>
    <Points>
      <ul>
        <li>Can be done through either issuing stock (IPO) or raising capital through debt (i.e. taking loans from banks or commercial institutions).</li>
        <li>In the event that a company goes bankrupt and has its assets liquidated, its creditors will be paid off first before shareholders are considered.</li>
        <li>Are generally decreased as they pay loans in upcoming time period.</li>
      </ul>
    </Points>
  </Meaning>
)