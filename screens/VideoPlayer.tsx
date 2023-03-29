import { View, Text, Button, TouchableOpacity, TouchableWithoutFeedback, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Video, AVPlaybackStatus } from 'expo-av';
import * as ScreenOrientation from 'expo-screen-orientation'; 
import * as Icon from "react-native-heroicons/solid";
import { useNavigation } from '@react-navigation/native';
import ProgressBar from "react-native-progress/Bar";

const VideoPlayer = () => {
  const video = React.useRef(null);
  const [status, setStatus] = useState({});
  const [orientationIsLandscape, setOrientationIsLandscape] = useState(false)
  const navigation = useNavigation()
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);


  useEffect(() => {
    if (!orientationIsLandscape) {
      setOrientationIsLandscape(true)
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT)
    }
  }, [])
  useEffect(() => {
    console.log({status})
    if (status.durationMillis) {
      setProgress((status.positionMillis || 0) / (status.durationMillis))
    }
    if (status.didJustFinish) {
      video.current.pauseAsync()
    }
  }, [status])

  const handleBackNavigation = async () => {
    if (orientationIsLandscape) {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP)
      navigation.goBack()
    }
  }

  const handleProgressPress = e => {
    const position = e.nativeEvent.locationX;
    // const progress = (position / 250) * this.state.duration;
    // const isPlaying = !this.state.paused;
    
    // this.player.seek(progress);
  };

  return (
    <View className='flex-1 justify-center bg-black relative'>
      <Video
        className='h-full w-full'
        ref={video}
        source={{
          uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      {/* controls */}
      <TouchableOpacity className='absolute top-0 ml-8 my-4' onPress={handleBackNavigation}>
        <Icon.ArrowLeftIcon color="white" size={30} />
      </TouchableOpacity>
      <View className='absolute w-full top-0 my-4'>
        <Text className=' text-center text-white'>Movie name</Text>
      </View>
      
      {/* middle controls */}
      {/* <View className='absolute top-0 border-2 border-white	w-full h-full justify-around items-center flex-row'> */}
      <View className='absolute top-0	w-full h-full justify-around items-center flex-row'>
        <Image
          source={require('../assets/10SecsBack.png')}
          className=""
        />
        <TouchableWithoutFeedback onPress={() => status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()}>
          {
            status.isPlaying
              ? <Icon.PauseIcon color="white" size={48} />
              : <Icon.PlayIcon color="white" size={48} />
          }
        </TouchableWithoutFeedback>
        <Image
          source={require('../assets/10SecsForward.png')}
          className=""
        />
      </View>

      <View className='absolute bottom-12 flex-row mx-6'>
        <TouchableWithoutFeedback  onPress={handleProgressPress} className="w-full">
          <View className="flex-1">
            <ProgressBar
              className=""
              progress={progress} // 0 to 1
              color="red"
              unfilledColor="rgba(255,255,255,.5)"
              borderColor="#FFF"
              width={null}
              height={4}
              borderWidth={0}
            />
          </View>
        </TouchableWithoutFeedback>
        <View className='ml-2'>
          <Text className='text-white'>0:00</Text>
        </View>
      </View>
    </View>
  )
}

export default VideoPlayer