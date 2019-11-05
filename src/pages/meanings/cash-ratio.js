import React from 'react'
import Content from '../../components/content'
import Meaning from '../../components/meaning'
import Definition from '../../components/definition'

export default () => (
  <Meaning title="Cash Ratio">
    <Content>
      The cash ratio is calculated as the sum of the market value of cash and
      <Definition>marketable securities</Definition> divided by a company's
      current liabilities. Creditors prefer a ratio above 1 since this means
      that a firm will be able to cover all its short-term debt if they came due
      now. However, most companies have a low cash ratio since holding too much
      cash or investing heavily in{' '}
      <Definition>marketable securities</Definition> is not a highly profitable
      strategy.
    </Content>
  </Meaning>
)
