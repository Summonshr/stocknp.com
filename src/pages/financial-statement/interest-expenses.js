import React from 'react'
import Content from '../../components/content'
import Meaning from '../../components/meaning'
import Points from '../../components/points'
import Youtube from 'react-youtube'

export default () => (
  <Meaning previous={{title:"Financial statement", link: "/financial-statement"}} title="Interest expense">
    <Content>
      Interest expense is the expenses by the financial institution which had lend its money over a period of time. All financial instutution hols some sort of financial assets that earn interest in some period of time.
    </Content>
    <Points>
      <ul>
        <li>Bank gives away interest to its depositors who deposits their money into their institution.</li>
        <li>Bank borrows money from investors from debenture and pays interest semi anually.</li>
        <li>A financial institution has to pay the interest to the bank ( lenders ).</li>
      </ul>
    </Points>
    <Content>
      <img src="https://i.investopedia.com/dimages/graphics/interest_expense.png" alt="Interest Expenses"/>
    </Content>
    <Content>
      This income is taxable i.e. whoever earns the income in the means of interest has to pay the tax to government. For example, if you earned interest from fixed deposits, the interest is deducted from your account as you earned interest.
    </Content>
    <Points>
      <ul>
        <li>
          Difference between interest income and interest expense can be impactful on the stock prices. 
        </li>
        <li>
          Interest income should always be greater than interest expense and the difference between then should be considerable in amount.
        </li>
      </ul>
    </Points>
    <Youtube opts={{ width: '100%' }} videoId="gD4ZFhRAvhg"/>
  </Meaning>
)