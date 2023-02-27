import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserRoomScreen from './screens/UserRoom'
import { NativeWindStyleSheet } from "nativewind";

const Stack = createNativeStackNavigator();
NativeWindStyleSheet.setOutput({ web: 'native' })


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="UserRoom" component={UserRoomScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


