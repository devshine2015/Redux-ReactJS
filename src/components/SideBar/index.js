/**
 * Created by ggm on 1/22/18.
 */

import React from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

class SideBar extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {

    const { sideBarOpen } = this.props
    return (
      <div className="side-bar-content">
        <Drawer
          open={sideBarOpen}
          containerClassName="side-bar-menu">
          <MenuItem>Horse Racing</MenuItem>
          <MenuItem>Football</MenuItem>
          <MenuItem>Basketball</MenuItem>
        </Drawer>
      </div>
    )
  }
}

export default SideBar