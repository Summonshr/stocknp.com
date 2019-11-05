import React from 'react'
import Content from '../../components/content'
import Meaning from '../../components/meaning'
import Points from '../../components/points'
export default () => (
  <Meaning previous={{title:"Financial statement", link: "/financial-statement"}} title="Investment in subsidiaries and associates">
    <Content>
      A subsidiary is a company with stock that is more than 50% controlled by another company, which is usually referred to as the parent company or the holding company.
    </Content>
    <Content>
      For example, laxmi laghubitta bittiya sanstha limited is a subsidiary of laxmi bank.
    </Content>
    <Points>
      <ul>
        <li>Subsidiaries have more returns on investments</li>
      </ul>
    </Points>
    <Content>
      Associates are the other similar companies in where parent company has some minority stake of the corporation. For example, Citizen investment trust or Employee Provident Fund having stake on multiple financial institutions. They do not control the financial statements of the company but only takes the portion of the income as a return on investment.
    </Content>
  </Meaning>
)