import { Text, View, TextInput, StyleSheet } from 'react-native'
import { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'

import colors from '../../colors'

const Input = ({
  icon,
  label,
  error,
  password,
  keyboardType,
  onFocus = () => {},
  ...props
}) => {
  const [focused, setFocused] = useState(false)
  const [visible, setVisible] = useState(password)

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>{label}</Text>
      </View>
      <View
        style={{
          ...styles.inputContainer,
          borderColor: error
            ? colors.red.primary
            : focused
            ? colors.yellow.secondary
            : colors.accent.secondary,
        }}
      >
        <Ionicons name={icon} size={20} color={colors.gray.darker} />
        <TextInput
          style={styles.input}
          {...props}
          // autoCorrect={false}
          onFocus={() => {
            onFocus()
            setFocused(true)
          }}
          onBlur={() => setFocused(false)}
          keyboardType={keyboardType}
          secureTextEntry = {visible}
        />
        {password && (
          <Ionicons
            onPress={() => setVisible(!visible)}
            name={visible ? 'eye-outline' : 'eye-off-outline'}
            size={20}
            color={colors.gray.darker}
          />)}
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    // paddingVertical: 10,
  },
  label: {
    fontSize: 17,
    color: colors.gray.darker,
    paddingHorizontal: 10,
  },
  inputContainer: {
    height: 50,
    backgroundColor: colors.accent.secondary,
    borderRadius: 15,
    marginTop: 6,
    borderWidth: 1,
    paddingHorizontal: 20,

    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  icon: {},
  input: {
    flex: 1,
    // autoCorrect: false,
  },
  error: {
    color: colors.red.primary,
    marginHorizontal: 30,
    fontSize: 11,
  },
})
