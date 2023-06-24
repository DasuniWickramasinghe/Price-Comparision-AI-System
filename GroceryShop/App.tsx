import React from 'react';
// import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';
import Splashscreen from './Pages/SplashScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';


function App(): JSX.Element {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="splash" component={Splashscreen}  options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    margin: 10,
  },
});

export default App;