import {
  Keyboard,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import colors from '../../colors'
import Input from '../components/Input'
import Button from '../components/Button'
import Spinner from '../components/Spinner'

const Login = () => {
  const [userData, setUserData] = useState({
    phone: '',
    password: '',
  })
  const [error, setError] = useState({})
  const [loading, setLoading] = useState(false)
  const navigation = useNavigation()

  const onChangeText = (name, value) => {
    setUserData((prev) => ({ ...prev, [value]: name }))
  }
  const onError = (errorText, value) => {
    setError((prev) => ({ ...prev, [value]: errorText }))
  }
  const onPress = () => {
    Keyboard.dismiss()

    if (!userData.phone) {
      onError('Please enter your phone number', 'phone')
    } else if (!userData.phone.match(/[+2637|07][7-8|1|3][0-9]{7}$/)) {
      onError('Please enter a valid phone number', 'phone')
    }
    if (!userData.password) {
      onError('Please enter your password', 'password')
    }
    if (userData.phone && userData.password) {
      signin()
    }
  }
  const signin = () => {
    setLoading(true)
    setTimeout(async () => {
      setLoading(false)
      let savedData = await AsyncStorage.getItem('user')
      if (savedData) {
        savedData = JSON.parse(savedData)
        if (
          userData.phone === savedData.phone &&
          userData.password === savedData.password
        ) {
          AsyncStorage.setItem(
            'user',
            JSON.stringify({...savedData,  isLoggedIn: true })
          )
          navigation.navigate('Dashboard')
        } else {
          alert('Invalid Credentials')
        }
      } else {
        alert('Invalid Credentials')
      }
    }, 2000)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Spinner visible={loading} />
      <Text style={styles.header}>Login</Text>
      <Text style={styles.regText}> Please Enter your Details to Login</Text>
      <View>
        <Input
          label='Phone Number: '
          icon='phone-portrait-outline'
          keyboardType={'numeric'}
          placeholder='Enter your Phone Number'
          error={error.phone}
          value={userData.phone}
          onFocus={() => onError('', 'phone')}
          onChangeText={(text) => onChangeText(text, 'phone')}
        />
        <Input
          label='Password: '
          icon='lock-closed-outline'
          placeholder='Enter password'
          password={true}
          secureTextEntry={true}
          value={userData.password}
          error={error.password}
          onFocus={() => onError('', 'password')}
          onChangeText={(text) => onChangeText(text, 'password')}
        />

        <Button title='Lognin' onPress={onPress} />

        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style = { styles.text}> Alredy have an account? Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    margin: 25,
    marginTop:`50%`
  },
  header: {
    fontSize: 35,
    fontWeight: '600',
  },
  regText: {
    fontSize: 18,
    color: colors.gray.darker,
    paddingVertical: 20,
  },
  text: {
    fontSize: 18,
    color: colors.red.primary,
    paddingVertical: 20,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
