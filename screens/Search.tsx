import { View, Text } from 'react-native'
import MainLayout from '../components/MainLayout'
import React from 'react'

const Search = ({ route }) => {
  return (
    <MainLayout routeName={route.name}>
      <View>
        <Text className="text-white">Search</Text>
      </View>
    </MainLayout>
  )
}

export default Search