import React from 'react'
import Points from '../../components/points'
import Content from '../../components/content'
import Meaning from '../../components/meaning'
import Definition from '../../components/definition'

export default () => (
  <Meaning title="Non Current Assets">
    <Content>
      Non-current assets are long-term assets that a company expects to hold
      over one fiscal year and cannot readily be converted into cash.
    </Content>
    <Content>
      Noncurrent assets are a company’s long-term investments or long-term
      assets that have a useful life of more than one year. Noncurrent assets
      cannot be easily converted to cash.
    </Content>
    <Points title="Current assets include:">
      <ul>
        <li>
          <Definition>Land</Definition>
        </li>
        <li>
          <Definition to="property-plant-equipment">
            Property, plant, and equipment
          </Definition>
        </li>
        <li>
          <Definition>Trademarks</Definition>
        </li>
        <li>
          <Definition>Long-term investments</Definition>
        </li>
        <li>
          <Definition>Goodwill</Definition>
        </li>
      </ul>
    </Points>
    <Content>
      Both fixed assets and intangible assets, fall under noncurrent assets.
    </Content>
  </Meaning>
)
