import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import MainLayout from '../components/MainLayout'
import * as Icon from "react-native-heroicons/solid";
import * as OutlineIcon from "react-native-heroicons/outline";
import ContinueWatching from '../components/ContinueWatching';
import sanityClient, { urlFor } from '../sanity';
import { useAppSelector, useAppDispatch } from '../hooks'
import { setHomeCategories, selectCategories } from '../features/videoSlice'
import { toggleShortDetailsVisibility } from '../features/appSlice'
import { useNavigation } from '@react-navigation/native';

const Home = ({route}) => {
  const dispatch = useAppDispatch()
  const navigation = useNavigation()
  const categories = useAppSelector(selectCategories);

  useEffect(() => {
    sanityClient.fetch(`*[_type == "category"] {
      ...,
      "videos": *[_type=="video" && references(^._id)] {
        ...
      }
    }`).then(data => {
      // console.log(data)
      dispatch(setHomeCategories(data))
    }).catch(e => console.log({e}))
  }, [dispatch])
  // console.log({categories})


  const initialCategories = [
    { name: "Popular on Netflix", items: [1,1,1,1,1] },
    { name: "Trending Now", items: [1,1,1,1,1] },
    { name: "Top 10 in Nigeria Today", items: [1,1,1,1,1] },
    { name: "My List", items: [1,1,1,1,1] },
    { name: "African movies", items: [1,1,1,1,1] },
  ]
  const [previews, setPreviews] = useState([1,1,1,1,1]);
  // const [categories, setCategories] = useState(categories_);

  return (
    <MainLayout routeName={route.name}>
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
            <Text className="text-white font-bold text-3xl">Previews</Text>
          </View>
          <ScrollView
            className="space-x-2"
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
                    className="rounded-full w-28 h-28"
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
            <Text className="text-white font-bold text-2xl">Continue Watching for Emenalo</Text>
          </View>
          <ScrollView
            contentContainerStyle={{
              paddingTop: 20
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
          >

            {
              previews.map((i, key) => (
                <ContinueWatching
                  key={key}
                />
              ))
            }
          </ScrollView>

          {/* Categories */}
          {
            categories.map((category, key) => (
              <View key={key}>
                <View className="mt-6">
                  <Text className="text-white font-bold text-2xl">{category.name}</Text>
                </View>
                <ScrollView
                  contentContainerStyle={{
                    paddingTop: 20
                  }}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                >
                  {
                    category.items.map((item, key) => (
                      <TouchableOpacity
                        onPress={() => dispatch(toggleShortDetailsVisibility())}
                        key={key}
                      >
                        <Image
                          // source={require('../assets/HomeImage.png')}
                          source={{ uri: urlFor(item.thumbnail).url() }}
                          className="w-28 h-48 mr-2"
                        />
                      </TouchableOpacity>
                    ))
                  }
                </ScrollView>
              </View>
            ))
          }
        </View>
      </View>
    </MainLayout>
  )
}

export default Home