import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserRoomScreen from './screens/UserRoom'
import HomeScreen from './screens/Home'
import SearchScreen from './screens/Search'
import ComingSoonScreen from './screens/ComingSoon'
import DownloadsScreen from './screens/Downloads'
import MoreScreen from './screens/More'
import { NativeWindStyleSheet } from "nativewind";
import 'react-native-url-polyfill/auto';

const Stack = createNativeStackNavigator();
NativeWindStyleSheet.setOutput({ web: 'native' })


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ animation: 'none' }}>
        <Stack.Screen name="UserRoom" component={UserRoomScreen} options={{headerShown: false}} />
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false }} />
        <Stack.Screen name="Search" component={SearchScreen} options={{headerShown: false}} />
        <Stack.Screen name="ComingSoon" component={ComingSoonScreen} options={{headerShown: false}} />
        <Stack.Screen name="Downloads" component={DownloadsScreen} options={{headerShown: false}} />
        <Stack.Screen name="More" component={MoreScreen} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


