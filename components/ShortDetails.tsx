import { View, Text, TouchableOpacity, Image } from 'react-native'
import * as Animatable from 'react-native-animatable'
import React from 'react'
import * as Icon from "react-native-heroicons/mini";

const ShortDetails = () => {
  return (
    <Animatable.View
      className='bg-[#212121] h-1/3 w-full absolute bottom-0 rounded-t-lg p-3'
      animation="slideInUp"
      duration={200}
    >
      <View className="flex-row">
        <Image
          source={require('../assets/HomeImage.png')}
          className="w-28 h-40 mr-2 rounded"
        />
        <View className="w-full flex-1">
          <View className='flex-row w-full flex-1'>
            <View className="flex-1">
              <Text className="text-white text-xl font-bold">How to Get Away With Murder</Text>
            </View>
            <Icon.XCircleIcon color="gray" size={40} />
          </View>
          <View className="flex-row w-1/2 justify-between">
            <Text className="text-[#737373]">2020</Text>
            <Text className="text-[#737373]">18+</Text>
            <Text className="text-[#737373]">6 seasons</Text>
          </View>
          <Text className="text-white mt-2 mb-1">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</Text>
        </View>
      </View>
      <View className="flex-row justify-around mt-3">
        <View className="items-center">
          <Icon.PlayCircleIcon color="white" size={40} />
          <Text className="text-[#737373] mt-1">Play</Text>
        </View>
        <View className="items-center">
          <Icon.PlusCircleIcon color="white" size={40} />
          <Text className="text-[#737373] mt-1">My List</Text>
        </View>
        <View className="items-center">
          <Icon.ShareIcon color="white" size={38} />
          <Text className="text-[#737373] mt-1">Share</Text>
        </View>
      </View>
      <TouchableOpacity className=''>
      </TouchableOpacity>
    </Animatable.View>
  )
}

export default ShortDetails