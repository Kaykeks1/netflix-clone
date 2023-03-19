import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import { Video, AVPlaybackStatus } from 'expo-av';

const VideoPlayer = () => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View className='flex-1 justify-center bg-[#ecf0f1]'>
      <Video
        className='h-full w-full'
        ref={video}
        source={{
          uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls
        orientation="landscape"
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      {/* <View
        // style={styles.buttons}
      >
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />
      </View> */}
    </View>
  )
}

export default VideoPlayer