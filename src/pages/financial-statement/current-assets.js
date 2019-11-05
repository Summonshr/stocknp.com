import React from 'react'
import Content from '../../components/content'
import Meaning from '../../components/meaning'
import CurrentAssets from '../../images/current-asset.jpg'
import Points from '../../components/points'
import CurrentAssetsPic from '../../images/current-assets-pic.png';
export default () => (
  <Meaning previous={{title:"Financial statement", link: "/financial-statement"}} title="Current assets">
    <Content>
      Those assets that are expected to be converted to cash within current fiscal year are called current assets. Such assets includes cash and cash equivalents, prepaid expenses, accounts receivable and inventory.
    </Content>
    <Content>
      <img src={CurrentAssets} alt="current-asset" />
    </Content>
    <Content>
      <b>Accounts receivable</b> means a company has supplied the goods or delivered services but not yet get paid by those customers. It is accounted into current assets as long as they can expect it to be paid within a year. For example: A hydropower company may have provided the electricity but only gets paid on last month of each fiscal year.
    </Content>
    <Content>
      <b>Prepaid expenses</b> means the advance payments done by the company for goods and services to be received in the future. These are generally considered current asset even though they cannot be converted into cash. These expenses are made in the hope to get discounts or uninterruptable services. For example: A bank paying bulk sum of amount for internet service provider or paying insurance premium upfront.
    </Content>
    <Content>
      <img src={CurrentAssetsPic} alt="Current asset pic" />
    </Content>
    <Content>
      Creditors and Investors keep a very close interest on the current assets of the company to measure its current status and the risk involved in its operations.
    </Content>
    <Points>
      <ul>
        <li>These assets are expected to be sold conveniently in current fiscal year.</li>
        <li>Larger current assets does not mean dividend of the company will be higher too.</li>
        <li>However lower current assets can lead to difficulty in day to day operation of a company.</li>
      </ul>
    </Points>
  </Meaning>
)