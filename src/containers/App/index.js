/**
 * Created by ggm on 1/22/18.
 */
import React from 'react'

import { Provider } from 'react-redux'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import getMuiTheme from 'material-ui/styles/getMuiTheme'

import router from '../../config/router'

import store from '../../store'

const muiTheme = getMuiTheme({ userAgent: false })

const App = () => {
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <Provider store={store}>
        { router }
      </Provider>
    </MuiThemeProvider>
  )
}

export default App
