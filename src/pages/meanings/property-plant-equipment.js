import React from 'react'
import Points from '../../components/points'
import Content from '../../components/content'
import Meaning from '../../components/meaning'
import Definition from '../../components/definition'

export default () => (
  <Meaning title="Property, Plant and Equipment">
    <Content>
      Property, plant, and equipment (PP&E) are long-term assets vital to
      business operations and not easily converted into cash. The total value of
      PP&E can range from very low to extremely high compared to total assets.
      International accounting standard (IAS) 16 prescribes the accounting
      treatment of PP&E. Factors that cause PP&E to be listed separately on the
      balance sheet are how they are recognized as assets, how their carrying
      amounts are determined, and their associated depreciation charges.
    </Content>
    <Points>
      <ul>
        <li>
          <Definition>Plant</Definition>
        </li>
        <li>
          <Definition>Property</Definition>
        </li>
        <li>
          <Definition>Equipment</Definition>
        </li>
      </ul>
    </Points>
  </Meaning>
)
