import { View, Text, TextInput, Image } from 'react-native'
import MainLayout from '../components/MainLayout'
import React from 'react'
import {
  MagnifyingGlassIcon
} from 'react-native-heroicons/outline';
import {
  MicrophoneIcon
} from 'react-native-heroicons/solid';
import * as Icon from "react-native-heroicons/outline";

const Search = ({ route }) => {
  return (
    <MainLayout routeName={route.name}>
      <View className='flex-col'>
        <View className="flex-row flex-1 space-x-2 bg-[#424242] p-5 mt-12">
          <MagnifyingGlassIcon
            color="#C4C4C4"
            size={20}
          />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
            className='text-[#C4C4C4] flex-1'
            placeholderTextColor = "#C4C4C4"
          />
          <MicrophoneIcon
            color="#C4C4C4"
            size={20}
          />
        </View>
        <View className='flex-col flex-1 mt-4 ml-3 mb-5'>
          <Text className="text-white text-3xl font-bold">Top Searches</Text>
        </View>
        {
          [1,1,1,1,1,1].map(() => <View className="flex-row bg-[#424242] pr-3 mb-2">
            <Image
              source={require('../assets/search-image.png')}
            />
            <View className="flex-1 justify-center pl-4">
              <Text className="text-white text-lg">Citation</Text>
            </View>
            <View className="justify-center">
              <Icon.PlayCircleIcon color="white" size={48} />
            </View>
          </View>)
        }
      </View>
    </MainLayout>
  )
}

export default Search