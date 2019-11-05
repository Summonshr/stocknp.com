import React from 'react'
import Content from '../../components/content'
import Meaning from '../../components/meaning'

export default () => (
  <Meaning title="Account Receivable">
    <Content>
      Earnings per share (EPS) is the portion of a company's profit allocated to
      each share of common stock. Earnings per share serves as an indicator of a
      company's profitability. It is common for a company to report EPS that are
      adjusted for extraordinary items, potential share dilution. Most simply
      EPS is calculated as:
    </Content>
    <Content>
      EPS = (Net Income - Preferred Dividends) / Weighted Average Common Shares
    </Content>
    <Content>
      To calculate the EPS of a company, the balance sheet and income statement
      are used to find the weighted average number of common shares, dividends
      paid on preferred stock (if any), and the net income or earnings. It is
      more accurate to use a weighted average number of common shares over the
      reporting term, because the number of shares can change over time. Any
      stock dividends or splits that occur must be reflected in the calculation
      of the weighted average number of shares outstanding. Some data sources
      simplify the calculation by using the number of shares outstanding at the
      end of a period.
    </Content>
    <Content>
      Earnings per share (EPS) is one of the most important variables in
      determining a share's price. It is also a major component used to
      calculate the price-to-earnings (P/E) valuation ratio, where the 'E' in
      P/E refers to EPS. By dividing a company's share price by its earnings per
      share, an investor can see the value of a stock in terms of how much the
      market is willing to pay for each dollar of earnings.
    </Content>
  </Meaning>
)
