import React from 'react'
import Content from '../../components/content'
import Meaning from '../../components/meaning'
import Points from '../../components/points'
import Youtube from 'react-youtube';
export default () => (
  <Meaning previous={{title:"Financial statement", link: "/financial-statement"}} title="Loan Loss Provision">
    <Content>
      A loan loss provision is an expense set aside as an allowance for uncollected loans and loan payments. This provision is used to cover a number of factors associated with potential loan losses including bad loans, customer defaults and renegotiated terms of a loan that incur lower than previously estimated payments. Loan loss provisions are an adjustment to loan loss reserves and can also be known as valuation allowances.
    </Content>
    <Content>
      It is simply an amount or expenses set asite in the event that the loan defaults. Generally, to be a shock absorbers in the case that bank do not run into to issue in case of future losses. You will generally find this amount relevant to the non performing loans.
    </Content>
    <Content>
      If you study a financial statement, you will find a non performing loan to total loan ratio in it. These are generally under few percent may be 1 or 2 in most cases and 4 at max. These loans are generally the ones whose borrowers are not performing well and financial institution has very low chances of recovering it in future. So, it has to set aside some amount to make sure that bank do not run into problem in case of those loss. 
    </Content>
    <Points>
      <ul>
        <li>
          Higher the value in this section shows the ability of the insutitution to absorb any loan losses that may be encountered in a near future. 
        </li>
        <li>
          NRB forces financial institutions to set aside some amount for this provision.
        </li>
        <li>
          Thus, decreasing the net income that is distributable as dividends.
        </li>
        <li>
          The values of this column are not directly proportional to the stock prices of the company.
        </li>
      </ul>  
    </Points>
    <Content>
      <Youtube opts={{ width: '100%' }} videoId="oteucejMs1M" />
    </Content>
  </Meaning>
)