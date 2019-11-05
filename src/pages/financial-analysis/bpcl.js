import React from 'react'
import Layout from '../../components/layout'
import Content from '../../components/content'
import Plan from '../../components/plan'
import Points from '../../components/points'
import Instruction from '../../components/instruction'
import Definition from '../../components/definition'
import BPCL from '../../images/bpcl.jpg'
import Name from '../../components/name'

export default ({ data }) => (
  <Layout title={"Butwal Power Company Limited - BPCL"}>
    <Points>
      <ul>
        <li>
          Full fledge construction of <b>30MW</b> Nyadi and <b>37.6MW</b>{' '}
          Kabeli-A hydropower Project has started which aims to produce results
          in <b>2020</b>.
        </li>
        <li>
          <i>
            <Definition>Joint Venture</Definition>
          </i>{' '}
          Company registered with Chinese Partners for development of new
          hydropower projects
        </li>
        <li>
          Net Profit <b>Rs. 668 million (Rs. 6.68 crore)</b>,
          <u className="pl-1">7.8% higher than last year</u>
        </li>
        <li>
          Company has purchased 19.4% i.e. 6,01,300 unit shares of the Himtaal
          Hydropower Company Limited Pvt. Ltd.
        </li>
      </ul>
    </Points>
    <Content>
      <img src={BPCL} alt="BPCL"/>
    </Content>
    <Content>
      <Name code="BPCL"/> has increased its profit by <b>5.13%</b> in the fiscal year
      2074/2075. Last year the profit was of <b>Rs. 668 million </b> while it
      has increased to <b>723 million</b> this year . The asset value has
      increased by <b>48.2%</b> to reach <b>6.51 Billion</b> but this can be
      credited to its recent release of FPO. Due to this, Earnings per share has
      also been decreased from <b>37.02</b> to <b>36.33</b>.
    </Content>
    <Content>
      <Name code="BPCL"/> current has <Definition>non-current assets</Definition> amounts to{' '}
      <b>5.4 Billion</b> which <Definition>current assets</Definition> amount to{' '}
      <b>2.2 Billion</b> taking total asset to <b>7.6 billion</b>. Looking at{' '}
      <Definition>non-current assets</Definition>, the company definetely has
      bigger plans for the future.
    </Content>
    <Plan>
      <Name code="BPCL"/> has plans to generate <b>1000MW</b> electricity through a number of
      projects under the <Definition>joint venture</Definition> partnership with
      renowned Chinese companies with an investment of <b>US$ 2 Billion</b>{' '}
      within next five years
    </Plan>
    <Instruction>
      Buy and hold because current price is low and non-current assets is high.
    </Instruction>
  </Layout>
)
