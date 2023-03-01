import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import MainLayout from '../components/MainLayout'

const Home = () => {
  return (
    <MainLayout>
      <ScrollView>
        <Image
          source={require('../assets/HomeImage.png')}
          className="w-full"
        />
        <View className="absolute flex-row w-full items-center pl-2 pr-10 top-12">
          <Image
            source={require('../assets/N-logo.png')}
          />
          <View className="flex-row flex-1 justify-between ml-10">
            <Text className="text-white text-xl">TV Shows</Text>
            <Text className="text-white text-xl">Movies</Text>
            <Text className="text-white text-xl">My List</Text>
          </View>
        </View>
      </ScrollView>
    </MainLayout>
  )
}

export default Home