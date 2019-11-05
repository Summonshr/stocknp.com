import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo as info } from '@fortawesome/free-solid-svg-icons'

const links = [
    { link: 'quarterly-analysis/banks', name: 'Bank' },
    { link: 'quarterly-analysis/development-banks', name: 'Development Bank' },
    { link: 'quarterly-analysis/micro-finances', name: 'Micro finance' },
    { link: 'quarterly-analysis/finances', name: 'Finance' },
    { link: 'quarterly-analysis/hydropower', name: 'Hydropower' },
    { link: 'quarterly-analysis/hotels', name: 'Hotels' },
    { link: 'quarterly-analysis/non-life-insurance', name: 'Non life insurance' },
    { link: 'quarterly-analysis/life-insurance', name: 'Life insurance' },
    { link: 'quarterly-analysis/all', name: 'All' },
];

const IndexPage = () => (
    <Layout enableChat={false} title="Financial Summary of Nepali Companies">
        <div className="p-2">
            {links.map(link => <Link className="block leading-normal hover:bg-gray-300 text-base leading-tight py-2 px-1" to={link.link}>
                {link.name} {link.bracket && <span>({link.bracket})</span>} {link.status && <div className={link.status.iconName}></div>}
            </Link>)}
        </div>
        <div className="print-none flex justify-center items-center bg-gray-100 border-dashed border p-2 py-4 text-gray-500 text-xs text-center">
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