import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import * as Icon from "react-native-heroicons/outline";

const MainLayout = ({ children }) => {
  return (
    <View className="bg-[#000000]">
      <View className="h-full">
        <ScrollView className="flex-1">
          {children}
        </ScrollView>
        <View className="flex-row py-2 px-2 justify-between bg-[#121212]">
          <TouchableOpacity className="items-center w-1/5">
            <Icon.HomeIcon className="" color="white" />
            <Text className="text-white text-xs">Home</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center w-1/5">
            <Icon.MagnifyingGlassIcon className="" color="gray" />
            <Text className="text-gray-500 text-xs">Search</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center w-1/5">
            <Icon.PlayIcon className="" color="gray" />
            <Text className="text-gray-500 text-xs">Coming Soon</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center w-1/5">
            <Icon.ArrowDownTrayIcon className="" color="gray" />
            <Text className="text-gray-500 text-xs">Downloads</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center w-1/5">
            <Icon.Bars3Icon className="" color="gray" />
            <Text className="text-gray-500 text-xs">More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default MainLayout