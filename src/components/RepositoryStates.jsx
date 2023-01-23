import React from 'react'
import { View } from 'react-native'
import StyledText from './StyledText'
const parseThousands = (value) => {
  return value >= 1000 ? `${Math.round(value / 100) / 10}k` : String
}

const RepositoryStates = (props) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
      <View>
        <StyledText aling="center" fontWeight="bold">
          Starts
        </StyledText>

        <StyledText aling="center">
          {' '}
          {parseThousands(props.stargarzersCount)}
        </StyledText>
      </View>
      <View>
        <StyledText aling="center" fontWeight="bold">
          Forks
        </StyledText>
        <StyledText aling="center">
          {' '}
          {parseThousands(props.forksCount)}{' '}
        </StyledText>
      </View>
      <View>
        <StyledText aling="center" fontWeight="bold">
          Review
        </StyledText>
        <StyledText aling="center"> {props.reviewCount} </StyledText>
      </View>
      <View>
        <StyledText aling="center" fontWeight="bold">
          Rating
        </StyledText>
        <StyledText aling="center"> {props.ratingAverage} </StyledText>
      </View>
    </View>
  )
}

export default RepositoryStates
