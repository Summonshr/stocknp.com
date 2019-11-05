import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Title from './title'
import './layout.css'
import './tailwind.css'
import { Comments, FacebookProvider, Like } from 'react-facebook'
import ReactTooltip from 'react-tooltip'
import Quote from './quote'
const meta = [
  {
    name: 'description',
    content: 'Financial Analysis of Nepalese Company',
  },
  {
    name: 'keywords',
    content:
      'stock in nepal, stocknepal, stocknp, nepalstock, stock nepal, nepali stock, nepali share, share nepal, nepali share market, share market in nepal',
  },
]

const graph = graphql`
query SiteTitleQuery {
  site {
      siteMetadata {
        title
      }
    }
  }
`

typeof document !== `undefined` && document && document.addEventListener('keyup', function (e) {
  if (e.ctrlKey && e.keyCode === 188) {
    var message = prompt('Enter the code');
    message && (window.location.href = "https://stocknp.com/company/" + message)
  }
})

class Layout extends React.Component {

  render() {
    const { children, title, enableChat = true, previous } = this.props;

    let metaDescription = children && children.length > 0 && children[0].props && children[0].props.children && children[0].props.children;

    if (typeof metaDescription !== 'string') {
      metaDescription = 'Simplyfying terms of nepalese stock markets';
    }

    const location = typeof document !== `undefined` && window && window.location && window.location.href;

    return (
      <StaticQuery
        query={graph}
        render={data => (
          <>
            <Helmet
              title={
                title
                  ? title + ' || StockNp.com'
                  : 'StockNp.com | Learn new ideas about stock market'
              }
              meta={meta}
            >
              <meta name="keywords" content="share market, best site, nepali bazar, news, nepal, economics, politics, entertainment, business, politics, businessman, online news, real state, tax, banking, corporate, telecom,  nepse, ipo, agm, bond, Oil, Gold, profit, shareholder, NEPSE, pravhu, ILFC, Stock, exchange, citizen, nepal., loan, loss, provision,  arun, valley, kabeli,  Economy, Growth, Rate, Eid, Public, Holiday,  Mastercard, Standard, Chartered, Credit, Card, Visa, Warren, Buffett, Value, Investing,Nepal Stock Exchange (NEPSE) Live Trading Data, Floorsheet, Live Indices, Top Gainers, Top Losers, nepse, shareapp, limted, iporesult, bank , share, bank, company, promoter, bittya santha, stock technical analysis, futures technical analysis, stocks technical analysis, technical analysis of stocks, stock market technical analysis, loan provisioning, loss provision" />
              <meta property="og:type" content="website" />
              <meta property="og:title" content={title} />
              <meta name="google-site-verification" content="P0aT1oI_XyS0iIhOfCVmLsQEKG2nLvZqrkQTtxsKHZU" />
              <meta property="og:description" content={metaDescription} />
              <meta name="description" content="|| Stock Nepal || Best information regarding stock markets of nepal, Financial analysis of share market of nepal, Quarterly report analysis of nepali banks" />
            </Helmet>
            <div className="animated zoomIn max-w-3xl mb-0 sm:mb-6 z-20 mx-auto flex flex-wrap leading-loose text-gray-700 relative p-0 sm:p-2 md:p-4 lg:p-8">
              <div className="animated fadeIn w-full text-left sm:shadow bg-white">
                <div className="print-p-20">
                  <Title previous={previous} title={title} />
                  <div className="content text-gray-900 p-2">{children}</div>
                  {(enableChat) && <div className="print-none overflow-hidden p-2 md:p-4">
                    <Quote />
                    <FacebookProvider appId="313299182645682">
                      <Like quote={title} href={location} colorScheme="500" showFaces share />
                      <Comments width="100%" href={location} />
                    </FacebookProvider>
                  </div>}
                </div>
              </div>
            </div>
            <div className="print-none text-gray-500 flex flex-wrap text-center justify-around bg-white border-t sm:border-none sm:bg-transparent sm:justify-between sm:fixed w-full p-2 sm:bottom-0 z-10 ">
              <span className="w-full sm:w-auto">
                <a href="mailto:summonshr@gmail.com">summonshr@gmail.com</a>
              </span>
              <span className="w-full sm:w-auto">
                <a target="_blank" rel="noopener noreferrer" href="https://sumanshresth.com.np">sumanshresth.com.np</a>
              </span>
            </div>
            <ReactTooltip />
          </>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
