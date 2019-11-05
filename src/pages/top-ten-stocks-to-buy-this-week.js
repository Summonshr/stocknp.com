import React from 'react'
import Layout from '../components/layout'
import Name from '../components/name'
const IndexPage = () => (
    <Layout enableChat={true} title="Top ten stocks to buy this week">
        <div className="mb-4">
            Here are top ten stocks to invest:
            <ul className="pt-2 leading-normal text-lg font-semibold text-gray-700">
                <li className="border-b pl-2"><Name>MLBL</Name>: The stock price is massively undervalued as it's earning per share is 28.82. This stock should climb upto 240-250 until it announces fair dividend.</li>
                <li className="border-b pl-2"><Name>LBBL</Name>: The stock price is undervalued for the season due to recent adjustment for their bonus share. But I believe it is intended to show some short term compounded game.</li>
                <li className="border-b pl-2"><Name>SFFIL</Name>: This stock is favourable as it is the only one in finance sector which is capable of distributing dividends regularly.</li>
                <li className="border-b pl-2"><Name>ADBL</Name>: The stock is undervalued in comparision to their banks. With its massive EPS, this stock is bound to go up at some point in future.</li>
                <li className="border-b pl-2"><Name>KSBBL</Name>: Due to massive growth and aggressive expansion in their branches, I believe this stock will bounce back to 200 at near future.</li>
                <li className="border-b pl-2"><Name>BPCL</Name>: BPCL is always my favourite stock as this company is more invested than any other hydropower and looking to grow by adapting to new scenarios. Their recent investment in stocks of other hydropower show that they are investing in their future.</li>
                <li className="border-b pl-2"><Name>GBLBS</Name>: GBLBS is currently undervalued due to recent right share distribution. It will definitely bouncing back to 400+ in its near future.</li>
                <li className="border-b pl-2"><Name>SANIMA</Name>: Their continuous history of giving good dividends is what makes it into this list.</li>
                <li className="border-b pl-2"><Name>DDBL</Name>: The price is coming below where it should be. I believe this stock should be collected as it goes further down.</li>
                <li className="border-b pl-2"><Name>NICA</Name>: Their stocks are always highly preferred due to massive number of deposit collection and massive number of branches.</li>
            </ul>
        </div>
    </Layout>
)
export default IndexPage
