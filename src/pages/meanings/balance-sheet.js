import React from 'react'
import Content from '../../components/content'
import Meaning from '../../components/meaning'

export default () => (
  <Meaning title="Balance Sheet">
    <Content>
      A balance sheet reports a company's assets, liabilities and shareholders'
      equity at a specific point in time, and provides a basis for computing
      rates of return and evaluating its capital structure. It is a financial
      statement that provides a snapshot of what a company owns and owes, as
      well as the amount invested by shareholders.
    </Content>
    <Content>
      The balance sheet adheres to the following equation, where assets on one
      side, and liabilities plus shareholders' equity on the other, balance out:
    </Content>
    <Content>Assets = Liabilities + Shareholders' Equity</Content>
    <Content>
      This is intuitive: a company has to pay for all the things it owns
      (assets) by either borrowing money (taking on liabilities) or taking it
      from investors (issuing shareholders' equity).
    </Content>
  </Meaning>
)
