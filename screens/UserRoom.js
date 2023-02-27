import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

const UserRoom = () => {
  return (
    <View className="flex-1 bg-[#fff] items-center justify-center">
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

export default UserRoom