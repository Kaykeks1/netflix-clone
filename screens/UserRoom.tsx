import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';

const UserRoom = () => {
  return (
    <SafeAreaView className="flex-1 bg-[#000000] items-center justify-center">
      <View className='flex-row mt-10 mb-20'>
        <Image
          source={require('../assets/logo.png')}
          className=""
        />
      </View>
      <View className="flex-1 flex-row flex-wrap w-1/2 justify-between my-20">
        <View className="items-center mb-5">
          <TouchableOpacity>
            <Image
              source={require('../assets/user1.png')}
              className=""
            />
          </TouchableOpacity>
          <Text className='text-white mt-2'>User 1</Text>
        </View>
        <View className="items-center mb-5">
          <TouchableOpacity>
            <Image
              source={require('../assets/user2.png')}
              className=""
            />
          </TouchableOpacity>
          <Text className='text-white mt-2'>User 2</Text>
        </View>
        <View className="items-center mb-5">
          <TouchableOpacity>
            <Image
              source={require('../assets/user3.png')}
              className=""
            />
          </TouchableOpacity>
          <Text className='text-white mt-2'>User 3</Text>
        </View>
        <View className="items-center mb-5">
          <TouchableOpacity>
            <Image
              source={require('../assets/user4.png')}
              className=""
            />
          </TouchableOpacity>
          <Text className='text-white mt-2'>Kids</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

export default UserRoom