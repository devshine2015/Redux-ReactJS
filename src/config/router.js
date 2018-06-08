import React from 'react'
import {
  Route,
  Switch,
  Router as Routes,
} from 'react-router-dom'

import Layout from '../layouts/Layout'

import HomePage from '../views/HomePage'

import { createHashHistory } from 'history'

const history = createHashHistory()


const router = (
  <Routes history={history}>
    <Layout>
      <Switch>
        <Route exact path='/' component={ HomePage } />
      </Switch>
    </Layout>
  </Routes>
)

export default router
