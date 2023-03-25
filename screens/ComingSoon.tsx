import { View, Text } from 'react-native'
import React from 'react'
import MainLayout from '../components/MainLayout'

const ComingSoon = ({ route }) => {
  return (
    <MainLayout routeName={route.name}>
      <View>
        <Text className="text-white">ComingSoon</Text>
      </View>
    </MainLayout>
  )
}

export default ComingSoon