import { View, Text } from 'react-native'
import MainLayout from '../components/MainLayout'
import React from 'react'

const More = ({ route }) => {
  return (
    <MainLayout routeName={route.name}>
      <View>
        <Text className="text-white">More</Text>
      </View>
    </MainLayout>
  )
}

export default More