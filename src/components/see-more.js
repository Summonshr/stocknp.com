import React from 'react'
import { Link } from 'gatsby';

export default ({ links }) => (
    <div className="print-none">
        <h4 className="mb-2 border-b-2 inline py-1 text-gray-500">See more</h4>
        <ul className="list-reset p-0 m-0 pt-2">
            {links && links.map(link => <li key={link.name}>
                <Link className="text-blue-500" to={link.href}>{link.name}</Link>
            </li>)}
        </ul>
    </div>
)
