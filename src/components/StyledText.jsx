import React from 'react'
import { Text, StyleSheet } from 'react-native'
import theme from '../theme.js'

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontWeight: theme.fontWeights.normal,
    fontFamily: theme.fonts.main,
  },
  bold: {
    fontWeight: theme.fontWeights.bold,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorSecondary: {
    color: theme.colors.textSecondary,
  },
  subheading: {
    fontSize: theme.fontSizes.subheading,
  },
  textAlingCenter: {
    textAlign: 'center',
  },
})

export default function StyledText({
  children,
  color,
  fontSize,
  fontWeight,
  aling,
  style,
  ...restOfProps
}) {
  const textStyles = [
    styles.text,
    aling === 'center' && styles.textAlingCenter,
    color === 'primary' && styles.colorPrimary,
    color === 'secondary' && styles.colorSecondary,
    fontSize === 'subheading' && styles.subheading,
    fontWeight === 'bold' && styles.bold,
    style,
  ]
  return (
    <Text style={textStyles} {...restOfProps}>
      {' '}
      {children}{' '}
    </Text>
  )
}
