import React from 'react'
import Content from '../../components/content'
import Meaning from '../../components/meaning'
import Points from '../../components/points'
import Credit from '../../images/credit-to-deposit-ratio.png'

export default () => (
  <Meaning previous={{title:"Financial statement", link: "/financial-statement"}} title="Credit to deposit ratio">
    <Content>
      The ratio of how much money has been loaned out to the total deposits made into the financial institution is credit to deposit ratio. It indicates how much of a company's main funds are being used for lending purpose i.e make optimal use of the resources available at their hand. A higher ratio indicates more reliance on deposits for lending and vice-versa.
    </Content>
    <Content>
      <img src={Credit} alt="Credit to deposit ratio"/>
    </Content>
    <Content>
      However, if the ratio is above certain level (80% in case of nepali banks), the banks may feel pressure on their available resources, because banks simply cannot run out of cash at any time. They have to have certain cash on their hand for running day to day operation.
    </Content>
    <Points>
      <ul>
        <li>Higher the better.</li>
        <li>Lower means company is unable to make full use of their resource.</li>
      </ul>
    </Points>
  </Meaning>
)