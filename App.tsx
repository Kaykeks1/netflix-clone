import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserRoomScreen from './screens/UserRoom'
import HomeScreen from './screens/Home'
import SearchScreen from './screens/Search'
import ComingSoonScreen from './screens/ComingSoon'
import DownloadsScreen from './screens/Downloads'
import MoreScreen from './screens/More'
import VideoPlayerScreen from './screens/VideoPlayer'
import { NativeWindStyleSheet } from "nativewind";
import 'react-native-url-polyfill/auto';
import { store } from './store'
import { Provider } from 'react-redux'
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import * as Font from 'expo-font';

const Stack = createNativeStackNavigator();
NativeWindStyleSheet.setOutput({ web: 'native' })

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(Entypo.font);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        console.log('before')
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log('after')
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
  return (
    //remove view
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <Provider store={store}>
          <Stack.Navigator screenOptions={{ animation: 'none' }}>
            <Stack.Screen name="UserRoom" component={UserRoomScreen} options={{headerShown: false}} />
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false }} />
            <Stack.Screen name="Search" component={SearchScreen} options={{headerShown: false}} />
            <Stack.Screen name="ComingSoon" component={ComingSoonScreen} options={{headerShown: false}} />
            <Stack.Screen name="Downloads" component={DownloadsScreen} options={{headerShown: false}} />
            <Stack.Screen name="More" component={MoreScreen} options={{headerShown: false}} />
            <Stack.Screen name="VideoPlayer" component={VideoPlayerScreen} options={{headerShown: false}} />
          </Stack.Navigator>
        </Provider>
      </NavigationContainer>
    </View>
  );
}


