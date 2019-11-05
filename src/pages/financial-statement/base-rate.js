import React from 'react'
import Content from '../../components/content'
import Meaning from '../../components/meaning'
import Points from '../../components/points';
import BaseRateImg from '../../images/base-rate.jpg'

export default () => (
  <Meaning previous={{title:"Financial statement", link: "/financial-statement"}} title="Base Rate">
    <Content>
      Base rate is the minimum interest rate fixed by respective banks, below which they do not lend money to the borrowers. Each of the banks decide its base rate from time to time (quarterly mostly).
    </Content>
    <Content>
      <img src={BaseRateImg} alt="Base Rate"/>
    </Content>
    <Content>
      Let's Say: 
      A bank has a base rate of 9% for january. Then if any body comes to take a loan, then they will charge them with (9+premium)% interest. Lets say, a bank decided to give a student an education loan 12%. That interest rate will be sum of 9% base rate and 3% of premium.
    </Content>
    <Content>
      So, when the interest rate of any loan on the future changes, it means it changed the base rate while premium will never change. For example. for the month january, the base rate is now 10%. The student who took the loan in the past will now have to pay 13% i.e. base rate of 10% plus premium of 3%.
    </Content>
    <Content>
      Rates generally changes based upon the cost or expenses that a bank has for its operations and credit risks. It has been kept free to banks to revise the loan plans. It means, NRB is not regulating the base rate of any banks.
    </Content>
    <Points>
      <ul>
        <li>Bank has the sole right to declare the base rate.</li>
        <li>If the base rate goes up, borrowers will have to pay more interest than when they did while taking loan.</li>
        <li>Rising base rate means having negative impact on other markets like share, land and economy of the country. While, it means more improved returns for people who save more.</li>
        <li>Rising base rate may lead to lower inflation but increased unemployments.</li>
      </ul>
    </Points>
  </Meaning>
)