import React from 'react'
import Content from '../../components/content'
import Meaning from '../../components/meaning'
import Points from '../../components/points'
import Youtube from 'react-youtube'

export default () => (
  <Meaning previous={{title:"Financial statement", link: "/financial-statement"}} title="Loans and advances">
    <Content>
      <img src="https://i2.wp.com/mnacritique.mergersindia.com/wp-content/uploads/2017/09/Advances-and-Loans-Company-Act-2013.jpg?fit=1200%2C644&ssl=1" alt="Loans and advances" />
    </Content>
    <Content>
      <b>
        Loans
      </b> are funds borrowed by a customer from a financial institution. It is generally repayable after a specific period carrying interest rate. There is certain prepayment charge if the borrower wishes to pay the full amount quickly.
    </Content>
    <Points>
      <ul>
        <li>
          Long term
        </li>
        <li>More profitable</li>
        <li>More legal procedure</li>
        <li>Penalty applicable if paid earlier</li>
      </ul>
    </Points>
    <Content>
      <b>Advances</b> are the funds provided by the banks to an certain entity for a specific purpose, to be repayable after a short duration. Like a credit facility that should be repaid within a year.
    </Content>
    <Points>
      <ul>
        <li>Short term</li>
        <li>Less legal hassle</li>
        <li>It is similar to credit card facility.</li>
        <li>Less profitable, generally done as favour or for reduced future cost</li>
      </ul>
    </Points>
    <Content>
      <Youtube opts={{width: '100%'}} videoId="N8qyS11Hv-4" />
    </Content>
  </Meaning>
)