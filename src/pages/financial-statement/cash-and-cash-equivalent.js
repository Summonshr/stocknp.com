import React from 'react'
import Content from '../../components/content'
import Meaning from '../../components/meaning'
import Youtube from 'react-youtube';

export default () => (
  <Meaning previous={{title:"Financial statement", link: "/financial-statement"}} title="Cash and Cash equivalent">
    <Content>
      <img src="https://i.investopedia.com/dimages/graphics/cash_and_cash_equivalents.png" alt="Cash and Cash equivalent" />
    </Content>
    <Content>
      <b>Cash</b> means cash in hand that a company have an easy access too. For example, a company can have enough cash in their bank account to payout salary to their employees or a bank has to have enough cash in their reach to service a cheque of their customer.
    </Content>
    <Content>
      <b>Cash equivalents</b> refer to the line item on the financial statement that reports the value of a company's assets that can be converted into cash immediately. These include bank accounts, marketable securities, Treasury bills and short-term government bonds sold by Nepal Rastra Bank. These should be investments that are easily convertible to cash. It must be short term, usually for duration for three months or less. If the duration is for more than three months, it is seen in financial statement as 'other investments'.
    </Content>
    <Youtube opts={{width: '100%'}} videoId="mcZMe9hUGbQ"/>
  </Meaning>
)