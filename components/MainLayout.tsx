import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import * as Icon from "react-native-heroicons/outline";
import { useNavigation } from '@react-navigation/native';
import ShortDetails from './ShortDetails';
import { selectShortDetailsVisibility } from '../features/appSlice';
import { useAppSelector } from '../hooks'

const MainLayout = ({ children, routeName }) => {
  const navigation = useNavigation();
  const showShortDetails = useAppSelector(selectShortDetailsVisibility);

  return (
    <View className="bg-[#000000] relative">
      <View className="h-full">
        <ScrollView className="flex-1">
          {children}
        </ScrollView>
        <View className="flex-row py-2 px-2 justify-between bg-[#121212]">
          <TouchableOpacity className="items-center w-1/5" onPress={() => navigation.navigate('Home')}>
            <Icon.HomeIcon className="" color={routeName === 'Home' ? "white" : "gray"} />
            <Text className={`${routeName === 'Home' ? 'text-white' : 'text-gray-500'} text-xs`}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center w-1/5" onPress={() => navigation.navigate('Search')}>
            <Icon.MagnifyingGlassIcon className="" color={routeName === 'Search' ? "white" : "gray"} />
            <Text className={`${routeName === 'Search' ? 'text-white' : 'text-gray-500'} text-xs`}>Search</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center w-1/5" onPress={() => navigation.navigate('ComingSoon')}>
            <Icon.PlayIcon className="" color={routeName === 'ComingSoon' ? "white" : "gray"} />
            <Text className={`${routeName === 'ComingSoon' ? 'text-white' : 'text-gray-500'} text-xs`}>Coming Soon</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center w-1/5" onPress={() => navigation.navigate('Downloads')}>
            <Icon.ArrowDownTrayIcon className="" color={routeName === 'Downloads' ? "white" : "gray"} />
            <Text className={`${routeName === 'Downloads' ? 'text-white' : 'text-gray-500'} text-xs`}>Downloads</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center w-1/5" onPress={() => navigation.navigate('More')}>
            <Icon.Bars3Icon className="" color={routeName === 'More' ? "white" : "gray"} />
            <Text className={`${routeName === 'More' ? 'text-white' : 'text-gray-500'} text-xs`}>More</Text>
          </TouchableOpacity>
        </View>
      </View>
      {
        showShortDetails && <ShortDetails />
      }
    </View>
  )
}

export default MainLayout