import { View, Text, Button, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Video, AVPlaybackStatus } from 'expo-av';
import * as ScreenOrientation from 'expo-screen-orientation'; 
import * as Icon from "react-native-heroicons/solid";
import { useNavigation } from '@react-navigation/native';

const VideoPlayer = () => {
  const video = React.useRef(null);
  const [status, setStatus] = useState({});
  const [orientationIsLandscape, setOrientationIsLandscape] = useState(false)
  const navigation = useNavigation()


  useEffect(() => {
    if (!orientationIsLandscape) {
      setOrientationIsLandscape(true)
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE)
    }
  }, [])

  const handleBackNavigation = async () => {
    if (orientationIsLandscape) {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP)
      navigation.goBack()
    }
  }
  console.log({orientationIsLandscape})
  return (
    <View className='flex-1 justify-center bg-black relative'>
      <Video
        className='h-48 w-full'
        ref={video}
        source={{
          uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls
        // orientation="landscape"
        // resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <TouchableOpacity className='absolute top-0 ml-8 my-4' onPress={handleBackNavigation}>
        <Icon.ArrowLeftIcon color="white" size={30} />
      </TouchableOpacity>
      <View className='absolute w-full top-0 my-4'>
        <Text className=' text-center text-white'>Moview name</Text>
      </View>

      <View
        // style={styles.buttons}
      >
        {/* <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        /> */}
      </View>
    </View>
  )
}

export default VideoPlayer