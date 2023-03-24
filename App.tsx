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

const Stack = createNativeStackNavigator();
NativeWindStyleSheet.setOutput({ web: 'native' })


export default function App() {
  return (
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
  );
}


