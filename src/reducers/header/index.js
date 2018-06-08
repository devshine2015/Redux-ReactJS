/**
 * Created by ggm on 1/22/18.
 */
import {
  SIDE_BAR_TOGGLE_CLICK
} from '../../actions/Header'

import _ from 'lodash'

const initialState = {
  sideBarOpen: false
}

const reducer = (state = initialState, action) => {

  let newState = _.cloneDeep(state)
  /**
   *  @type { switch }
   *  @return { object }
   */
  switch (action.type) {
    case SIDE_BAR_TOGGLE_CLICK:
      newState.sideBarOpen = !(state.sideBarOpen)
      return newState

    default:
      return state
  }
}

/**
 *  @name reducer
 */
export default reducer