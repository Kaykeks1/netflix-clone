import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Video } from 'expo-av';
import * as ScreenOrientation from 'expo-screen-orientation'; 
import * as Icon from "react-native-heroicons/solid";
import { useNavigation } from '@react-navigation/native';
import ProgressBar from "react-native-progress/Bar";
import * as Animatable from 'react-native-animatable';

const VideoPlayer = () => {
  const video = React.useRef(null);
  const [status, setStatus] = useState({});
  const [orientationIsLandscape, setOrientationIsLandscape] = useState(false)
  const navigation = useNavigation()
  const [progress, setProgress] = useState(0);
  const [progressLayout, setProgressLayout] = useState({});
  const [positionInMillis, setPositionInMillis] = useState(0);


  useEffect(() => {
    if (!orientationIsLandscape) {
      setOrientationIsLandscape(true);
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT);
    }
  }, [])
  useEffect(() => {
    // console.log({status})
    if (status.durationMillis) {
      setProgress((status.positionMillis || 0) / (status.durationMillis));
    }
    if (status.didJustFinish) {
      video.current.pauseAsync();
    }
  }, [status])

  // top contorls
  const handleBackNavigation = async () => {
    if (orientationIsLandscape) {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
      navigation.goBack();
    }
  }

  // middle controls
  let backCount = 0, action = '', backTimer
  const doublePress = (actionType) => {
    backCount++
    console.log('here 1');
    if (backCount == 2 && actionType === action) {
        clearTimeout(backTimer);
        backCount = 0;
        action = '';
        console.log('here 2')
        switch (actionType) {
          case 'goTenSecsBack': {
            goTenSecsBack();
            break
          } case 'goTenSecsForward': {
            goTenSecsForward();
            break;
          }
        }
    } else {
      console.log('here 3')
      backTimer = setTimeout(() => {
        backCount = 0
        action = '';
      }, 500);
    }
    action = actionType;
  }

  const goTenSecsBack = () => {
    console.log("10 seconds back");
    let tenSecsBack = status.positionMillis - (10 * 1000);
    if (tenSecsBack < 0) {
      setProgress(0);
      setPositionInMillis(0);
      return;
    }
    setProgress(tenSecsBack / status.durationMillis);
    setPositionInMillis(tenSecsBack);
  }

  const goTenSecsForward = () => {
    console.log("10 seconds forward");
    let tenSecsForward = status.positionMillis + (10 * 1000);
    if (tenSecsForward > status.durationMillis) {
      setProgress(1)
      setPositionInMillis(status.durationMillis);
      return;
    }
    setProgress(tenSecsForward / status.durationMillis);
    setPositionInMillis(tenSecsForward);
  }

  // bottom controls
  const handleProgressPress = (e) => {
    if (progressLayout.width) {
      const position = e.nativeEvent.locationX;
      setProgress(position / progressLayout.width);
      setPositionInMillis((position / progressLayout.width) * status.durationMillis);
    }
  };

  const secondsToTime = (time) => {
    return ~~(time / 60) + ":" + (time % 60 < 10 ? "0" : "") + time % 60;
  }l

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
        positionMillis={positionInMillis}
      />
      {/* controls */}
      <Animatable.View
        className='absolute top-0 ml-8 my-4'
        animation="slideInDown"
        duration={200}
      >
        <TouchableOpacity onPress={handleBackNavigation}>
          <Icon.ArrowLeftIcon color="white" size={30} />
        </TouchableOpacity>
      </Animatable.View>
      <Animatable.View
        className='absolute w-full top-0 my-4'
        animation="slideInDown"
        duration={200}
      >
        <Text className=' text-center text-white'>Movie name</Text>
      </Animatable.View>
      
      {/* middle controls */}
      {/* <View className='absolute top-0 border-2 border-white	w-full h-full justify-around items-center flex-row'> */}
      <View className='absolute top-0	w-full h-full justify-around items-center flex-row'>
        <TouchableWithoutFeedback onPress={() => doublePress('goTenSecsBack')}>
          <Image
            source={require('../assets/10SecsBack.png')}
            className=""
          />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()}>
          {
            status.isPlaying
              ? <Icon.PauseIcon color="white" size={48} />
              : <Icon.PlayIcon color="white" size={48} />
          }
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => doublePress('goTenSecsForward')}>
          <Image
            source={require('../assets/10SecsForward.png')}
          />
        </TouchableWithoutFeedback>
      </View>

      <View className='absolute bottom-16 flex-row mx-6 items-center'>
        <TouchableWithoutFeedback
          onPress={handleProgressPress}
          className="w-full h-6"
          onLayout={(event) => setProgressLayout(event.nativeEvent.layout)}
        >
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
          <Text className='text-white'>{secondsToTime(Math.floor(progress * (status.durationMillis/1000)))}</Text>
        </View>
      </View>
      <Animatable.View
        className='absolute bottom-8 flex-row w-full justify-around'
        animation="slideInUp"
        duration={200}
      >
        <View className='flex-row items-center'>
          <Image
            source={require('../assets/speed.png')}
            className="mr-2"
          />
          <Text className='text-white'>Speed(1x)</Text>
        </View>
        <View className='flex-row items-center'>
          <Image
            source={require('../assets/lock.png')}
            className="mr-2"
          />
          <Text className='text-white'>Lock</Text>
        </View>
        <View className='flex-row items-center'>
          <Image
            source={require('../assets/episodes.png')}
            className="mr-2"
          />
          <Text className='text-white'>Episodes</Text>
        </View>
        <View className='flex-row items-center'>
          <Image
            source={require('../assets/subtitles.png')}
            className="mr-2"
          />
          <Text className='text-white'>Audio & Subtitles</Text>
        </View>
        <View className='flex-row items-center'>
          <Image
            source={require('../assets/nextEpisode.png')}
            className="mr-2"
          />
          <Text className='text-white'>Next Ep.</Text>
        </View>
      </Animatable.View>
    </View>
  )
}

export default VideoPlayer