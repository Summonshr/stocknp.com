import React from 'react'
import Content from '../../components/content'
import Meaning from '../../components/meaning'

export default () => (
  <Meaning previous={{title:"Financial statement", link: "/financial-statement"}} title="Fee and commisson income">
    <Content>
      Fee income is the revenue taken in by financial institutions from account-related charges to customers. Charges that generate fee income include non-sufficient funds fees, overdraft charges, late fees, over-the-limit fees, wire transfer fees, monthly service charges, account research fees and more. Credit unions, banks and credit card companies are types of financial institutions that earn fee income.
    </Content>
    <Content>
      Commission income refers to fees earned by brokers and agents in making a sale or closing a deal. It is the primary revenue account of real estate brokers, stock brokers, insurance agencies, etc.
    </Content>
  </Meaning>
)