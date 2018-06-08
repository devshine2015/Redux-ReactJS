/**
 * Created by ggm on 1/22/18.
 */

import React, { Component } from 'react'

import { connect } from 'react-redux'

import HeaderBar from '../../components/Header'

import {
  sideBarToggleClick
} from '../../actions/Header'

class Header extends Component {
  constructor (props) {
    super(props)

    this.toggleClick = this.toggleClick.bind(this)
  }

  toggleClick () {
    this.props.sideBarToggleClick()
  }

  render () {
    return (
      <div className="header-bar">
        <HeaderBar barToggleClick={this.toggleClick}/>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    homepage: state.homepage
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    sideBarToggleClick: () => {
      dispatch(sideBarToggleClick())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)