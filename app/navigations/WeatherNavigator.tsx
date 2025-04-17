import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import WeatherScreen from '../screens/Weather/WeatherScreen';

const Stack = createNativeStackNavigator();


const WeatherNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="WeatherScreen" component={WeatherScreen} />
    </Stack.Navigator>
  )
}

export default WeatherNavigator