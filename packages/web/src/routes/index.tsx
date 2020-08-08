import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Main from '../pages/Main'
import Map from '../pages/Map'

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/map">
        <Map />
      </Route>
    </Switch>
  )
}

export default Routes
