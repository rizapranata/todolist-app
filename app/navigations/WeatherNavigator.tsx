import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import WeatherScreen from '../screens/Weather/WeatherScreen';

const Stack = createNativeStackNavigator();

const WeatherNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerShadowVisible: false,
      }}>
      <Stack.Screen
        name="WeatherScreen"
        options={{title: 'Weather Screen'}}
        component={WeatherScreen}
      />
    </Stack.Navigator>
  );
};

export default WeatherNavigator;
