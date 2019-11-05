import React from 'react'
import Layout from '../../components/layout'
import Points from '../../components/points'
import { Link } from 'gatsby';

const links = [
    'Base Rate',
    'Borrowings',
    'Cash and Cash Equivalent',
    'Debenture',
    'Deposits',
    'Cost of Funds',
    'Credit to Deposit Ratio',
    'Current Assets',
    'Earnings per Share',
    'Interest expenses',
    'Interest income',
    'Loans and Advances',
    'Loan loss provision',
    'Segment assets',
];

export default ({ data }) => (
    <Layout title="Terms in Financial Statements" previousUrl enableChat={false}>
        <Points>
            <ul className="p-2">
                {links.map(link => <li key={link}>
                    <Link to={'/financial-statement/' + link.toLowerCase().split(' ').join('-')}>{link}</Link>
                </li>)}
            </ul>
        </Points>
    </Layout>
)