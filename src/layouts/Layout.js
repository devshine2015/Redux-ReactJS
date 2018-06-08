import React from 'react'
import PropTypes from 'prop-types'

import Header from 'containers/Header'
import Footer from 'containers/Footer'

const Layout = props => {
  const { children } = props

  return (
    <div className='main-layout'>
      <Header />
      <div className='content'>
        {children}
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
