import React from 'react'
import Content from '../../components/content'
import Meaning from '../../components/meaning'
import Points from '../../components/points'


export default () => (
  <Meaning previous={{title:"Financial statement", link: "/financial-statement"}} title="Bonds">
    <Content>
      In simple terms, a bond is a paper issued by governments or other corporations when they need money to invest in projects. This bond is issued to the public at a
      certain price determined by the public authorities or companies. The issuers owe the holders a debt and promise to pay the interest annually or semiannually and pay
      back the principal amount in the maturity period. It is just like shares and stocks issued by the companies in the secondary market but bonds act differently than
      shares as bond holders are paid interest, generally semiannually while shareholders are paid dividend depending on companies´ rule and profit
    </Content>
    <Points>
      <ul>
        <li>Debentures are a type of unsecured bonds whichI means that if company fails, you may get little of your investment. </li>
        <li>Secured bond on the other hand has specific assets pledged to bondholders if company cannot repay the obligations.</li>
        <li>Interest are paid to bondholders too and principal is returned at the end of the maturity period.</li>
      </ul>
    </Points>
  </Meaning>
)