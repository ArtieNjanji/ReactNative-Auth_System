import { StyleSheet, Text, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { SafeAreaView } from 'react-native-safe-area-context' 
import {useEffect, useState} from 'react'

import colors from '../../colors'

const Dashboard = () => {
  const [user, setUser] = useState()

  useEffect(() => { 
    getUser()
  }, [])

  const getUser = async () => { 
    const savedData = await AsyncStorage.getItem('user')
    if (savedData) {
      setUser(JSON.parse(savedData))
    }
  }


  return (
    <SafeAreaView style = {styles.container}>
      <Text style = {styles.text}> Awesome me {user?.fullName}</Text>
    </SafeAreaView>
  )
}

export default Dashboard

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})