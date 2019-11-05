import React from 'react'
import Content from '../../components/content'
import Meaning from '../../components/meaning'
import Points from '../../components/points'
import Debenture from '../../images/debenture.jpg';

export default () => (
    <Meaning previous={{title:"Financial statement", link: "/financial-statement"}} title="Debenture">
        <Content>
            A debenture is a type of debt instrument that is not secured by physical assets or collateral. Debentures are backed only by the general creditworthiness and reputation of the issuer. In Nepal, ICRA nepal provides the ratings for the debenture that a company is about to issue. In recent trends, banks like NIC Asia, NMB, Siddhartha and Nepal Investment Bank are issuing debenture to increase their capital.
        </Content>
        <Content>
            Debentures has a promise that the money will be paid back within a fixed period. The interest is generally paid semi-annually to the investors. These debentures are preferred as they have very low risk with relatively higher interest rates that what the market has been offering.
        </Content>
        <Content>
            <img src={Debenture} alt="Debentures" />
        </Content>
        <Content>
            Due to the tight Credit to deposit ratio scenario going on, nepalese financial institution are looking into to increase the capital amount by different means available and debentures happens to be one of them.
        </Content>
        <Content>
            Generally, after the issuance of debenture, financial institution are able to increase their revenue by a fair or great margin. For example, we can take a look at performance of second quarter of NIC Asia Bank. Bank has managed to earn 1.52 billion in net profit for second quarter which is partly enhanced result of the 11% debenture issued earlier.
        </Content>
        <Points>
            <ul>
                <li>
                    Debenture do not have collateral. It is solely based upon reputation of company.
                </li>
                <li>
                    It is like long term loan taken by financial institutions from public.
                </li>
                <li>
                    Any company issuing debenture are likely to pay interest in debenture before divident distribution.
                </li>
                <li>
                    The revenue column in financial statements are bound to increase after issuance of debenture.
                </li>
            </ul>
        </Points>
    </Meaning>
)