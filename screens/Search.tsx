import { View, Text, TextInput } from 'react-native'
import MainLayout from '../components/MainLayout'
import React from 'react'
import {
  MagnifyingGlassIcon
} from 'react-native-heroicons/outline';
import {
  MicrophoneIcon
} from 'react-native-heroicons/solid';

const Search = ({ route }) => {
  return (
    <MainLayout routeName={route.name}>
      <View>
        <Text className="text-white">Search</Text>
        <View className="flex-row items-center space-x-2 pb-2">
          <View className="flex-row flex-1 space-x-2 bg-[#424242] p-3 top-12">
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
        </View>
      </View>
    </MainLayout>
  )
}

export default Search