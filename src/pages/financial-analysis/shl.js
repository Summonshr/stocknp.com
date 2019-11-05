import React from 'react'
import Layout from '../../components/layout'
import Content from '../../components/content'
import Points from '../../components/points'
import Instruction from '../../components/instruction'
import Definition from '../../components/definition'
import SHL from '../../images/shl.jpg'

export default ({ data }) => (
  <Layout title="Soaltee Hotel Limited - SHL">
    <Points>
      <ul>
        <li>141 rooms of Himalayan Wing block has been added totaling 228.</li>
        <li>Room Rate has icreased approximately by 20%</li>
        <li>
          Has plans to contruct larger parking area to park more than 250 cars
          at the time.
        </li>
        <li>
          Company has an investment in Bhote Koshi Power Company (P) Ltd (BKPC)
          through Himal International Power Corp (P) Lstranger td (HIPC) that returned
          Rs. 500,000 in the last year.
        </li>
        <li>
          Recent dividend was of <b>26%</b> with 10% of bonus and 16% of cash .
        </li>
      </ul>
    </Points>
    <Content>
      During the fiscal year 2074/75 (2017/18), an increase of <b>1.44%</b>{' '}
      (previous year <i>31.86%</i>) was recorded in the total{' '}
      <Definition>revenue</Definition> as compared to the previous fiscal year.
      Total <Definition>revenue</Definition> for the fiscal year was Rs.
      <b>1,664.20 million</b> (previous year Rs. <i>1,640.52 million</i>) which
      is an increase of <b>Rs. 23.68 million</b> (previous year Rs. 396.43
      million) compared to last fiscal year.
    </Content>
    <Content>
      <img src={SHL} alt="Soaltee Hotel Limited"/>
    </Content>
    <Content>
      During the year under review, company registered a Cash Profit of{' '}
      <b>Rs. 422.38 million</b> (previous year <b>Rs. 271.92 million</b>) which
      is an increase of <b>Rs. 150.45 million</b> (Previous year Rs 53.92
      million) with Net profit after tax being <b>Rs. 279.23 million</b>{' '}
      (previous year Rs. 138.73 million) which is an increase of{' '}
      <b>Rs. 140.49 million</b> (previous year Rs 38.85 million).
    </Content>
    <Content>
      Soaltee Hotel has significant increment in{' '}
      <Definition>non-current assets</Definition> which projects that the
      upcoming dividends are about to be bigger.
    </Content>
    <Content>
      But, looking at the current asset which is a decrement from previous year,
      the dividend will be significantly lesser than the previous one.
    </Content>
    <Instruction>
      As current asset is lower than previous year, we can expect to have
      negative impact on upcoming dividend. But, the current share price of SHL is
      at all time low point so, it is wise to buy and hold more shares if it
      goes any under 205. Depending upon non current asset and upcoming visit year 2020, the share prices of SHL are bound to go up.
    </Instruction>
  </Layout>
)
