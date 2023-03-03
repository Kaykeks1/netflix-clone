import React from 'react'
import { Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import * as Icon from "react-native-heroicons/mini";
import * as SolidIcon from "react-native-heroicons/solid";
import { useNavigation } from '@react-navigation/native';

const UserRoom = () => {
  const navigation = useNavigation()
  const goToHome = () => {
    navigation.navigate('Home')
  }

  return (
    <SafeAreaView className="flex-1 bg-[#000000] items-center justify-center border-2">
      <View className='flex-row mt-4 mb-20'>
        <Image
          source={require('../assets/logo.png')}
          className=""
        />
      </View>
      <Icon.PencilIcon className="absolute top-20 right-10" color="white" />
      <View className="flex-1 flex-row flex-wrap w-11/20 justify-between my-20">
        <View className="items-center mb-5">
          <TouchableOpacity onPress={goToHome}>
            <Image
              source={require('../assets/user1.png')}
              className=""
            />
          </TouchableOpacity>
          <Text className='text-white mt-2'>User 1</Text>
        </View>
        <View className="items-center mb-5">
          <TouchableOpacity onPress={goToHome}>
            <Image
              source={require('../assets/user2.png')}
              className=""
            />
          </TouchableOpacity>
          <Text className='text-white mt-2'>User 2</Text>
        </View>
        <View className="items-center mb-5">
          <TouchableOpacity onPress={goToHome}>
            <Image
              source={require('../assets/user3.png')}
              className=""
            />
          </TouchableOpacity>
          <Text className='text-white mt-2'>User 3</Text>
        </View>
        <View className="items-center mb-5">
          <TouchableOpacity onPress={goToHome}>
            <Image
              source={require('../assets/user4.png')}
              className=""
            />
          </TouchableOpacity>
          <Text className='text-white mt-2'>Kids</Text>
        </View>
        <View className="ml-3 mt-10 items-center">
          <View className="items-center">
            <SolidIcon.PlusCircleIcon className="" size={70} color="white" />
            <Text className="text-white mt-2">Add Profile</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default UserRoom