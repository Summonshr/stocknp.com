import React from 'react'
import Points from '../../components/points'
import Content from '../../components/content'
import Meaning from '../../components/meaning'

export default () => (
  <Meaning title="Current Asset">
    <Content>
      Current assets are items listed on a company's balance sheet that are
      expected to be converted into cash within one fiscal year.
    </Content>
    <Content>
      Current assets represent the value of all assets that can be converted to
      cash and are used to fund the ongoing operations of the company and pay
      current expenses.
    </Content>
    <Points title="Current assets include:">
      <ul>
        <li>Cash and cash equivalents</li>
        <li>Accounts receivable</li>
        <li>Prepaid expenses</li>
        <li>Inventory</li>
        <li>Marketable securities</li>
      </ul>
    </Points>
  </Meaning>
)
