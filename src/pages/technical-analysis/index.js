import React from 'react'
import Layout from '../../components/layout'
import Content from '../../components/content'
import Points from '../../components/points'
import Example from '../../components/example'

const IndexPage = () => (
    <Layout title="Technical Analysis">
        <Content>
            In technical analysis, analyst try to predict the future price of the stocks in the  market using historical data of their prices. They try to find out patterns or trends that gives us confidence that upcoming days will be behaving as those trends forecasted.
        </Content>
        <Content>
            There are number of technical analysis techniques. Chart analysis, Moving Average Analysis, Indicator Analysis etc. Each one of them has their own logic with their own crietias on how stock markets move over the period of long time.
        </Content>
        <Example>
            <Content>
                For example: Recent bearish trends of nepalese stock market has given us a pattern that, after any book closure date for a bank, the prices of their stock seems to dive down further.
            </Content>
            <Content>
                <b>NMB bank</b> which had book close on date of on December 25th, the price was adjusted from 398 to 365 for 10% bonus stock. It would have been adequate if the stock prices had dropped to 345 since bank had also declared 20% cash bonus, but the current price has further dropped below 315.
            </Content>
            <Content>
                It means, it would have been more beneficial for us if we had sold stocks of nmb bank at 398 (on the last day) and bought it back at 315 (current price). We would have made a whooping 26% more stock at current price (not accounting broker and sebon charges).
            </Content>
            <Content>
                If you were holding 1000 stocks of NMB bank, after bonus you are now holding only 1100 stocks plus Rs 20000 cash dividends  which amounts approximately 63 stocks. Even if you had reinvested, you would have total of 1163 stocks of NMB bank. But, if you had sold them at 398 in the last day, you could have bough them back now, which would buy approximately 1260 stocks of the same bank.
            </Content>
            <Content>
                Similar patterns occur for NIB, BOKL and NICA too. But this idea has been exact opposite to Microfinances sector which has less number of shares.
            </Content>
        </Example>
        <Content>
            These analysis are done believing that it tends to repeat in specific period of time. Bearish market may show one trend while bull market may show some other trend. Some trends are dependent upon quarterly report produced whereas some depend upon how investors evaluate certain stocks. By being a technical analyst, one can hope to identify such an emerging trend or pattern which can be then used in increasing a quantity of stocks which in turn benefit to total amount.
        </Content>
        <Content>
            Under technical analysis, analysts have to find out what kind of psychology will market have after certain event occurs. Following are some of the major factors taken into account by a technical analysts.
        </Content>
        <Points>
            <ul>
                <li>
                    Suppy and demand is the major factor.
                <Example>
                        Stock prices will always behave in respect to suppy and demand of the available stock quantities. For example: stocks of microfinance and insurance are traded in higher values because of lesser number of stocks available and higher chances of growth in the future. So, there is natural attraction towards those stocks. Where as, for banks there are huge numbers of stocks floating and they only tend to move only as per quarterly reports and dividend declarations.
                </Example>
                </li>
                <li>Supply and demand may be affected by both rational or irrational factors.
                    <Example>
                        For example: In case of microfinance, the issuance of right stock tends to decrease the supply of stock. Generally, investors have litte amount of stocks in their portfolio, so people have adequate cash to apply for right stock by themselves. But In case of banks, investors do have large quantities of stocks under their portfolio. To apply for right stocks, they may need a very large sum of money. So, Investors tend to sell off the stocks currently in their possession.
                    </Example>
                    <Example>
                        When markets starts to believe that a company is bound to go in certain direction, even though the belief is totally just a irrational prediction, market can head over to a specific direction.
                    </Example>
                </li>
                <li>
                    Changes in the trends are cause by the shift in supply and demand.
                    <Example>
                        If there are more supply of stocks, the price starts to get lower upto the points where there are more buyers than sellers. For example: <b>stocks of banks.</b> Similar is true for the opposite scenario too. If there are more demands, the stock prices will get higher upto the point where there are more sellers than buyers. For example: <b>
                            stocks of newly listed Microfinances.
                        </b>
                    </Example>
                </li>
                <li>Some patterns tends to repeat.
                    <Example>
                        Several patterns in stock market tends to repeat in certain timespan. These tends to be the results of the actions that are executed in respect to time. For example: stock prices definitely rise when the declaration of dividends starts or inclination of investors in one sectors starts to affect the another sectors.
                    </Example>
                </li>
            </ul>
        </Points>
    </Layout>
)

export default IndexPage;