/**
 * Created by ggm on 1/22/18.
 */

import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */

class HeaderBar extends Component {
  constructor (props) {
    super(props)
  }

  render () {

    const { barToggleClick } = this.props
    return (
      <div>
        <AppBar
          title="Smarkets"
          className="header-bar-main"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonClick={barToggleClick}/>
      </div>
    )
  }
}

export default HeaderBar
