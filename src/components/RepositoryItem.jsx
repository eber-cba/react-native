import React from 'react'
import { Image, View, StyleSheet } from 'react-native'
import theme from '../theme'
import RepositoryStates from './RepositoryStates'
import StyledText from './StyledText'

const RepositoryItemHeader = ({
  ownerAvatarUrl,
  fullName,
  description,
  lenguage,
}) => (
  <View style={{ flexDirection: 'row', paddingBottom: 2 }}>
    <View style={{ paddingRight: 10 }}>
      <Image style={styles.image} source={{ uri: ownerAvatarUrl }} />
    </View>
    <View style={{ flex: 1 }}>
      <StyledText fontWeight="bold">{fullName} </StyledText>
      <StyledText color="secondary">{description} </StyledText>
      <StyledText style={styles.lenguage}>{lenguage} </StyledText>
    </View>
  </View>
)

export const RepositoryItem = (props) => {
  return (
    <View key={props.id} style={styles.container}>
      <RepositoryItemHeader {...props} />
      <RepositoryStates {...props} />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
  },
  strong: {
    color: '#09f',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  lenguage: {
    padding: 4,
    color: theme.colors.withe,
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
    borderRadius: 4,
    overflow: 'hidden',
    marginVertical: 4,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4,
  },
})
