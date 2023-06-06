import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { Switch, Text, View } from 'react-native'

import {
  useFonts,
  Inter_900Black,
  Inter_400Regular,
} from '@expo-google-fonts/inter'

import { Roboto_700Bold } from '@expo-google-fonts/roboto'

export default function App() {
  const [fontLoaded] = useFonts({
    Inter_900Black,
    Inter_400Regular,
    Roboto_700Bold,
  })
  const [isEnabled, setIsEnabled] = useState(false)
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState)

  if (!fontLoaded) {
    return null
  }

  return (
    <View
      className={`flex-1 items-center justify-center ${
        isEnabled && 'bg-slate-900'
      }`}
    >
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        className="absolute right-10 top-10 mt-2"
      />
      <Text
        className={`text-5xl font-bold ${
          isEnabled && 'text-gray-50'
        } font-title`}
      >
        Hello FOX
      </Text>
      <StatusBar style="light" translucent />
    </View>
  )
}
