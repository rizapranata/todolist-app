import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home/HomeScreen';
import DetailTodo from '../screens/Home/DetailTodo';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
      }}>
      <Stack.Screen
        name="HomeScreen"
        options={{
          title: 'Home Screen',
          headerTitleAlign: 'center',
        }}
        component={HomeScreen}
      />
      <Stack.Screen
        name="DetailTodo"
        options={{title: 'Detail To Do'}}
        component={DetailTodo}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
