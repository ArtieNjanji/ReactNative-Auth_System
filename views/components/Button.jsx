import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

import colors from '../../colors'

const Button = ({ title, onPress = () => {} }, navigate) => {
  return (
    <TouchableOpacity style={styles.container} onPress  = {onPress}>
      <Text style={styles.inside}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: colors.red.primary,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',

    marginVertical: 20,
    fontSize: 40,
  },
  inside: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },
})
