import React from 'react'
import Layout from './layout'

export default ({ children, title, previous = null }) => (
  <Layout previous={previous} title={title}>{children}</Layout>
)
