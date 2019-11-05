import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo as info } from '@fortawesome/free-solid-svg-icons'

const links = [
  {link: '/quarterly-analysis', name: 'Quarterly Analysis'},
  {link: '/key-movements', name: 'Key Movements in FloorSheet'},
  { link: "/technical-analysis", name: "Technical Analysis", bracket: 'In Progress' },
  { link: "/financial-statement", name: "Terms in Financial Statements" },
  { link: "/financial-analysis/bpcl", name: "Butwal Power Company Limited (BPCL)" },
  { link: "/financial-analysis/shl", name: "Soaltee Hotel Limited (SHL)", bracket: 'Updated' },
  { link: "/top-ten-stocks-to-buy-this-week", name: "Top Ten stocks to buy this week" },

];

const IndexPage = () => (
  <Layout enableChat={false} title="Financial Summary of Nepali Companies">
    <div className="mb-2 p-4">
      {links.map(link => <Link key={link.link} className="block leading-normal hover:bg-gray-300 text-base leading-tight py-2 px-1" to={link.link}>
        {link.name} {link.bracket && <span>({link.bracket})</span>} {link.status && <div className={link.status.iconName}></div>}
      </Link>)}
    </div>
    <div className="print-none flex justify-center items-center bg-gray-100 border-dashed border text-gray-500 text-xs text-center">
      <div className="bg-gray-300 rounded-full w-8 h-8 sm:w-16 sm:h-16 flex justify-center text-gray-500 mr-4 items-center text-center">
        <FontAwesomeIcon icon={info} />
      </div>
      <div className="mb-0 items-center flex flex-wrap">
        <p className="mb-0 leading-normal sm:leading-loose">
          Want to display your post or analysis of a company? <br /> Just send us a text @ <a href="mailto:summonshr@gmail.com">summonshr@gmail.com</a>
        </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
