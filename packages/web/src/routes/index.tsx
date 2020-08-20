import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Main from '../pages/Main'
import Timeline from '../pages/Timeline'
import Map from '../pages/Map'
import Components from '../pages/Components'

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/timeline">
        <Timeline />
      </Route>
      <Route path="/map">
        <Map />
      </Route>
      <Route path="/components">
        <Components />
      </Route>
    </Switch>
  )
}

export default Routes
