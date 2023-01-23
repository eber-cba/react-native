import React from 'react'
import { Text, View } from 'react-native'
import RepositoryList from './RepositoryList.jsx'
import Appbar from './Appbar.jsx'
import { Redirect, Route, Switch } from 'react-router-native'

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <Appbar />
      <Switch>
        <Route path="/" exact>
          <RepositoryList />
        </Route>
        <Route path="/sigin" exact>
          <Text>Working on it</Text>
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  )
}

export default Main
