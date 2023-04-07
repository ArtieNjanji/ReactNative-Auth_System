import { StyleSheet, Text, View, useWindowDimensions, ActivityIndicator } from 'react-native'
import React from 'react'

const Spinner = ({visible = true }) => {
  const {height, width} = useWindowDimensions()

  return (
    visible && (<View style = {{ ...styles.container,  height,  width  }}
    >
      <View style={styles.spinner}>
        <ActivityIndicator size='large' style={ styles.indicator} />
        <Text style = {styles.loading}>Loading...</Text>
      </View>
    </View>)
  )
}

export default Spinner

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 10,
    margin: -25,
    // height: '100%',
    // width: '100%',
    justifyContent: 'center',

  },
  spinner: {
    height: 120,
    marginHorizontal: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  indicator: {
    color: '#fff',
  },
  loading: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  } 

})