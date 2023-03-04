import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import MainLayout from '../components/MainLayout'
import * as Icon from "react-native-heroicons/solid";
import * as OutlineIcon from "react-native-heroicons/outline";

const Home = () => {
  const [previews, setPreviews] = useState([1,1,1,1,1]);

  return (
    <MainLayout>
      <View className="">
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
        <View className="flex-row justify-center">
          <View className="flex-row items-center">
            <View className="border-2 border-white px-1 pb-1 w-10 mr-2">
              <Text className="text-white font-extrabold text-xs text-center">TOP 10</Text>
            </View>
            <Text className="text-white font-extrabold text-xl">#2 in Nigeria Today</Text>
          </View>
        </View>
        <View className="flex-row w-full justify-around px-10 mt-4">
          <TouchableOpacity className="items-center">
            <Icon.PlusIcon color="white" size={30} />
            <Text className="text-white text-lg">My List</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row rounded-lg items-center px-4 bg-[#C4C4C4]">
            <Icon.PlayIcon color="black" size={30} className="mr-3" />
            <Text className="text-2xl font-bold">Play</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center">
            <OutlineIcon.InformationCircleIcon color="white" size={30} />
            <Text className="text-white text-lg">
              Info
            </Text>
          </TouchableOpacity>
        </View>
        {/* Previews */}
        <View className='px-5'>
          <View className="mt-6">
            <Text className="text-white text-3xl">Previews</Text>
          </View>
          <ScrollView
            className="space-x-5"
            contentContainerStyle={{
              paddingTop: 20
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {
              previews.map((i, key) => (
                <TouchableOpacity key={key} className="">
                  <Image
                    source={require('../assets/HomeImage.png')}
                    className="rounded-full w-32 h-32"
                    // style={styles.img}
                  />
                </TouchableOpacity>
              ))
            }
          </ScrollView>
        </View>
        {/* Continue watching */}
        <View className='px-5'>
          <View className="mt-6">
            <Text className="text-white text-2xl">Continue Watching for Emenalo</Text>
          </View>
          
        </View>
      </View>
    </MainLayout>
  )
}

// const styles = StyleSheet.create({
//   img: {
//     height: 80,
//     width: 80,
//     borderRadius: 40,
//   },
// });

export default Home