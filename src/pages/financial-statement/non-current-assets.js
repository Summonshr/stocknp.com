import React from 'react'
import Content from '../../components/content'
import Meaning from '../../components/meaning'
import Points from '../../components/points'

export default () => (
    <Meaning previous={{title:"Financial statement", link: "/financial-statement"}} title="Non current assets">
        <Content>
            Non-current assets are assets that are not turned into cash easily, are expected to be turned into cash within a year, and/or have a lifespan of more than a year. They can refer to tangible assets such as machinery, computers, buildings and land. Non-current assets also can be intangible assets such as goodwill, patents or copyright. While these assets are not physical in nature, they are often the resources that can make or break a company – the value of a brand name, for instance, should not be underestimated.
        </Content>
        <Points>
            <ul>
                <li>Depreciation is deducted from non current assets. So, higher value of current may not be higher in the future.</li>
                <li>Generally consists of strong assets of company that would decide the future of the company.</li>
                <li>If any company has higher non current assets, you should further analyse the company and how it would make an impact in the future. For example: Upper tamakoshi hydropower which will be producing huge amount of electricity in near future.</li>
                <li>If the share price is lower of any company with higher non current asset then you should consider buying some fixed amount. </li>
            </ul>
        </Points>
    </Meaning>
)