import { View, Text, TouchableOpacity, Image } from 'react-native'
import * as Animatable from 'react-native-animatable'
import React from 'react'
import * as Icon from "react-native-heroicons/mini";
import * as OutlineIcon from "react-native-heroicons/outline";
import { useAppSelector, useAppDispatch } from '../hooks'
import { toggleShortDetailsVisibility, selectShortDetailsVisibility } from '../features/appSlice'
import { selectVideoDetails } from '../features/videoSlice';
import { urlFor } from '../sanity'
import { useNavigation } from '@react-navigation/native';

const ShortDetails = () => {
  const dispatch = useAppDispatch()
  const showShortDetails = useAppSelector(selectShortDetailsVisibility);
  const videoDetails = useAppSelector(selectVideoDetails);
  const navigation = useNavigation()

  return (
    <Animatable.View
      className='bg-[#212121] h-1/3 w-full absolute bottom-0 rounded-t-lg'
      // animation={!showShortDetails ? "slideOutDown" : "slideInUp"}
      animation="slideInUp"
      duration={200}
    >
      <View className='p-3'>
        <View className="flex-row">
          <Image
            source={{ uri: urlFor(videoDetails.thumbnail).url() }}
            className="w-28 h-40 mr-2 rounded"
          />
          <View className="w-full flex-1">
            <View className='flex-row w-full flex-1'>
              <View className="flex-1">
                <Text className="text-white text-xl font-bold">{videoDetails.name}</Text>
              </View>
              <TouchableOpacity onPress={() => dispatch(toggleShortDetailsVisibility())}>
                <Icon.XCircleIcon color="gray" size={40} />
              </TouchableOpacity>
            </View>
            <View className="flex-row w-1/2 justify-between">
              <Text className="text-[#737373]">{videoDetails.year}</Text>
              <Text className="text-[#737373]">{videoDetails.maturityRating}</Text>
              <Text className="text-[#737373]">{videoDetails.duration}</Text>
            </View>
            <Text className="text-white mt-2 mb-1">{videoDetails.description}</Text>
          </View>
        </View>
        <View className="flex-row justify-around mt-3">
          <TouchableOpacity className="items-center" onPress={() => navigation.navigate("VideoPlayer")}>
            <Icon.PlayCircleIcon color="white" size={40} />
            <Text className="text-[#737373] mt-1">Play</Text>
          </TouchableOpacity>
          <View className="items-center">
            <Icon.PlusCircleIcon color="white" size={40} />
            <Text className="text-[#737373] mt-1">My List</Text>
          </View>
          <View className="items-center">
            <Icon.ShareIcon color="white" size={38} />
            <Text className="text-[#737373] mt-1">Share</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity className='flex-row justify-between items-center flex-1 border-gray-400 border-t-2 px-5'>
        <View className='flex-row justify-between items-center'>
          <OutlineIcon.InformationCircleIcon color="white" size={30} />
          <Text className='ml-2 text-[#737373]'>Episodes & Info</Text>
        </View>
        <OutlineIcon.ChevronRightIcon color="white" size={25} />
      </TouchableOpacity>
    </Animatable.View>
  )
}

export default ShortDetails