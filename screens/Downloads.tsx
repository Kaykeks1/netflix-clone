import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import MainLayout from '../components/MainLayout'

const Downloads = ({ route }) => {
  return (
    <MainLayout routeName={route.name}>
      <View>
        <Text className="text-white">Downloads</Text>
      </View>
    </MainLayout>
  )
}

export default Downloads