import { Keyboard, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import colors from '../../colors'
import Input from '../components/Input'
import Button from '../components/Button'
import Spinner from '../components/Spinner'
import Background from '../components/Background'

const Register = () => {
  const [userData, setUserData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    cPassword: '',
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
    if (!userData.fullName) {
      onError('Please enter your full name', 'fullName')
      
    }
    if (!userData.email) {
      onError('Please enter your email', 'email')
      
    } else if (
      !userData.email.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)
    ) {
      onError('Please enter a valid email', 'email')
      
    }
    if (!userData.phone) {
      onError('Please enter your phone number', 'phone')
      
    } else if (!userData.phone.match(/[+2637|07][7-8|1|3][0-9]{7}$/)) {
      onError('Please enter a valid phone number', 'phone')
      
    }
    if (!userData.password) {
      onError('Please enter your password', 'password')
      
    }
    if (!userData.cPassword) {
      onError('Please enter your password', 'cPassword')
      
    }
    if (userData.password !== userData.cPassword) {
      onError('Password does not match', 'cPassword')
      
    }
    if (userData.email && userData.fullName && userData.phone && userData.password && userData.cPassword) {
      signup()
    }

  }
  const signup = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)

      try {
        AsyncStorage.setItem('user', JSON.stringify(userData))
        navigation.navigate('Login')
      } catch (error) {
        console.log(error)
        
      }
    }, 2000)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Background />
      <Spinner visible={ loading} />
      <Text style={styles.header}>Register</Text>
      <Text style={styles.regText}> Please Enter your Details to Register</Text>
      <View>
        <Input
          label='FullName: '
          icon='person-outline'
          placeholder='Enter your Full Name'
          error={error.fullName}
          value={userData.fullName}
          onFocus={() => onError('', 'fullName')}
          onChangeText={(text) => onChangeText(text, 'fullName')}
        />
        <Input
          label='Email: '
          icon='mail-outline'
          placeholder='Enter your email'
          value={userData.email}
          error={error.email}
          onFocus={() => onError('', 'email')}
          onChangeText={(text) => onChangeText(text, 'email')}
        />
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
        <Input
          label='Confirm Password: '
          icon='lock-closed-outline'
          placeholder='Confirm your password'
          password={true}
          secureTextEntry={true}
          value={userData.cPassword}
          error={error.cPassword}
          onFocus={() => onError('', 'cPassword')}
          onChangeText={(text) => onChangeText(text, 'cPassword')}
        />
        <Button title='Register' onPress={onPress} />

        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
        >
          <Text style = {styles.text}> Already have an account? Login</Text>
        </TouchableOpacity>
        
      </View>
    </SafeAreaView>
  )
}

export default Register

const styles = StyleSheet.create({
  container: {
    margin: 25,
    marginTop: `50%`,
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
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
