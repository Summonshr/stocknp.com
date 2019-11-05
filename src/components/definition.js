import React from 'react'
import { Link } from 'gatsby'

export default ({ children, to }) => (
  <Link
    className="text-red-700 text-base"
    to={
      '/meanings/' +
      (to
        ? to
        : children
            .toLowerCase()
            .split(' ')
            .join('-'))
    }
  >
    {children}
  </Link>
)
