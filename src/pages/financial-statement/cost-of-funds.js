import React from 'react'
import Content from '../../components/content'
import Meaning from '../../components/meaning'
import Youtube from 'react-youtube';
import CostImage from '../../images/cost-of-funds.png'

export default () => (
  <Meaning previous={{title:"Financial statement", link: "/financial-statement"}} title="Cost of funds">
    <Content>
      Cost of funds is the interest rate paid by financial institutions for the funds that they deploy in their business. The cost of funds is one of the most important input costs for a financial institution, since a lower cost will generate better returns when the funds are used for short-term and long-term loans to borrowers.
    </Content>
    <Content>
      <img src={CostImage} alt="cost-of-funds"/>
    </Content>
    <Content>
      The spread between the cost of funds and the interest rate charged to borrowers represents one of the main sources of profit for most financial institutions.     </Content>
    <Content>
      <Youtube opts={{ width: '100%' }} videoId="Yr5B_4LlyA8" />
    </Content>
  </Meaning>
)