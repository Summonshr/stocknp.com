import React from 'react'
import Content from '../../components/content'
import Meaning from '../../components/meaning'

export default () => (<Meaning previous={
  {
    title: "Financial statement",
    link: "/financial-statement"
  }
}
  title="Segment assets" >
    <Content >
      Segment assets are those operating assets that are employed by a segment in its operating activities and that either are directly attributable to the segment or can be allocated to the segment on a reasonable basis.
    </Content>
    <Content>
      If the segment result of a segment includes interest or dividend income, its segment assets include the related receivables, loans, investments, or other interest or dividend generating assets.
    </Content>
    <Content>
      Segment assets do not include income tax assets. Segment assets are determined after deducting related allowances / provisions that are reported as direct offsets in the balance sheet of the enterprise.
    </Content>
  </Meaning>
)