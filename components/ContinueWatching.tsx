import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import * as OutlineIcon from 'react-native-heroicons/outline'

const ContinueWatching = () => {
  return (
    <View className="w-28 mr-2">
      <TouchableOpacity className="relative">
        <Image
          source={require('../assets/HomeImage.png')}
          className="w-28 h-44 -mb-2"
        />
        <View className="absolute w-full h-full justify-center items-center">
          <OutlineIcon.PlayCircleIcon className="" color="white" size={70} />
        </View>
      </TouchableOpacity>
      <View className="justify-between bg-[#121212] flex-row px-2 py-2">
        <TouchableOpacity>
          <OutlineIcon.InformationCircleIcon color="white" size={30} />
        </TouchableOpacity>
        <TouchableOpacity>
          <OutlineIcon.EllipsisVerticalIcon color="white" size={30} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ContinueWatching