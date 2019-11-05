import React from 'react'
import Content from '../../components/content'
import Meaning from '../../components/meaning'

export default () => (
  <Meaning previous={{title:"Financial statement", link: "/financial-statement"}} title="Diluted earning per share">
    <Content>
      Diluted EPS is a calculation used to gauge the quality of a company's earnings per share (EPS) if all convertible securities were exercised. Convertible securities are all outstanding convertible preferred shares, convertible debentures, stock options, and warrants. Unless a company has no additional potential shares outstanding (rare), the diluted EPS will always be lower than the simple or basic EPS.
    </Content>
    <Content>
      Earnings per share, the value of earnings per share of outstanding common stock, is a very important measure to assess a company's financial health. When reporting financial results, revenue and EPS are the two most commonly assessed metrics. EPS is reported on a company's income statement, and only public companies are required to report it.  In their earnings reports, companies report both primary and diluted EPS, but the focus is generally on the more conservative diluted EPS measure. Dilutive EPS is considered a conservative metric because it indicates a worst-case scenario in terms of EPS.
    </Content>
  </Meaning>
)