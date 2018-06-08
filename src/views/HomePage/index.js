/**
 * Created by ggm on 1/21/18.
 */
import React, { Component } from 'react'

import { connect } from 'react-redux'

import SideBar from '../../components/SideBar'

class HomePage extends Component {
  constructor (props) {
    super(props)
  }



  render () {
    console.log('@@@@@@@@@', this.props.sideBarOpen)
    const { sideBarOpen } = this.props
    return (
      <div className="home-page">
        <SideBar sideBarOpen={ sideBarOpen }/>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    homepage: state.homepage,
    sideBarOpen: state.header.sideBarOpen
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
}

export default connect(
  mapStateToProps,
  null
)(HomePage)