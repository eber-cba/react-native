import React from 'react'
import { View, StyleSheet } from 'react-native'
import StyledText from './StyledText'
import Constants from 'expo-constants'
import theme from '../theme'
import { Link } from 'react-router-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.appbar.primary,
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 10,
    paddingLeft: 10,
  },
  text: {
    color: theme.appbar.textPrimary,
  },
})

const AppbarTab = ({ active, children, to }) => {
  return (
    <Link to={to}>
      <StyledText fontWeight="bold" style={styles.text}>
        {children}
      </StyledText>
    </Link>
  )
}

const Appbar = () => {
  return (
    <View style={styles.container}>
      <AppbarTab active to="/">
        Repositories
      </AppbarTab>
      <AppbarTab active to="/signin">
        Sing In
      </AppbarTab>
    </View>
  )
}

export default Appbar
