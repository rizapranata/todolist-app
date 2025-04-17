import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home/HomeScreen';
import HomeDetailScreen from '../screens/Home/HomeDetailScreen';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerShadowVisible: false,
      }}>
      <Stack.Screen
        name="HomeScreen"
        options={{
          title: 'Home Screen',
          headerTitleAlign: 'center',
          headerShadowVisible: false,
        }}
        component={HomeScreen}
      />
      <Stack.Screen
        name="HomeDetail"
        options={{title: 'Detail To Do'}}
        component={HomeDetailScreen}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
